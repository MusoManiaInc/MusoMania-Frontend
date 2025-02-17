import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Google } from "arctic";
import { Lucia, Session, User } from "lucia";
import { cookies } from "next/headers";
import { cache } from "react";
import prisma from "./lib/prisma"

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production",
        },
    },
    getUserAttributes(databaseUserAttributes) {
        return {
            id: databaseUserAttributes.id,
            username: databaseUserAttributes.username,
            displayName: databaseUserAttributes.displayName,
            avatarUrl: databaseUserAttributes.avatarUrl,
            googleId: databaseUserAttributes.googleId,
            email: databaseUserAttributes.email
        };

    },
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    id: string;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    googleId: string | null;
    email: string | null;
}

export const google = new Google(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`,
);
export const validateRequest = cache(async () => {
    // Note the await
    const cookieStore = await cookies();
    const sessionId = cookieStore.get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
        return { user: null, session: null };
    }

    const result = await lucia.validateSession(sessionId);

    try {
        if (result.session && result.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            cookieStore.set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes,
            );
        }
        if (!result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookieStore.set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes,
            );
        }
    } catch {
        // handle error
    }
    return {
        user: result.user,
        session: result.session
        ? {
            ...result.session,
            expiresAt: result.session.expiresAt ?? new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), 
        }
        
      : null,
    }
});

