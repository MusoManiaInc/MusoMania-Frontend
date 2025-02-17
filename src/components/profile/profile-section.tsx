"use client";
import { useSession } from "@/app/feed/SessionProvider";
import React, { useEffect, useState } from "react";
import UserAvatar from "../UserAvatar";
import { Session } from "lucia";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ArrowUpRight, Bell, Eclipse, Ellipsis, Mail, MessageCircleMore, Pencil, Phone, Plus, Settings } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  session?: Session
};

const ProfileSection = ({  session}: Props) => {
  const { user, session:contextSession } = useSession();


  const [isOnline, setIsOnline] = useState(false);

  const activeSession = session 

  useEffect(() => {
    if (contextSession.id) {
      setIsOnline(true); // User is online
    } else {
      setIsOnline(false); // User is offline
    }
  }, [activeSession]); // Make sure effect updates when session changes

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
        <div className="w-full flex flex-col pt-8 px-4">
          <div className="flex justify-between border-b pb-2 border-gray-200">
            <span className="font-semibold text-lg">Friend Suggestions</span>
            <Link href="/feed/see-all" className="text-[#2d2783] flex items-center gap-2 hover:underline">
              See All
              <ArrowUpRight className="w-4 h-4"/>
            </Link>
          </div>
           <div className=" py-2 px-3 border-b duration-75 transition-all ease-linear cursor-pointer hover:bg-[#f8f8ff] border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserAvatar avatarUrl={user?.avatarUrl} size={40} className="" />
                <div className="grid">
                    <span className="font-semibold text-gray-800">{user.displayName}</span>
                    <span className="text-gray-500">{user.email}</span>
                </div>
              </div>
              <Button className="!bg-transparent shadow-none  justify-center !py-3 !rounded-xl w-[30px] h-[30px]">
                  <Plus size={14} className="text-[#2d2783]" />
              </Button>  
            </div>
            <div className=" py-2 px-3 border-b duration-75 transition-all ease-linear cursor-pointer hover:bg-[#f8f8ff] border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserAvatar avatarUrl={user?.avatarUrl} size={40} className="" />
                <div className="grid">
                    <span className="font-semibold text-gray-800">{user.displayName}</span>
                    <span className="text-gray-500">{user.email}</span>
                </div>
              </div>
              <Button className="!bg-transparent shadow-none  justify-center !py-3 !rounded-xl w-[30px] h-[30px]">
                  <Plus size={14} className="text-[#2d2783]" />
              </Button>  
            </div>
            <div className=" py-2 px-3 border-b duration-75 transition-all ease-linear cursor-pointer hover:bg-[#f8f8ff] border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserAvatar avatarUrl={user?.avatarUrl} size={40} className="" />
                <div className="grid">
                    <span className="font-semibold text-gray-800">{user.displayName}</span>
                    <span className="text-gray-500">{user.email}</span>
                </div>
              </div>
              <Button className="!bg-transparent shadow-none  justify-center !py-3 !rounded-xl w-[30px] h-[30px]">
                  <Plus size={14} className="text-[#2d2783]" />
              </Button>  
            </div>
            <div className=" py-2 px-3 border-b duration-75 transition-all ease-linear cursor-pointer hover:bg-[#f8f8ff] border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserAvatar avatarUrl={user?.avatarUrl} size={40} className="" />
                <div className="grid">
                    <span className="font-semibold text-gray-800">{user.displayName}</span>
                    <span className="text-gray-500">{user.email}</span>
                </div>
              </div>
              <Button className="!bg-transparent shadow-none  justify-center !py-3 !rounded-xl w-[30px] h-[30px]">
                  <Plus size={14} className="text-[#2d2783]" />
              </Button>  
            </div>
          </div>

      </div>
    </div>
  );
};

export default ProfileSection;
