import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.id !== process.env.NEXT_PUBLIC_DISCORD_ADMIN_ID) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const logs = await prisma.commandLog.findMany({
    orderBy: { timestamp: "desc" },
    take: 200,
  });
  return NextResponse.json({ logs });
} 