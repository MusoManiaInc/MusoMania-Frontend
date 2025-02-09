import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";


export default async function Layout({children}:{children:React.ReactNode}){

    // to find the currently logged in user
    const {user} = await validateRequest();


    if(user) redirect("/feed"); // so in this layout you can't look at login or sign up or dashboard when you are logged in

    return <>{children}</>
}