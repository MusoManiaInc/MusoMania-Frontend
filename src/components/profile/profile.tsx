"use client";
import { useSession } from "@/app/feed/SessionProvider";
import React, { useEffect, useState } from "react";
import UserAvatar from "../UserAvatar";
import { Session } from "lucia";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ArrowUpRight, Bell, Eclipse, Ellipsis, Mail, MessageCircleMore, Pencil, Phone, Plus, Settings } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import TrendsSidebar from "../TrendsSidebar";

type Props = {
  session?: Session
  children: React.ReactNode;
};

const ProfileSection = ({  session, children}: Props) => {
  const { user, session:contextSession } = useSession();


  const [isOnline, setIsOnline] = useState(false);

  const activeSession = session 

  useEffect(() => {
    if (contextSession.id) {
      setIsOnline(true); 
    } else {
      setIsOnline(false); 
    }
  }, [activeSession]); 

  return (
    <div className="lg:w-[500px] hidden lg:block bg-white sticky top-0 h-screen  border-l border-gray-200">
      <div className="flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="relative ">
            <UserAvatar avatarUrl={user?.avatarUrl} size={42} className="" />
            <div
              className={`absolute ${
                isOnline ? "bg-green-500" : "bg-gray-200"
              } border-2 border-white w-3 h-3 rounded-full bottom-0 right-0 z-10`}
            ></div>
          </div>
          <div className="flex items-center gap-2">
              <Button className="rounded-full bg-transparent hover:bg-gray-100 px-2 py-1 border border-gray-200">
                <MessageCircleMore className="!w-5 !h-5 text-gray-700"/>
              </Button>
              <Button className="rounded-full bg-transparent hover:bg-gray-100 px-2 py-1 border border-gray-200">
                <Bell className="!w-5 !h-5 text-gray-700"/>
              </Button>
              <Button className="rounded-full bg-transparent hover:bg-gray-100 px-2 py-1 border border-gray-200">
                <Settings className="!w-5 !h-5 text-gray-700"/>
              </Button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ProfileSection;
