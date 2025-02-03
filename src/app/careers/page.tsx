import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col w-full">
        <HomeHeader />
        {/* Careers page container */}
        <div>
          {/* Careers page masthead */}
          <div className="px-6 py-8 flex flex-col gap-10 justify-center items-center w-full bg-yellow-50">
            <div>
              <h1 className="text-5xl text-center font-semibold pt-20">Make a lasting impact<br />on the future of music</h1>
            </div> 
            <div>
              <a className="bg-custom-purple2 text-white px-6 py-3 rounded-full hover:bg-custom-purple1 transition-all font-bold z-10" href="/#open-roles">See open roles</a>
            </div>
            <div>
              <img className="h-96 z-0 -mt-10" src="/images/careers-page.svg" alt="A diverse group of business men and women graphic" />
            </div>
          </div>
          {/* Careers page info section */}
          <div className="px-6 py-8 flex flex-col gap-10 justify-center items-center">
            <div className="px-6 py-8 flex flex-col gap-10 justify-center items-center text-center lg:mx-44">
              <div>
                <h1 className="text-3xl text-center font-semibold">MusoMania in a nutshell.</h1>
                <p className="pt-2">We help shape culture and society.</p>
              </div>
              <div> 
                <p>MusoMania was founded in 2025 as a social media platform designed for musicians to <b>connect, collaborate, and monetize</b> their talents. Our platform <b>empowers musicians</b> by allowing them to share their music, find bandmates, sell rights or sheet music, and even offer their skills as a service (e.g. recording drum loops).</p>
                <p className="pt-2">You can come work with us in cities across Canada.</p>
              </div>
              <div> 
                <a href="/about" className="px-6 py-3 rounded-full hover:bg-gray-100 transition-all border border-black">Learn more</a>
              </div>
            </div>
          </div>
          <hr />
          {/* Careers page open roles */}
          <div id="open-roles" className="px-6 py-8 flex flex-col gap-10 justify-center items-center">
            <div className="px-6 py-8 flex flex-col gap-10 justify-center items-center text-center">
              <h1 className="text-3xl text-center font-semibold">Current openings</h1>
              {/* Temporary placeholder text for no postings */}
              <p>Sorry, we don't have any openings at the moment. Please check back later.</p>
            </div>
          </div>
        </div>
        <HomeFooter />
    </div>
  )
}