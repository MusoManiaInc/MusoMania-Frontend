import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";


export default async function Layout({children}:{children:React.ReactNode}){

    // to find the currently logged in user
    const session = await validateRequest();


    if(!session.user) redirect("/login"); // if user is logged in redirect

    return <SessionProvider value={session}>
        
        <div className="flex min-h-screen flex-col">
            <Navbar/>
            <div className="mx-auto max-w-7*1 p-5">
                {children}
            </div>
            
        </div>
        


        </SessionProvider>
}