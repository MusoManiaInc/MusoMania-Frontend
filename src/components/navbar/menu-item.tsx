"use client";

import React, { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type MenuItemProps = {
  title: string;
  icon: ReactElement;
  href: string;
};

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

const MenuItemFeed = ({ title, icon, href }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/feed");

  const isLgScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <TooltipProvider>
      {isLgScreen ? (
        <Link
          href={href}
          className={`flex w-full items-center justify-start gap-3 py-3 lg:py-1.5 px-4 rounded-xl transition-all duration-100 hover:bg-purple-100 ${
            isActive ? "!bg-purple-200 text-purple-800" : "bg-transparent"
          }`}
        >
          {icon}
          <span className="hidden lg:inline">{title}</span>
        </Link>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={href}
              className={`flex w-full items-center justify-start gap-3 py-3 lg:py-1.5 px-4 rounded-xl transition-all duration-100 hover:bg-purple-100 ${
                isActive ? "!bg-purple-200 text-purple-800" : "bg-transparent"
              }`}
            >
              {icon}
              <span className="hidden lg:inline">{title}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </TooltipProvider>
  );
};

export default MenuItemFeed;
