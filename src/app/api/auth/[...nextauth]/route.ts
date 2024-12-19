/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "type your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "type your password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = {
          id: 1,
          email: "wilbertbernadi699@gmail.com",
          password: "12345678",
          role: "admin",
        };
        if (
          email === "wilbertbernadi699@gmail.com" &&
          password === "12345678"
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (user) {
        if (account?.provider === "credentials") {
          token.email = user.email;
          token.fullname = user.fullname;
          token.role = user.role;
        }
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        if ("email" in token) {
          session.user.email = token.email;
        }
        if ("fullname" in token) {
          session.user.fullname = token.fullname;
        }
        if ("role" in token) {
          session.user.role = token.role;
        }
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
