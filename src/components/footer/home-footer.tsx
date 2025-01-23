import React from 'react'

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
                  <img className='h-16' src="/icons/logo.png" alt='MusoMania footer logo' />
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
              <a className="hover:underline"  href='/about' target='_blank'>About</a>
              <a className="hover:underline" href='/contact' target='_blank'>Contact Us</a>
              <a className="hover:underline" href='/faq' target='_blank'>FAQ</a>
              <a className="hover:underline" href='/careers' target='_blank'>Working at MusoMania</a>
              {/* <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal"  href='/about' target='_blank'>About</a>
              <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal" href='/contact' target='_blank'>Contact Us</a>
              <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal" href='/faq' target='_blank'>FAQ</a>
              <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal" href='/careers' target='_blank'>Working at MusoMania</a> */}
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
              <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-150 hover:after:w-full" href='/privacy-policy' target='_blank'>Privacy Policy</a>
              <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-150 hover:after:w-full" href='/terms-of-service' target='_blank'>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter