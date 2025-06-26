import NextAuth, { type AuthOptions, type SessionStrategy } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: "identify email" } },
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: any; user: any }) {
      // Attach user id to session
      session.user.id = user.id;
      return session;
    },
    async signIn({ user }: { user: any }) {
      // Prevent banned users from signing in
      const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
      if (dbUser?.banned) return false;
      return true;
    },
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions }; 