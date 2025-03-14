import PostEditor from "@/components/posts/editor/PostEditor";
import TrendsSidebar from "@/components/TrendsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { validateRequest } from "@/auth";
import { Flag, Plus, Search, UserCheck, Users } from "lucide-react";
import Link from "next/link";
import ProfileSection from "@/components/profile/profile";
import { fetchCountOfActiveUsers, fetchCountOfAllUsers } from "@/actions";

export default async function AdminHome() {
    const session = await validateRequest();
    const countOfUsers = await fetchCountOfAllUsers();
    const countOfActiveUsers = await fetchCountOfActiveUsers()
    return (

        <main className="flex w-full min-w-0 bg-[#f9fbfc]">
            <div className="w-full min-w-0 p-5 flex flex-col">
                
                <div className="">
                    <h1 className="text-2xl font-semibold">Welcome Back, {session.user?.displayName}!</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-16">
                    <div className="flex flex-col col-span-1 justify-center items-center gap-4 rounded-lg bg-[#C5CAFF] py-4 shadow-md">
                        <div className="">
                            <Users className="h-6"/>    
                        </div>
                        <div className="">
                            <h2 className="text-lg ">Total Users</h2>    
                        </div>
                        <div className="text-2xl font-semibold">
                            <span>{countOfUsers}</span>    
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 justify-center items-center gap-4 rounded-lg bg-[#E1E7E9] py-4 shadow-md">
                        <div className="">
                            <Flag className="h-5"/>   
                        </div>
                        <div className="">
                            <h2 className="text-lg">Total Reports</h2>    
                        </div>
                        <div className="">
                            <span className="text-2xl font-semibold">12</span>    
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 justify-center items-center gap-4 rounded-lg bg-[#F4D2DD] py-4 shadow-md">
                        <div className="">
                            <UserCheck className="h-6"/>    
                        </div>
                        <div className="">
                            <h2 className="text-lg">Total Active Users</h2>    
                        </div>
                        <div className="">
                            <span className="text-2xl font-semibold">{countOfActiveUsers}</span>    
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}