import React from 'react'
import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";
import Home from './page';

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      {/* Not found page container */}
      <div className="container h-[100vh] mx-auto px-6 py-8 flex flex-col lg:gap-10 lg:flex-row items-center justify-center">
        {/* Not found page column one */}
        <div className="flex-1 max-w-md">
          {/* Not found image/graphic */}
          <img className="w-full h-auto max-h-96 object-contain" src="/images/not-found.svg" alt="Vinyl Platinum Disk royalty-free vector graphic." />
        </div>
        {/* Not found page column two */}
        <div className="flex-1 flex flex-col gap-4 items-center lg:items-start">
          {/* Not found message */}
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left">
            Sorry, the page you were looking for was not found.
          </h1>
          <p className="font-semibold text-xl sm:text-2xl text-center lg:text-left">
            <a className="underline text-blue-600 hover:text-blue-700" href="/">Return home</a> or{" "}
            <a className="underline text-blue-600 hover:text-blue-700" href="/help">get some help</a>.
          </p>
        </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default NotFound