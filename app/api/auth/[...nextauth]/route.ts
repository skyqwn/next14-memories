import client from "@/libs/prismadb";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;

        const email = credentials?.email;
        const password = credentials?.password;

        const existsUser = await client.user.findUnique({
          where: {
            email,
          },
        });

        if (!existsUser) return null;

        const checkedPassword = bcrypt.compareSync(
          password,
          existsUser.password
        );

        if (!checkedPassword) return null;

        return existsUser;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/signin" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
