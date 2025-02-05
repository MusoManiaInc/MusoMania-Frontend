/* this is a context provider for all the components who need to fetch the user*/
"use client";

import { Session, User } from "lucia";
import React, { createContext, useContext } from "react";

interface SessionContext {
    user: User;
    session: Session;
}

const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
    children,
    value,
}: React.PropsWithChildren<{ value: SessionContext }>) {
    return (
        <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
    );
}


export function useSession(){

    const context = useContext(SessionContext);

    if(!context){
        throw new Error("use session is not used within a provider, you should make sure this hook is within the provider");
    }

    return context;
}