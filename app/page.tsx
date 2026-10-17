import { getTasks } from '../lib/tasks';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const tasks = await getTasks();
  const open = tasks.filter((t) => !t.done).length;

  return (
    <main>
      <h1>Job list</h1>
      <p>
        {tasks.length} job{tasks.length === 1 ? '' : 's'}, {open} open
      </p>

      {tasks.length === 0 ? (
        <p>No jobs yet. (If data/tasks.json has rows, this line is the bug.)</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              {t.done ? '✔' : '○'} {t.title}
            </li>
          ))}
        </ul>
      )}

      <form action="/api/tasks" method="post">
        <input name="title" placeholder="Add a job" autoComplete="off" />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}
