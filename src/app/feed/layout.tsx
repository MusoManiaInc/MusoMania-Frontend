import { validateRequest } from "@/auth";
import { redirect, usePathname } from "next/navigation";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import ProfileSection from "../../components/profile/profile-section"
import SessionProvider from "./SessionProvider";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await validateRequest();

    if (!session.user) redirect("/login");

    return (
        <SessionProvider value={session}>
            <div className="flex min-h-screen flex-col">

                <div className="mx-auto flex w-full justify-between ">
                    <MenuBar session={session}/>
                    {children}
                    
                </div>

            </div>
        </SessionProvider>
    );
}