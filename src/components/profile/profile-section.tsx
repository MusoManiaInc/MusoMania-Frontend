"use client";
import { useSession } from "@/app/feed/SessionProvider";
import React, { useEffect, useState } from "react";
import UserAvatar from "../UserAvatar";
import { Session } from "lucia";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Eclipse, Ellipsis, Mail, Pencil, Phone } from "lucide-react";

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
    <div className="lg:w-[600px] hidden lg:block bg-gray-50 sticky top-0 h-screen px-4 pt-10 border-l border-gray-100">
      <div className="flex flex-col">
        <div className="relative w-[100px] mx-auto flex justify-center">
          <UserAvatar avatarUrl={user?.avatarUrl} size={70} className="" />
          <div
            className={`absolute ${
              isOnline ? "bg-green-500" : "bg-gray-200"
            } border-2 border-gray-50 w-5 h-5 rounded-full bottom-0 right-4 z-10`}
          ></div>
        </div>
        <div className="w-full text-center pt-4 grid">
          <span className="font-semibold">@{user.username}</span>
          <span className="text-sm">{user.displayName}</span>
        </div>
        <div className="w-full flex justify-center items-center px-4 pt-4">
            <div className="grid items-center text-center">
              <span className="font-semibold">548</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-400 mx-6"></div>
            <div className="grid items-center text-center">
              <span className="font-semibold">1.8K</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-400 mx-6"></div>
            <div className="grid items-center text-center">
              <span className="font-semibold">650</span>
              <span className="text-sm">Following</span>
            </div>
        </div>
        <div className="w-full flex flex-col pt-8 px-4">
          <div className="flex justify-between">
            <span className="font-semibold text-sm">About Me</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <Ellipsis className="h-4 w-4 rotate-90" />
                </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="hover:bg-purple-100 text-purple-700" >
                      <div className="w-full flex items-center gap-2 ">
                          <Pencil className='w-4 h-4 text-zinc-600 dark:text-zinc-400'/>
                          <span className='text-sm text-zinc-600 dark:text-zinc-400'>Edit Bio</span>
                      </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
          </div>
           
          <p className="text-xs pt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim porro veniam, non dignissimos quisquam magni ab a cumque vero quibusdam?</p>
        </div>
        <div className="w-full px-4 pt-4">
            <span className="font-semibold text-sm">Contact Information</span>
            <div className="flex flex-col">
              <div className="w-full h-[1px] bg-gray-200 my-3"></div>
              <div className="flex">
                <div className=" bg-purple-100 p-3 rounded-full">
                  <Mail className="w-4 h-4 text-purple-900"/>
                </div>
                <div className="grid text-left pl-3">
                  <span className="font-semibold text-sm">Email</span>
                  <span className="text-xs">{user.email}</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileSection;
