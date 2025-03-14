// Fetching the Total Number of Users in DB
"use server"

import { useSession } from "@/app/feed/SessionProvider";
import prisma from "@/lib/prisma";

export const fetchCountOfAllUsers = async () => {

    const countOfAllUsers = await prisma.user.count();
        return countOfAllUsers;

}
export const fetchCountOfActiveUsers = async () => {
    const now = new Date();
    const countOfActiveUsers = await prisma.session.count({
        where: {
            expiresAt: {
                gt: now, 
            }
        }
    });
        return countOfActiveUsers;

}
