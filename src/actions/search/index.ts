"use server"
import prisma from "@/lib/prisma";

export const fetchQueriedUsers = async (query:string) => {

    if (!query.trim()) return [];

    const findQueriedUsers = await prisma.user.findMany({
        where:{
            displayName:{
                contains:query,
                mode: "insensitive"
            },
        },
        take:10
    })

    return findQueriedUsers

}