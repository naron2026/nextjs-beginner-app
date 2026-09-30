"use client";

interface Task {
  id: number;
  text: string;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

export default function TaskItem({ task, onDelete }: TaskItemProps) {
  return (
    <li className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
      {task.text}
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 hover:cursor-pointer text-sm font-semibold transition"
      >
        Delete
      </button>
    </li>
  );
}
