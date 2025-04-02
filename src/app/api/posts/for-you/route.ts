import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude, PostsPage } from "@/lib/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

        const pageSize = 10;

        const { user } = await validateRequest();

        if (!user) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const reportedPosts = await prisma.report.findMany({
            where: { status: "Violation" },
            select: { postId: true },
          });

        const reportedPostIds = reportedPosts.map(report => report.postId);

        const posts = await prisma.post.findMany({
            where: {
              id: {
                notIn: reportedPostIds,
              },
            },
            include: getPostDataInclude(user.id),
            orderBy: { createdAt: "desc" },
            take: pageSize + 1,
            cursor: cursor ? { id: cursor } : undefined,
        });
          

        const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

        const data: PostsPage = {
            posts: posts.slice(0, pageSize),
            nextCursor,
        };

        return Response.json(data);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}