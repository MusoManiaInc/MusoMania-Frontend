import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
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

                <div className="mx-auto flex w-full justify-between gap-5 ">
                    <MenuBar />
                    {children}
                    <ProfileSection/>
                </div>

            </div>
        </SessionProvider>
    );
}