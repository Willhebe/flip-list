// ────────────────────────────────────────────────────────────────
//  THE ONE FILE YOU WRITE.
//  Everything else in this app is already built and running.
//  Fill in getTasks(), then:   npm run dev   ->   http://localhost:3000
//
//  Done looks like:  the page lists the jobs from data/tasks.json.
//  Not done looks like: it says "No jobs yet" while data/tasks.json
//  has rows, or it shows a red error. Both are fine. That's the point.
// ────────────────────────────────────────────────────────────────

import { sql } from './db'

export type Task = { id: number; title: string; done: boolean };



export async function getTasks(): Promise<Task[]> {

   try {
	
        const rows = await sql.query('SELECT id, title, done FROM tasks ORDER BY id');
	return rows as Task[];
	  }
  catch(err)
  {
     console.error(err);
  }
  return [];
}
