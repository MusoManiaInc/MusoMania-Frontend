"use server"

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";

export async function updatePost(postId: string, reason: string) {
    const { user } = await validateRequest();

    if (!user) throw new Error("Unauthorized");

    const post = await prisma.post.findUnique({
        where: { id: postId },
    });

    if (!post) throw new Error("Post not found");

    if (post.userId === user.id) throw new Error("Cannot report own post");

    const report = await prisma.report.create({
        data: {
            postId,
            userId: user.id,
            reason,
            status:"Received"
        },
    });

    return report;
}