import PostEditor from "@/components/posts/editor/PostEditor";
import TrendsSidebar from "@/components/TrendsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { validateRequest } from "@/auth";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import ProfileSection from "@/components/profile/profile";

export default async function AdminHome() {
    const session = await validateRequest();
    return (

        <main className="flex w-full min-w-0">
            <div className="w-full min-w-0  bg-[#f9fbfc]">
                
                dfsd
                
                
            </div>
        </main>
    );
}