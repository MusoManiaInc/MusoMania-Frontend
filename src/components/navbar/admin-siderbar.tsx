
"use client"
import LogoComponent from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import MenuItemFeed from "@/components/navbar/menu-item";
import { adminMenuItems, feedMenuItems } from "@/constants";
import { Search, LogOut, UserRound, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Session } from "lucia";


import { AnimatePresence,motion } from 'framer-motion';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import UserAvatar from "@/components/UserAvatar";
import { useSession } from "@/app/feed/SessionProvider";
import AdminMenuItem from "./admin-menu-item";
import { logout } from "@/app/(auth)/actions";


interface MenuBarProps {
    className?: string;
    session:Session
}
const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
  
      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }, [query]);
  
    return matches;
  };

export default function AdminMenuBar({ className, session }: MenuBarProps) {
    const isLgScreen = useMediaQuery("(min-width: 1024px)");
    const [searchDialogOpen, setSearchDialogOpen] = useState(false)
    const { user } = useSession();
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSearchDialogOpen(false);
            }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="w-[80px] lg:w-[350px] bg-[#5046E4] sticky top-0 h-screen border-r border-gray-100 flex flex-col px-4  justify-between">
            <div className="pt-6">
                <div>
                    <Link href="/" className="flex z-40 font-semibold items-center justify-center lg:justify-start gap-2">
                        <LogoComponent height="h-19" />
                        <span className="text-lg text-white hidden lg:inline">MusoMania</span>
                    </Link>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    {adminMenuItems.map((item) => (
                        <AdminMenuItem key={item.href} title={item.title} href={item.href} icon={item.icon} />
                    ))}
                </div>
            </div>
            <div className="">
                <div className=" mb-6 border-t  border-[#6166EF] ">
                    <div className="flex items-center justify-center  lg:justify-between mt-3">
                        <div className="hidden lg:flex items-center  gap-2 ">
                                <UserAvatar avatarUrl={user?.avatarUrl} size={40} className="" />
                            <div className="grid">
                                <span className="font-semibold text-white hidden lg:grid">{user.displayName}</span>
                                <span className="text-gray-300 text-sm hidden lg:grid w-full truncate">{user.email}</span>
                            </div>
                        </div>
                        <div className="flex lg:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="!bg-transparent !p-0">
                                    <UserAvatar avatarUrl={user?.avatarUrl} size={40} className="" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 ml-4 mb-2">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                <DropdownMenuItem className="gap-2 cursor-pointer">
                                    <User className="w-4 h-4"/>
                                    <span>Profile</span>    
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2 cursor-pointer">
                                    <Settings className="w-4 h-4"/>
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => logout()}>
                                <LogOut className="w-4 h-4"/>
                                <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </div>   
                <Dialog>
                    <DialogTrigger asChild className="">
                    <Button className="hidden lg:flex item-center bg-transparent shadow-none hover:bg-[#6166EF]  justify-center !py-2 !rounded-xl">
                        <LogOut size={14} />
                    </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Want to leave?</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to log out?
                        </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="mt-4 flex">
                            <DialogClose asChild>
                                <div className="w-full">
                                <Button size="sm" className="w-full  bg-zinc-900">
                                    Cancel
                                </Button>
                                </div>
                            </DialogClose>
                                <div className="w-full">
                                    <Button size="sm" className="w-full  bg-[#5046E4] hover:bg-[#302988]" onClick={() => logout()}>
                                        Logout
                                    </Button>
                                </div>
                            </DialogFooter>
                    </DialogContent>
                </Dialog>
                    </div>
                
                    
                </div>
            </div>
            
            {searchDialogOpen && (
            <AnimatePresence>
                <motion.div
                key="dialog-overlay"
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSearchDialogOpen(false)}
                >
                <motion.div
                    key="dialog-content"
                    className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg w-[600px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="">
                        <div className="relative">
                            <Search className="w-5 h-5 text-zinc-400 dark:text-zinc-700 absolute top-1/2 transform -translate-y-1/2 left-2" />
                            <input
                                placeholder="Search..."
                                className="rounded-t-xl pl-9 outline-none dark:text-zinc-300 border border-gray-200 py-3 w-full"
                            />
                        </div>
                        <div className="border-t border-gray-100 w-full"></div>
                        <div className="px-4 font-semibold py-4">
                            Search for your favourite music!
                        </div>
                        <div className="w-full flex justify-end px-4 py-4 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="text-xs p-1 px-2 cursor-default border border-gray-200 text-gray-500 rounded-sm">esc</div>
                                <span className="text-sm text-gray-600">Close</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </motion.div>
                </motion.div>
            </AnimatePresence>
            )}
        </div>
    );
}

