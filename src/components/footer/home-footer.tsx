'use client'
import React from 'react'
import LogoComponent from '../logo/logo'
import { useState, useEffect } from 'react'


type Props = {}

const HomeFooter = (props: Props) => {
  return (
    // Footer
    <footer className='bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary'>
      {/* Footer wrapper */}
      <div className='container max-w-screen-xl mx-auto px-12 py-8'> 
        {/* First row */}
        <div className='flex justify-between'>
          {/* First row column one */}
          <div className='flex flex-col gap-8'>
            {/* Footer logo */}
            <div>
              {/* Logo container */}
              <a className='flex items-center gap-2' href='/'>
                <div>


                  <LogoComponent/>


                </div>
                <div className="font-semibold">
                  <h1 className='text-lg'>MusoMania</h1>
                </div>
              </a>
            </div>
            {/* Footer action buttons */}
            <div>
              {/* Footer action buttons container */}
              <div className='flex gap-4'>
                <a href='/auth/sign-up' className="bg-custom-purple2 text-white px-6 py-3 rounded-full hover:bg-custom-purple1 transition-all font-bold">Get Started</a>
                <a href='/about' className="px-6 py-3 rounded-full hover:bg-gray-100 transition-all border border-black">Learn More</a>
              </div>
            </div>
          </div>
          {/* First row column two */}
          <div>
            {/* Footer nav */}
            <div className='flex flex-col justify-between space-y-4 justify-items-end'>
              <a className="hover:underline"  href='/about' >About</a>
              <a className="hover:underline" href='/contact' >Contact Us</a>
              <a className="hover:underline" href='/faq' >FAQ</a>
              <a className="hover:underline" href='/careers' >Working at MusoMania</a>
            
            </div>
          </div>
        </div>
        {/* Section divider */}
        <hr className='my-8' />
        {/* Second row */}
        <div className='flex justify-between'>
          {/* Second row column one */}
          <div>
            <p>&#169; MusoMania Inc. All rights reserved.</p>
          </div>
          {/* Second row column two */}
          <div>
              {/* Legal nav */}
            <div className='flex jusify-space-between gap-2'>
              <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-150 hover:after:w-full" href='/privacy-policy' >Privacy Policy</a>
              <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-150 hover:after:w-full" href='/terms-of-service' >Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



export default HomeFooter