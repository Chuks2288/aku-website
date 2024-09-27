
import NextAuth, { DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "./lib/db"

import { getUserById } from "@/lib/user"

declare module "next-auth" {
    interface User {
        email?: string | null,
        userName?: string | null,
        phoneNo?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        password?: string | null,
        referrer?: any,
        balance: any,
    }
}

declare module "@auth/core/adapters" {
    interface adapterUser {
        email: string | null,
        userName: string | null,
        phoneNo: string | null,
        firstName: string | null,
        lastName: string | null,
        password: string | null,
        referrer: string | any,
        balance: any,
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {
        async signIn({ user }) {

            const existingUser = await getUserById(user.id);

            // Prevent sign in without email verification
            // if (existingUser?.emailVerified) return false;

            return true;
        },

        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
                session.user.email = token.email as string;
                session.user.userName = token.userName as string;
                session.user.firstName = token.firstName as string; // Add other properties as needed
                session.user.lastName = token.lastName as string;
                session.user.phoneNo = token.phoneNo as string;
                session.user.password = token.password as string;
                session.user.referrer = token.referrer as any;
                session.user.balance = token.balance as any;
            }

            if (session.user) {
                session.user.email = token.email as string;
                session.user.userName = token.userName as string;
                session.user.firstName = token.firstName as string; // Add other properties as needed
                session.user.lastName = token.lastName as string;
                session.user.phoneNo = token.phoneNo as string;
                session.user.password = token.password as string;
                session.user.referrer = token.referrer as any;
                session.user.balance = token.balance as any;
            }

            return session
        },

        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.email = existingUser.email;
            token.firstName = existingUser.firstName;
            token.lastName = existingUser.lastName;
            token.userName = existingUser.userName;
            token.phoneNo = existingUser.phoneNo;
            token.password = existingUser.password;
            // token.referrer = existingUser.referrer;
            token.balance = existingUser.balance;

            return token;
        }
    },
    // @ts-ignore
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
        // maxAge: 30,
    },
    ...authConfig,
})
