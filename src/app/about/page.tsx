import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";
import LogoComponent from '../../components/logo/logo'
import { useState, useEffect } from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />

     {/* First SVG Section*/}
    
      <div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img className="" src="images/about-page.svg" alt="image" loading="lazy" width="" height=""/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About MusoMania: Where Music Meets Community</h2>
          <p className="mt-6 text-gray-600">At MusoMania, we’re fueled by a love for music and a vision to revolutionize how artists connect, create, and thrive. Built by musicians, for musicians, our platform is your ultimate hub to monetize your talent, collaborate with innovators, and grow within a vibrant global network.</p>
          <p className="mt-4 text-gray-600"> Whether you’re a solo artist, a band, or a producer, MusoMania equips you with the tools to turn passion into profit. Sell tracks, merchandise, or exclusive content directly to fans. Discover your next collaborator, whether it’s a lyricist, drummer, or sound engineer. Host live sessions, join virtual jam rooms, or showcase your work in a community that gets your sound.</p>
          <p className="mt-4 text-gray-600"> This is more than a platform—it’s a movement. Break boundaries, share your journey, and engage with fans who fuel your fire. With MusoMania, your art isn’t just shared; it’s amplified, valued, and rewarded.</p>
        </div>
      </div>
  </div>
</div>

     {/* Achievements Section */}

<section className="container mx-auto px-8 py-8 lg:py-40">
  <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Our Goals</h2>
  <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">What we at MusoMania want to do.</p>
  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src="images/monetize.jpg" alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Monetize</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Turn your music into income. Earn from streams, sell exclusive tracks, merch, or fan subscriptions—all while keeping 100% creative control.</p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src="images/collab.jpg" alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Collaborate</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Find your perfect match. Connect with producers, lyricists, or bandmates worldwide. Break creative boundaries in real-time jam sessions or co-write your next hit.</p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src="images/share.jpg" alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Share</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Amplify your sound. Share tracks, live gigs, or behind-the-scenes moments directly with fans. Build a loyal community that champions your art.</p>
      </div>
    </div>
  </div>
</section>

 {/* Modal Back to home */}

<div id="modal" className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20">
  <div className="bg-white dark:bg-gray-800 px-3 md:px-4 py-12 flex flex-col justify-center items-center">
    <div>
      
    <LogoComponent/>

    </div>
    <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">Welcome to the MusoMania Family.</h1>
    <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">Ready to get started? Click the link below to start your joruney.</p>
    <div className="mt-12 md:mt-14 w-full flex justify-center">
      <a href="/signup" className="dark:text-white dark:border-white w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">Sign Up </a>
    </div>
  </div>
</div>


      <HomeFooter />
    </div>
  );
}
