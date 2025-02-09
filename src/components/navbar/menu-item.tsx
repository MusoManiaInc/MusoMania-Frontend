"use client";

import React, { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = {
    title: string;
    icon: ReactElement;
    href: string;
};

const MenuItemFeed = ({ title, icon, href }: MenuItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href + "/feed");

    return (
        <Link
            href={href}
            className={`flex w-full items-center justify-start gap-3 py-1.5 px-4 rounded-xl transition-all duration-100 hover:bg-purple-50 ${
                isActive ? "!bg-purple-100 text-purple-800" : "bg-transparent"
            }`}
        >
            {icon}
            <span className="hidden lg:inline">{title}</span>
        </Link>
    );
};

export default MenuItemFeed;
