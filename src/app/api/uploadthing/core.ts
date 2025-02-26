import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { createUploadthing, FileRouter } from "uploadthing/next-legacy"
import { UploadThingError, UTApi } from "uploadthing/server"

const f = createUploadthing();

export const fileRouter = {
    avatar: f({
        image: { maxFileSize: "512KB"}
    }).middleware(async () => {
        const {user} = await validateRequest();

        if(!user) throw new UploadThingError("Unauthorized");
        
        return {user};
    })
    .onUploadComplete(async ({metadata, file}) => {
        const oldAvatarUrl = metadata.user.avatarUrl;

        if (oldAvatarUrl) {
            try {
                const oldFileKey = new URL(oldAvatarUrl).pathname.split("/f/")[1];
                
                await new UTApi().deleteFiles(oldFileKey);

            } catch (error) {
                console.error("Error extracting old avatar key:", error);
            }
        }

        const newAvatarUrl = `https://${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh${new URL(file.url).pathname}`;


        await prisma.user.update({
            where: {id: metadata.user.id},
            data: {
                avatarUrl: newAvatarUrl,
            },
        });

        return {avatarUrl: newAvatarUrl}
    }),
    attachment: f({
        image: {maxFileSize: "4MB", maxFileCount: 5},
        video: {maxFileCount: 1}
    })
    .middleware(async () =>{
        const {user} = await validateRequest();
        
        if(!user) throw new UploadThingError("Unauthorized");

        return { }
    })
    .onUploadComplete(async ({file}) => {
        const media = await prisma.media.create({
            data: {
                url: `https://${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh${new URL(file.url).pathname}`,
                type: file.type.startsWith("image") ? "IMAGE" : "VIDEO"
            }
        });

        return {mediaId: media.id};
    })
} satisfies FileRouter;

export type AppFileRouter = typeof fileRouter;