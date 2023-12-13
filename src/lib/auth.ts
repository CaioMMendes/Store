import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from "./prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  // debug: true,
  //serve pra retornar o user na response
  callbacks: {
    async session({ session, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string;
        image: string;
        email: string;
      };
      return session;
    },
  },
};
