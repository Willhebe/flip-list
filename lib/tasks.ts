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
  // TODO 1: read FILE as utf-8 text.
  // TODO 2: JSON.parse it, return the array.
  // TODO 3: if the file is missing, empty, or the JSON is broken,
  //         return [] instead of crashing.
   try {
	
        // const contents = await readFile( FILE , { encoding: 'utf8' });
	// console.log(contents);
        const rows = await sql.query('SELECT id, title, done FROM tasks ORDER BY id');
	return rows as Task[];
	//const obj = JSON.parse(contents);
	//if(Object.prototype.toString.call(obj) === '[object Array]') {
        //  return obj ;
        //}
  }
  catch(err)
  {
     console.error(err);
  }
  return [];
}
