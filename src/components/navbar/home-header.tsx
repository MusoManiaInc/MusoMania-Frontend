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
        <nav className="mx-auto max-w-screen-xl px-4 md:px-20 flex  h-16 items-center justify-between">
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
  )
}

export default HomeHeader