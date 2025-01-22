import React from 'react'
import { FooterLogo } from '../../../public/icons/logo.svg'

type Props = {}

const HomeFooter = (props: Props) => {
  return (
    // Footer
    <footer className=''>
      {/* Footer wrapper */}
      <div className='container mx-auto px-12 py-8'> 
        {/* First row */}
        <div className='flex justify-between'>
          {/* First row column one */}
          <div>
            {/* Footer logo */}
            <div>
              <img src='../' alt='MusoMania footer logo' />
            </div>
            {/* Footer action buttons */}
            <div></div>
            {/* Footer social icons */}
            <div></div>
          </div>
          {/* First row column two */}
          <div>
            {/* Footer nav */}
            <div className='flex flex-col justify-between gap-4'>
              <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal"  href='/about' target='_blank'>About</a>
              <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal" href='/contact' target='_blank'>Contact Us</a>
              <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal" href='/faq' target='_blank'>Frequently Asked Questions</a>
              <a className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:text-black font-normal" href='/careers' target='_blank'>Working at MusoMania</a>
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