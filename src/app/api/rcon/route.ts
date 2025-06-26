import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { Rcon } from "rcon-client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = session.user.id;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.banned) {
    return NextResponse.json({ error: "Banned or not found" }, { status: 403 });
  }
  const { command } = await req.json();
  if (!command || typeof command !== "string") {
    return NextResponse.json({ error: "Invalid command" }, { status: 400 });
  }
  // Check blacklist
  const blacklisted = await prisma.blacklistedCommand.findFirst({ where: { command: { equals: command.split(" ")[0], mode: "insensitive" } } });
  if (blacklisted) {
    await prisma.commandLog.create({ data: { userId, command: `[BLOCKED] ${command}` } });
    return NextResponse.json({ response: "This command is blacklisted." });
  }
  // Log command
  await prisma.commandLog.create({ data: { userId, command } });
  // Send to RCON
  try {
    const rcon = await Rcon.connect({
      host: process.env.RCON_HOST!,
      port: Number(process.env.RCON_PORT!),
      password: process.env.RCON_PASSWORD!,
    });
    const response = await rcon.send(command);
    await rcon.end();
    return NextResponse.json({ response });
  } catch (err) {
    return NextResponse.json({ response: "RCON error: " + (err as Error).message });
  }
} 