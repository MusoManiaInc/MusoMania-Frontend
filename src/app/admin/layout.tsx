import { validateRequest } from "@/auth";

import { redirect, usePathname } from "next/navigation";

import { Toaster } from "@/components/ui/toaster";
import ProfileSection from "@/components/profile/profile";
import TrendsSidebar from "@/components/TrendsSidebar";
import SessionProvider from "../feed/SessionProvider";
import MenuBar from "../feed/MenuBar";
import AdminProfile from "@/components/profile/admin-profile";
import TopUserList from "@/components/users/top-user-list";
import { fetchListOfTopUsers } from "@/actions";
import AdminMenuBar from "@/components/navbar/admin-siderbar";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await validateRequest();
    const countOfTopUsers = await fetchListOfTopUsers()
    if (!session.user) redirect("/login");

    return (
        <SessionProvider value={session}>
            <div className="flex min-h-screen flex-col">
                <div className="mx-auto flex w-full justify-between ">
                    <AdminMenuBar session={session}/>
                        {children}
                        <AdminProfile session={session}>
                            <TopUserList users={countOfTopUsers}/>
                        </AdminProfile>
                    <Toaster />
                </div>
            </div>
        </SessionProvider>
    );
}