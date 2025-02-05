"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { loginSchema, LoginValues } from "@/lib/validation";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
    credentials: LoginValues,
): Promise<{ error: string }> {
    try {
        const { username, password } = loginSchema.parse(credentials);

        const existingUser = await prisma.user.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                },
            },
        });

        if (!existingUser || !existingUser.passwordHash) {
            return {
                error: "Incorrect username or password",
            };
        }

        const validPassword = await verify(existingUser.passwordHash, password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
        });

        if (!validPassword) {
            return {
                error: "Incorrect username or password",
            };
        }

        const session = await lucia.createSession(existingUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);

        // Await the cookies() function before using its methods
        const cookieStore = await cookies();
        cookieStore.set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes,
        );

        // This will throw a redirect error which is handled by Next.js internally
        return redirect("/Platform");
    } catch (error) {
        // Optionally, you can re-throw redirect errors if needed
        if (error instanceof Error && error.message === "NEXT_REDIRECT") {
            throw error;
        }
        console.error(error);
        return {
            error: "Something went wrong. Please try again.",
        };
    }
}
