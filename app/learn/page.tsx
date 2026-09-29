import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4 flex flex-col items-center">
      <div className="bg-white max-w-3xl w-full p-8 rounded-xl shadow-md space-y-8">
        {/* Header */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold text-slate-800">
            Next.js Beginner Guide & Lesson Notes
          </h1>
          <p className="text-slate-500 mt-2">
            A summary of foundational concepts, rules, and components learned in
            Day 1.
          </p>
        </div>

        {/* Section 1: Core Routing Rules */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-600 pl-3">
            1. File-System Routing Rules
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Next.js uses folder paths inside the{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600">
              app
            </code>{" "}
            directory to determine URLs.
          </p>
          <ul className="list-disc list-inside bg-slate-50 p-4 rounded-lg text-sm text-slate-700 space-y-2">
            <li>
              <strong>Page Naming Rule:</strong> Files MUST be named strictly{" "}
              <code className="bg-white px-1 border rounded">page.tsx</code>{" "}
              (singular). Naming it <i>pages.tsx</i> or <i>index.tsx</i> will
              trigger a <strong>404 Not Found</strong> error.
            </li>
            <li>
              <code className="bg-white px-1 border rounded">app/page.tsx</code>{" "}
              &rarr; <code className="text-slate-500">/</code> (Home)
            </li>
            <li>
              <code className="bg-white px-1 border rounded">
                app/about/page.tsx
              </code>{" "}
              &rarr; <code className="text-slate-500">/about</code>
            </li>
            <li>
              <code className="bg-white px-1 border rounded">
                app/users/page.tsx
              </code>{" "}
              &rarr; <code className="text-slate-500">/users</code>
            </li>
            <li>
              <code className="bg-white px-1 border rounded">
                app/learn/page.tsx
              </code>{" "}
              &rarr; <code className="text-slate-500">/learn</code>
            </li>
          </ul>
        </section>

        {/* Section 2: Server vs. Client Components */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-600 pl-3">
            2. Server Components vs. Client Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-slate-50">
              <h3 className="font-bold text-slate-800 mb-2">
                Server Components (Default)
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Renders entirely on the server.</li>
                <li>Zero JavaScript bundle added to the browser.</li>
                <li>
                  Direct{" "}
                  <code className="bg-white px-1 border rounded">
                    async/await
                  </code>{" "}
                  data fetching (e.g.,{" "}
                  <code className="bg-white px-1 border rounded">/users</code>{" "}
                  page).
                </li>
                <li>Ideal for SEO-heavy or static content.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-slate-50">
              <h3 className="font-bold text-slate-800 mb-2">
                Client Components
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>
                  Requires{" "}
                  <code className="bg-white px-1 border rounded">
                    'use client';
                  </code>{" "}
                  at line 1.
                </li>
                <li>
                  Needed for React hooks (
                  <code className="bg-white px-1 border rounded">useState</code>
                  ,{" "}
                  <code className="bg-white px-1 border rounded">
                    useEffect
                  </code>
                  ).
                </li>
                <li>
                  Handles user interaction & click events (
                  <code className="bg-white px-1 border rounded">onClick</code>,{" "}
                  <code className="bg-white px-1 border rounded">onSubmit</code>
                  ).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Navigation */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-600 pl-3">
            3. Navigation with <code className="text-slate-800">next/link</code>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Always import{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600">
              Link
            </code>{" "}
            from{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600">
              'next/link'
            </code>{" "}
            for internal routing instead of{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded">
              &lt;a&gt;
            </code>{" "}
            tags to avoid full page reloads and enable instant pre-fetching.
          </p>
        </section>

        {/* Section 4: Chat Reference & Quick Links */}
        <section className="pt-4 border-t space-y-4">
          <h2 className="text-lg font-bold text-slate-800">Quick Navigation</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-900 transition"
            >
              Home (Task Tracker)
            </Link>
            <Link
              href="/about"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-900 transition"
            >
              About Page
            </Link>
            <Link
              href="/users"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-900 transition"
            >
              Users (API Fetch)
            </Link>
          </div>
        </section>
        {/* Section 4: Chat Reference & Quick Links */}
        <section className="pt-4 border-t space-y-4">
          <h2 className="text-lg font-bold text-slate-800">
            Lesson Chat Reference
          </h2>

          <a
            href="https://share.gemini.google/K1aICjTnhUa7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium"
          >
            <span>💬 Open Gemini Conversation History</span>
            <span className="text-xs">↗</span>
          </a>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-900 transition"
            >
              Home (Task Tracker)
            </Link>
            <Link
              href="/about"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-900 transition"
            >
              About Page
            </Link>
            <Link
              href="/users"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-900 transition"
            >
              Users (API Fetch)
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
