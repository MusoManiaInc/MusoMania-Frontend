import { validateRequest } from "@/auth";
import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import ProfileSection from "@/components/profile/profile-section";
import TrendsSidebar from "@/components/TrendsSidebar";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default async function Home() {
    const posts = await prisma.post.findMany({
        include: postDataInclude,
        orderBy: { createdAt: "desc" },
    });
    const session = await validateRequest();
    return (
        <main className="flex w-full min-w-0">
            <div className="w-full min-w-0  bg-[#f9fbfc]">
                <div className="flex justify-between items-center bg-white border-b  border-gray-200 p-4">
                    <div className="relative w-[600px]">
                        <Search className="w-5 h-5 text-zinc-400 dark:text-zinc-700 absolute top-1/2 transform -translate-y-1/2 left-2" />
                        <input
                            placeholder="Search for friends..."
                            className="rounded-xl pl-9 outline-none dark:text-zinc-300 border border-gray-200 py-2 w-full"
                        />
                    </div>
                    <div className="">
                        <Link href="/feed/add" className="flex items-center justify-center gap-2 bg-[#5046E4] duration-100 transition-all ease-linear hover:bg-[#2f2985] rounded-xl px-4 py-2 text-white">
                            Add New Post
                            <Plus className="w-5 h-5"/>
                            
                        </Link>
                    </div>
                </div>
                <div className="space-y-5 mt-5 px-4">
                    {/* <PostEditor /> */}
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
                
            </div>
            <ProfileSection session={session} />
        </main>
    );
}