import Link from "next/link";

// Notice: This is a Server Component (no 'use client' needed!)
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          About This App
        </h1>
        <p className="text-slate-600 mb-6">
          This task manager was built using Next.js App Router, Tailwind CSS,
          and React Server/Client Components.
        </p>

        <Link
          href="/"
          className="inline-block bg-slate-800 text-white px-4 py-3 rounded-lg hover:bg-slate-900 transition text-sm"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}
