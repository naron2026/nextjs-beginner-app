"use client";

import { useState } from "react";
import Link from "next/link";
import TaskItem from "@/components/TaskItem";

// Define the Task structure
interface Task {
  id: number;
  text: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  // Function to add a task
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: input,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Function to delete a task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Next.js Task Tracker
        </h1>

        {/* Form Input */}
        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.length == 0 ? (
            <p className="text-slate-400 text-center text-sm">
              No tasks yet. Add on above!
            </p>
          ) : (
            tasks.map((task) => (
              <TaskItem key={task.id} task={task} onDelete={deleteTask} />
            ))
          )}
        </ul>

        {/* Link to About Page */}
        <div className="mt-8 pt-4 border-t text-center">
          <Link
            href="/about"
            className="text-blue-600 hover:underline text-sm font-semibold"
          >
            Go to About Page &rarr;
          </Link>
          <p className="text-sm">
            Learn more: https://share.gemini.google/WmQwz5ZO16Zm
          </p>
        </div>
      </div>
    </main>
  );
}
