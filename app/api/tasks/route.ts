import { redirect } from 'next/navigation';
import { sql } from '../../../lib/db';


export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const form = await req.formData();
  const title = String(form.get('title') ?? '').trim();
  if (title) redirect('/');
try
{
        
    await sql.query('INSERT INTO tasks VALUES (title) VALUES ($1) RETURNING id', '[title]');
  }
catch (err)
{
const message = err instanceof Error ? err.message : String (err);
return new Response ('INSERT failed: ${message}', {status : 500});
}
  redirect('/');
}
