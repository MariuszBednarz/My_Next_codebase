import { addTask } from "@/actions/actions";
import prisma from "@/lib/db";
export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Tasks</h1>
      <ul>
        {tasks.map(({ title }: { title: string }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
      <form action={addTask} className="flex flex-col">
        <input
          type="text"
          name="title"
          className="w-40 h-10 border-2 border-cyan-600 m-4"
        />
        <button
          className="w-40 h-10 border-2 border-cyan-600 text-xl m-4"
          type="submit"
        >
          Add task
        </button>
      </form>
    </main>
  );
}
