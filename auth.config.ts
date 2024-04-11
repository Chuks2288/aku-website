import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schema";
import { getUserByUsername } from "@/lib/user";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { userName, password } = validatedFields.data;

                    const user = await getUserByUsername(userName);
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if (passwordsMatch) return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig