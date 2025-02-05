"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { Button } from "../ui/button";

const Navbar = () => {
  const initialDisplayName = Cookies.get("userDisplayName") || null;
  const [displayName, setDisplayName] = useState<string | null>(
    initialDisplayName
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDisplayName = () => {
      const cookieDisplayName = Cookies.get("userDisplayName") || null;
      setDisplayName(cookieDisplayName);
      setLoading(false);
    };

    fetchDisplayName(); // Initial fetch

    // Listen for storage events (cross-tab updates)
    const handleStorageChange = () => fetchDisplayName();
    window.addEventListener("storage", handleStorageChange);

    // Observe cookie changes dynamically
    const observer = new MutationObserver(fetchDisplayName);
    observer.observe(document, { subtree: true, childList: true });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userDisplayName");
    // Notify all tabs that the user logged out
    localStorage.setItem("logout", Date.now().toString());

    setDisplayName(null);
    router.push("/auth/sign-in");
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      {/*
        - Use a narrower container (e.g. `max-w-screen-lg` or Tailwind’s `container`)
        - Adjust horizontal padding to smaller values (e.g. px-4, md:px-6).
      */}
      <nav className="mx-auto max-w-screen-lg px-4 md:px-6 flex h-16 items-center justify-between">
        <div>
          <Link href="/" className="flex font-semibold items-center gap-2">
            {/*
              - Reduced the logo size from 100px to something smaller (e.g. 40px)
              - This helps the navbar look less oversized
            */}
            <Image
              src="/icons/MusaManiaMonday.svg"
              alt="LOGO"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-lg">MusoMania</span>
          </Link>
        </div>
        <div className="flex gap-4">
          {loading ? (
            <span className="text-gray-500">Loading...</span>
          ) : displayName ? (
            <>
              <span className="self-center font-semibold text-black">
                Welcome, {displayName}
              </span>
              <Button
                className="rounded-full bg-red-500 text-white px-6 py-2 hover:bg-red-600 transition-all font-bold"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button className="rounded-full bg-custom-purple2 text-white px-6 py-2 hover:bg-custom-purple1 transition-all font-bold">
                <Link href="/auth/sign-up">Join Now</Link>
              </Button>
              <Button className="rounded-full bg-transparent hover:bg-gray-100 transition-all border border-black text-black px-6 py-2">
                <Link href="/auth/sign-in">Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
