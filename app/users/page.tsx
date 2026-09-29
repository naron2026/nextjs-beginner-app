import Link from "next/link";

// TypeScript interface for the API response
interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}
// export default function userPage() {
//   return <h1>hello</h1>;
// }

// Making the component function 'async' allows direct await fetch()
export default async function UserPage() {
  // Fetching data on the server
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold text-slate-800 mb-2 text-center">
          Team Members
        </h1>
        <p className="text-slate-500 text-sm text-center mb-6">
          Fetched directly on the server vai API
        </p>

        <ul className="space-y-3 mb-6">
          {users.slice(0, 6).map((user) => (
            <li
              key={user.id}
              className="p-3 bg-slate-50 rounded-lg border border-slate-200"
            >
              <p className="font-semibold text-slate-500">{user.name}</p>
              <p className="text-xs text-slate-500">
                {user.email} . {user.company.name}
              </p>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition text-sm"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
