import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4 flex flex-col items-center">
      <div className="bg-white max-w-4xl w-full p-8 rounded-xl shadow-md space-y-10">
        {/* Header */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold text-slate-800">
            Next.js Beginner Guide & Lesson Notes
          </h1>
          <p className="text-slate-500 mt-2">
            Complete source code, syntax-highlighted examples, and key concepts
            from Day 1.
          </p>
        </div>

        {/* Section 1: Core Routing Rules */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-600 pl-3">
            1. File-System Routing Rules (App Router)
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Next.js maps folders directly to URL paths. Every route folder MUST
            contain a file named strictly{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-mono">
              page.tsx
            </code>{" "}
            or{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-mono">
              page.jsx
            </code>
            .
          </p>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-sm text-amber-800">
            <strong>⚠️ Crucial Rule:</strong> Files must be named singular{" "}
            <code className="font-mono font-bold">page.tsx</code>. Naming it{" "}
            <code className="font-mono">pages.tsx</code> or{" "}
            <code className="font-mono">UsersPage.tsx</code> will result in a{" "}
            <strong>404 Not Found</strong> error!
          </div>

          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <pre>{`app/
├── layout.tsx         --> Root Layout
├── page.tsx           --> http://localhost:3000/
├── about/
│   └── page.tsx       --> http://localhost:3000/about
├── users/
│   └── page.tsx       --> http://localhost:3000/users
└── learn/
    └── page.tsx       --> http://localhost:3000/learn`}</pre>
          </div>
        </section>

        {/* Section 2: Server vs. Client Components */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-600 pl-3">
            2. Server Components vs. Client Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-800">
                Server Components (Default)
              </h3>
              <p className="text-xs text-slate-600">
                Executes on the server. Sends zero extra JavaScript to the
                browser, offering great performance and SEO.
              </p>
              <div className="bg-slate-900 p-3 rounded font-mono text-xs overflow-x-auto">
                <p className="text-slate-500">
                  // Direct async/await data fetching
                </p>
                <p>
                  <span className="text-purple-400">
                    export default async function
                  </span>{" "}
                  <span className="text-blue-400">Page</span>() &#123;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">const</span> res ={" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">fetch</span>(
                  <span className="text-emerald-400">'...'</span>);
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">return</span> &lt;
                  <span className="text-red-400">div</span>&gt;&#123;
                  <span className="text-slate-400">/* Render HTML */</span>
                  &#125;&lt;/<span className="text-red-400">div</span>&gt;;
                </p>
                <p>&#125;</p>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-800">Client Components</h3>
              <p className="text-xs text-slate-600">
                Executes in the browser. Required whenever you use React state,
                hooks, or event listeners.
              </p>
              <div className="bg-slate-900 p-3 rounded font-mono text-xs overflow-x-auto">
                <p className="text-emerald-400">
                  'use client';{" "}
                  <span className="text-slate-500">// Line 1 directive</span>
                </p>
                <br />
                <p>
                  <span className="text-purple-400">import</span> &#123;
                  useState &#125; <span className="text-purple-400">from</span>{" "}
                  <span className="text-emerald-400">'react'</span>;
                </p>
                <br />
                <p>
                  <span className="text-purple-400">
                    export default function
                  </span>{" "}
                  <span className="text-blue-400">Page</span>() &#123;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">const</span> [state,
                  setState] = <span className="text-yellow-300">useState</span>
                  ();
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">return</span> &lt;
                  <span className="text-red-400">button</span>{" "}
                  <span className="text-amber-300">onClick</span>
                  =&#123;...&#125;&gt;Click&lt;/
                  <span className="text-red-400">button</span>&gt;;
                </p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Navigation */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-800 border-l-4 border-blue-600 pl-3">
            3. Navigation with <code className="text-slate-800">next/link</code>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Always use{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-mono">
              import Link from 'next/link'
            </code>{" "}
            instead of regular{" "}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">
              &lt;a&gt;
            </code>{" "}
            tags. It pre-fetches pages in the background and transitions between
            routes instantly without refreshing the browser page.
          </p>
        </section>

        {/* Section 4: Project Source Code */}
        <section className="space-y-6 pt-4 border-t">
          <h2 className="text-2xl font-bold text-slate-800">
            Project Source Code
          </h2>

          {/* File 1: app/page.tsx */}
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-slate-200 px-4 py-2 rounded-t-lg">
              <span className="font-mono text-xs font-bold text-slate-700">
                app/page.tsx (Home & Task Tracker)
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded">
                Client Component
              </span>
            </div>
            <div className="bg-slate-900 text-slate-100 p-4 rounded-b-lg font-mono text-xs overflow-x-auto max-h-80 space-y-1">
              <p className="text-emerald-400">'use client';</p>
              <br />
              <p>
                <span className="text-purple-400">import</span> &#123; useState
                &#125; <span className="text-purple-400">from</span>{" "}
                <span className="text-emerald-400">'react'</span>;
              </p>
              <p>
                <span className="text-purple-400">import</span> Link{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-emerald-400">'next/link'</span>;
              </p>
              <p>
                <span className="text-purple-400">import</span> TaskItem{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-emerald-400">
                  '@/components/TaskItem'
                </span>
                ;
              </p>
              <br />
              <p>
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-yellow-300">Task</span> &#123;
              </p>
              <p className="pl-4">
                id: <span className="text-blue-300">number</span>;
              </p>
              <p className="pl-4">
                text: <span className="text-blue-300">string</span>;
              </p>
              <p>&#125;</p>
              <br />
              <p>
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-blue-400">Home</span>() &#123;
              </p>
              <p className="pl-4">
                <span className="text-purple-400">const</span> [tasks, setTasks]
                = <span className="text-yellow-300">useState</span>&lt;
                <span className="text-yellow-300">Task</span>[]&gt;([]);
              </p>
              <p className="pl-4">
                <span className="text-purple-400">const</span> [input, setInput]
                = <span className="text-yellow-300">useState</span>(
                <span className="text-emerald-400">''</span>);
              </p>
              <br />
              <p className="pl-4">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">addTask</span> = (e:
                React.FormEvent) =&gt; &#123;
              </p>
              <p className="pl-8">
                e.<span className="text-yellow-300">preventDefault</span>();
              </p>
              <p className="pl-8">
                <span className="text-purple-400">if</span> (!input.
                <span className="text-yellow-300">trim</span>()){" "}
                <span className="text-purple-400">return</span>;
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">setTasks</span>([...tasks,
                &#123; id: Date.<span className="text-yellow-300">now</span>(),
                text: input &#125;]);
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">setInput</span>(
                <span className="text-emerald-400">''</span>);
              </p>
              <p className="pl-4">&#125;;</p>
              <br />
              <p className="pl-4">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">deleteTask</span> = (id:{" "}
                <span className="text-blue-300">number</span>) =&gt; &#123;
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">setTasks</span>(tasks.
                <span className="text-yellow-300">filter</span>((task) =&gt;
                task.id !== id));
              </p>
              <p className="pl-4">&#125;;</p>
              <br />
              <p className="pl-4">
                <span className="text-purple-400">return</span> (
              </p>
              <p className="pl-8">
                &lt;<span className="text-red-400">main</span>{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">
                  "min-h-screen bg-slate-100 flex flex-col items-center
                  justify-center p-6"
                </span>
                &gt;
              </p>
              <p className="pl-12">
                &lt;<span className="text-red-400">div</span>{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">
                  "bg-white p-8 rounded-xl shadow-md w-full max-w-md"
                </span>
                &gt;
              </p>
              <p className="pl-16">
                &lt;<span className="text-red-400">h1</span>{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">
                  "text-2xl font-bold text-slate-800 mb-6 text-center"
                </span>
                &gt;Next.js Task Tracker&lt;/
                <span className="text-red-400">h1</span>&gt;
              </p>
              <p className="pl-16">
                <span className="text-slate-500">
                  &#123;/* Task Form & List Rendering */&#125;
                </span>
              </p>
              <p className="pl-12">
                &lt;/<span className="text-red-400">div</span>&gt;
              </p>
              <p className="pl-8">
                &lt;/<span className="text-red-400">main</span>&gt;
              </p>
              <p className="pl-4">);</p>
              <p>&#125;</p>
            </div>
          </div>

          {/* File 2: components/TaskItem.tsx */}
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-slate-200 px-4 py-2 rounded-t-lg">
              <span className="font-mono text-xs font-bold text-slate-700">
                components/TaskItem.tsx
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded">
                Reusable Component
              </span>
            </div>
            <div className="bg-slate-900 text-slate-100 p-4 rounded-b-lg font-mono text-xs overflow-x-auto max-h-80 space-y-1">
              <p className="text-emerald-400">'use client';</p>
              <br />
              <p>
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-yellow-300">TaskItemProps</span> &#123;
              </p>
              <p className="pl-4">
                task: &#123; id: <span className="text-blue-300">number</span>;
                text: <span className="text-blue-300">string</span> &#125;;
              </p>
              <p className="pl-4">
                onDelete: (id: <span className="text-blue-300">number</span>)
                =&gt; <span className="text-blue-300">void</span>;
              </p>
              <p>&#125;</p>
              <br />
              <p>
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-blue-400">TaskItem</span>(&#123; task,
                onDelete &#125;:{" "}
                <span className="text-yellow-300">TaskItemProps</span>) &#123;
              </p>
              <p className="pl-4">
                <span className="text-purple-400">return</span> (
              </p>
              <p className="pl-8">
                &lt;<span className="text-red-400">li</span>{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">
                  "flex justify-between items-center bg-slate-50 p-3 rounded-lg
                  border border-slate-200"
                </span>
                &gt;
              </p>
              <p className="pl-12">
                &lt;<span className="text-red-400">span</span>{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">"text-slate-700"</span>
                &gt;&#123;task.text&#125;&lt;/
                <span className="text-red-400">span</span>&gt;
              </p>
              <p className="pl-12">
                &lt;<span className="text-red-400">button</span>{" "}
                <span className="text-amber-300">onClick</span>=&#123;() =&gt;{" "}
                <span className="text-yellow-300">onDelete</span>(task.id)&#125;{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">
                  "text-red-500 hover:text-red-700 text-sm font-semibold
                  transition"
                </span>
                &gt;Delete&lt;/<span className="text-red-400">button</span>&gt;
              </p>
              <p className="pl-8">
                &lt;/<span className="text-red-400">li</span>&gt;
              </p>
              <p className="pl-4">);</p>
              <p>&#125;</p>
            </div>
          </div>

          {/* File 3: app/users/page.tsx */}
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-slate-200 px-4 py-2 rounded-t-lg">
              <span className="font-mono text-xs font-bold text-slate-700">
                app/users/page.tsx (API Fetching)
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded">
                Server Component
              </span>
            </div>
            <div className="bg-slate-900 text-slate-100 p-4 rounded-b-lg font-mono text-xs overflow-x-auto max-h-80 space-y-1">
              <p>
                <span className="text-purple-400">import</span> Link{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-emerald-400">'next/link'</span>;
              </p>
              <br />
              <p>
                <span className="text-purple-400">
                  export default async function
                </span>{" "}
                <span className="text-blue-400">UsersPage</span>() &#123;
              </p>
              <p className="pl-4">
                <span className="text-purple-400">const</span> response ={" "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-yellow-300">fetch</span>(
                <span className="text-emerald-400">
                  'https://jsonplaceholder.typicode.com/users'
                </span>
                );
              </p>
              <p className="pl-4">
                <span className="text-purple-400">const</span> users ={" "}
                <span className="text-purple-400">await</span> response.
                <span className="text-yellow-300">json</span>();
              </p>
              <br />
              <p className="pl-4">
                <span className="text-purple-400">return</span> (
              </p>
              <p className="pl-8">
                &lt;<span className="text-red-400">main</span>{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">
                  "min-h-screen bg-slate-100 flex flex-col items-center
                  justify-center p-6"
                </span>
                &gt;
              </p>
              <p className="pl-12">
                &lt;<span className="text-red-400">div</span>{" "}
                <span className="text-amber-300">className</span>=
                <span className="text-emerald-400">
                  "bg-white p-8 rounded-xl shadow-md w-full max-w-lg"
                </span>
                &gt;
              </p>
              <p className="pl-16">
                <span className="text-slate-500">
                  &#123;/* Users List Rendered Server-Side */&#125;
                </span>
              </p>
              <p className="pl-12">
                &lt;/<span className="text-red-400">div</span>&gt;
              </p>
              <p className="pl-8">
                &lt;/<span className="text-red-400">main</span>&gt;
              </p>
              <p className="pl-4">);</p>
              <p>&#125;</p>
            </div>
          </div>
        </section>

        {/* Section 5: Conversation Chat Reference & Quick Links */}
        <section className="pt-6 border-t space-y-4">
          <h2 className="text-xl font-bold text-slate-800">
            💬 Lesson Chat Reference
          </h2>
          <p className="text-slate-600 text-sm">
            Copy your chat share link from your browser or chat interface and
            paste it below to link directly back to this conversation session:
          </p>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <a
              href="https://share.gemini.google/oHieytmzI7aA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold text-sm"
            >
              <span>Open Original Chat Session</span>
              <span>↗</span>
            </a>
          </div>

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
