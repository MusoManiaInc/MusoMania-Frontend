import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";


export default async function Layout({children}:{children:React.ReactNode}){

    // to find the currently logged in user
    const {user} = await validateRequest();


    if(user) redirect("/Platform"); // so in this layout you can't look at login or sign up when you are logged in

    return <>{children}</>
}