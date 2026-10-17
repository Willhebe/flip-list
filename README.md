# flip-list

A tiny Next.js app with ONE file for you to write.

## Run it
    npm install
    npm run dev
    open http://localhost:3000

## The one file
    lib/tasks.ts  ->  getTasks()

Everything else (the page, the Add button, the data file) is already built.
The page calls your getTasks() and renders whatever it returns.

## Done / not done
- Done: the page lists the three jobs in data/tasks.json, and Add works.
- Not done: it says "No jobs yet" while data/tasks.json has rows, or a red error.
Both are useful. A small thing that can fail is a thing that can finish.

## When it's done
Screenshot the page and send it. Then I read your lib/tasks.ts and show you the
exact lines where it can break: empty file, bad JSON, missing file.

Nothing here needs a decision from you. It either runs or it doesn't.
