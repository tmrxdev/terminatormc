"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default function Home() {
  const { data: session, status } = useSession();
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const adminId = process.env.NEXT_PUBLIC_DISCORD_ADMIN_ID;
  const userId = (session?.user as SessionUser | undefined)?.id;
  const isAdmin = userId && adminId && userId === adminId;

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Login with Discord</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => signIn("discord")}
        >
          Login with Discord
        </button>
      </div>
    );
  }

  const sendCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    setLoading(true);
    setOutput((prev) => [...prev, `> ${command}`]);
    try {
      const res = await fetch("/api/rcon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command }),
      });
      const data = await res.json();
      setOutput((prev) => [...prev, data.response || "(no response)"]);
    } catch (err) {
      setOutput((prev) => [...prev, "Error sending command."]);
    }
    setCommand("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name || userId}</h1>
      <button
        className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 transition mb-4"
        onClick={() => signOut()}
      >
        Logout
      </button>
      {/* Terminal UI */}
      <div className="w-full max-w-2xl bg-black text-green-400 font-mono rounded p-4 min-h-[300px] shadow-lg flex flex-col">
        <div className="flex-1 overflow-y-auto mb-2" style={{ maxHeight: 300 }}>
          {output.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        <form onSubmit={sendCommand} className="flex gap-2">
          <input
            className="flex-1 bg-transparent border-b border-green-400 outline-none text-green-200 px-2"
            type="text"
            value={command}
            onChange={e => setCommand(e.target.value)}
            placeholder="Type a Minecraft command..."
            disabled={loading}
            autoFocus
          />
          <button
            className="bg-green-700 px-4 py-1 rounded text-white disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            Send
          </button>
        </form>
      </div>
      {isAdmin && (
        <a href="/admin" className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
          Open Admin Panel
        </a>
      )}
    </div>
  );
}
