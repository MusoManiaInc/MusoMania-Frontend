import LogoComponent from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import MenuItemFeed from "@/components/navbar/menu-item";
import { feedMenuItems } from "@/constants";
import { Search, LogOut } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
    className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
    return (
        <div className="w-[400px] sticky top-0 h-screen border-r border-gray-100 flex flex-col px-4  justify-between">
            {/* Top Section - Logo, Search Bar, and Menu Items */}
            <div className="pt-6">
                <div>
                    <Link href="/" className="flex z-40 font-semibold items-center gap-2">
                        <LogoComponent height="h-8" />
                        <span className="text-md">MusoMania</span>
                    </Link>
                </div>

                <div className="relative mt-12">
                    <Search className="w-5 h-5 text-zinc-400 dark:text-zinc-700 absolute top-1/2 transform -translate-y-1/2 left-2" />
                    <input
                        placeholder="Search..."
                        className="rounded-xl pl-9 outline-none dark:text-zinc-300 border border-gray-200 py-1 w-full"
                    />
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    {feedMenuItems.map((item) => (
                        <MenuItemFeed key={item.href} title={item.title} href={item.href} icon={item.icon} />
                    ))}
                </div>
            </div>

            {/* Bottom Section - Sign Out Button */}
            <div className=" pb-6 border-t border-gray-300">
                <Button variant="outline" className="w-full justify-center !py-3 !rounded-xl mt-4">
                    Sign Out
                    <LogOut size={14} />
                </Button>
            </div>
        </div>
    );
}
