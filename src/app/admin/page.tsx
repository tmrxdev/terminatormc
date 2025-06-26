"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

interface CommandLog {
  id: string;
  userId: string;
  command: string;
  timestamp: string;
}
interface User {
  id: string;
  name?: string | null;
  image?: string | null;
  banned: boolean;
}

export default function AdminPanel() {
  const { data: session, status } = useSession();
  const [logs, setLogs] = useState<CommandLog[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [blacklist, setBlacklist] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newCommand, setNewCommand] = useState("");
  const adminId = process.env.NEXT_PUBLIC_DISCORD_ADMIN_ID;
  const userId = (session?.user as any)?.id;
  const isAdmin = userId && adminId && userId === adminId;

  // Fetch logs
  useEffect(() => {
    if (isAdmin) {
      fetch("/api/admin/logs").then(res => res.json()).then(data => {
        setLogs(data.logs || []);
        setLoading(false);
      }).catch(() => {
        setError("Failed to load logs");
        setLoading(false);
      });
    }
  }, [isAdmin]);

  // Fetch users
  useEffect(() => {
    if (isAdmin) {
      fetch("/api/admin/users").then(res => res.json()).then(data => {
        setUsers(data.users || []);
      });
    }
  }, [isAdmin]);

  // Fetch blacklist
  useEffect(() => {
    if (isAdmin) {
      fetch("/api/admin/blacklist/list").then(res => res.json()).then(data => {
        setBlacklist((data.commands || []).map((c: { command: string }) => c.command));
      });
    }
  }, [isAdmin]);

  const banUser = async (id: string) => {
    await fetch("/api/admin/ban", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: id }) });
    setUsers(users => users.map(u => u.id === id ? { ...u, banned: true } : u));
  };
  const unbanUser = async (id: string) => {
    await fetch("/api/admin/ban", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: id }) });
    setUsers(users => users.map(u => u.id === id ? { ...u, banned: false } : u));
  };
  const addBlacklist = async () => {
    if (!newCommand.trim()) return;
    await fetch("/api/admin/blacklist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ command: newCommand.trim() }) });
    setBlacklist(list => [...list, newCommand.trim()]);
    setNewCommand("");
  };
  const removeBlacklist = async (command: string) => {
    await fetch("/api/admin/blacklist", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ command }) });
    setBlacklist(list => list.filter(c => c !== command));
  };

  if (status === "loading") return <div>Loading...</div>;
  if (!isAdmin) return <div className="text-red-600 text-center mt-20">Access denied.</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <button onClick={() => signOut()} className="mb-6 bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 transition">Logout</button>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Command Logs</h2>
        {loading ? <div>Loading logs...</div> : error ? <div>{error}</div> : (
          <div className="overflow-x-auto max-h-96 overflow-y-auto border rounded bg-black text-green-400 font-mono p-2">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-1">User ID</th>
                  <th className="px-2 py-1">Command</th>
                  <th className="px-2 py-1">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {logs.map(log => (
                  <tr key={log.id}>
                    <td className="px-2 py-1">{log.userId}</td>
                    <td className="px-2 py-1">{log.command}</td>
                    <td className="px-2 py-1">{new Date(log.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ban/Unban Users</h2>
        <div className="overflow-x-auto max-h-60 overflow-y-auto border rounded bg-gray-100 p-2 mb-2">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="px-2 py-1">User ID</th>
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Status</th>
                <th className="px-2 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="px-2 py-1">{user.id}</td>
                  <td className="px-2 py-1">{user.name || <span className="italic text-gray-400">(no name)</span>}</td>
                  <td className="px-2 py-1">{user.banned ? <span className="text-red-600">Banned</span> : <span className="text-green-600">Active</span>}</td>
                  <td className="px-2 py-1">
                    {user.banned ? (
                      <button onClick={() => unbanUser(user.id)} className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Unban</button>
                    ) : (
                      <button onClick={() => banUser(user.id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Ban</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Blacklist Commands</h2>
        <form onSubmit={e => { e.preventDefault(); addBlacklist(); }} className="flex gap-2 mb-2">
          <input
            className="flex-1 border-b border-gray-400 px-2 py-1 outline-none"
            type="text"
            value={newCommand}
            onChange={e => setNewCommand(e.target.value)}
            placeholder="Add command to blacklist (e.g. op)"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Add</button>
        </form>
        <div className="overflow-x-auto max-h-40 overflow-y-auto border rounded bg-gray-100 p-2">
          <ul>
            {blacklist.map(cmd => (
              <li key={cmd} className="flex items-center justify-between py-1 px-2">
                <span className="font-mono">{cmd}</span>
                <button onClick={() => removeBlacklist(cmd)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
} 