/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginWithGoogle } from "@/lib/firebase/service";
import NextAuth, { AuthOptions } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          username: `user-${uuidv4()}`,
          image: user.image,
          type: "google",
        };
        await loginWithGoogle(
          data,
          (result: { status: boolean; data: any }) => {
            if (result.status) {
              token.email = result.data.email;
              token.fullname = result.data.fullname || "";
              token.role = result.data.role;
              token.username = result.data.username;
              token.image = result.data.image;
            }
          }
        );
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
        if ("username" in token) {
          session.user.username = token.username;
        }
        if ("image" in token) {
          session.user.image = token.image;
        }
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
