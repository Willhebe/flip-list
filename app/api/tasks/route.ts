import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { redirect } from 'next/navigation';
import type { Task } from '../../../lib/tasks';

export const dynamic = 'force-dynamic';

const FILE = path.join(process.cwd(), 'data', 'tasks.json');

async function readAll(): Promise<Task[]> {
  try {
    const parsed = JSON.parse(await readFile(FILE, 'utf-8'));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  const form = await req.formData();
  const title = String(form.get('title') ?? '').trim();
  if (title) {
    const tasks = await readAll();
    const id = tasks.reduce((m, t) => Math.max(m, t.id), 0) + 1;
    tasks.push({ id, title, done: false });
    await writeFile(FILE, JSON.stringify(tasks, null, 2));
  }
  redirect('/');
}
