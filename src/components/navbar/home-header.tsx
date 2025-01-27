'use client'
import { cn } from '@/lib/utils'

import React, { useState, useEffect } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/navbar-menu'
import Link from 'next/link'
import { Button } from '../ui/button'
import LogoComponent from '../logo/logo'


type Props = {}

const HomeHeader = (props: Props) => {
  return (
    <header className='sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary'>
        <nav className="mx-auto max-w-screen-xl px-2.5 md:px-20 flex  h-16 items-center justify-between">
          <div className="">
            <Link href="/" className="flex z-40 font-semibold items-center gap-2">
            <LogoComponent/>
              <span className='text-lg'>MusoMania</span>
            </Link>
          </div>
          <div className="flex gap-4">
            <Button className='rounded-full bg-custom-purple2 text-white px-6 py-3 hover:bg-custom-purple1 transition-all font-bold'>
              <Link href="/auth/sign-up" >
                Join Now
              </Link>
            </Button>
            <Button className='rounded-full bg-transparent hover:bg-gray-100 transition-all border border-black text-black'>
              <Link href="/auth/sign-in">
                Sign In
              </Link>
            </Button>
          </div>
        </nav>
    </header>
    // <>
    //   <Navbar className="top-2" />
    // </>
  )
}
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-screen-xl mx-auto z-50", className)}
    >
      
      <Menu setActive={setActive} >
      <Link href="/" className="flex z-40 font-semibold items-center gap-2">
          <span>MusoMania</span>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default HomeHeader