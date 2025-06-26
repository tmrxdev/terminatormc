import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.id !== process.env.NEXT_PUBLIC_DISCORD_ADMIN_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { command } = await req.json();
  if (!command) return NextResponse.json({ error: "Missing command" }, { status: 400 });
  await prisma.blacklistedCommand.create({ data: { command } });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.id !== process.env.NEXT_PUBLIC_DISCORD_ADMIN_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { command } = await req.json();
  if (!command) return NextResponse.json({ error: "Missing command" }, { status: 400 });
  await prisma.blacklistedCommand.delete({ where: { command } });
  return NextResponse.json({ success: true });
} 