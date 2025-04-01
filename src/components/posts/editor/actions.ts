"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude } from "@/lib/types";
import { createPostSchema } from "@/lib/validation";

export async function submitPost(input: {
  content: string;
  mediaIds: string[];
  type?: string; 
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  // Update the schema to include `type`
  const { content, mediaIds, type } = createPostSchema.parse(input);

  const newPost = await prisma.post.create({
    data: {
      content,
      userId: user.id,
      type: type || "REGULAR", // Use provided type or default to "regular"
      attachments: {
        connect: mediaIds.map((id) => ({ id })),
      },
    },
    include: getPostDataInclude(user.id),
  });

  return newPost;
}
