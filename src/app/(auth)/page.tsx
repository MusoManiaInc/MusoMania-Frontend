import HomeFooter from "@/components/footer/home-footer";
import PreferencesList from "@/components/home/preferences-list";
import HomeHeader from "@/components/navbar/home-header";
import { instruments, preferences } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <>
        <HomeHeader />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow pt-12">
          <div className="w-full flex justify-center sm:px-12 px-6 max-w-screen-xl mx-auto gap-6 md:flex-row flex-col">
            <div className="flex flex-col gap-2 md:mt-20 mt-0">
              <h1 className="text-3xl sm:text-5xl text-center md:text-left">
                Welcome to your musical community
              </h1>
              <div className="flex flex-col gap-4 pt-4">
                <Link
                  href="/signup"
                  className="rounded-full bg-yellow-300 text-center py-2 font-semibold duration-100 transition-all ease-linear hover:bg-yellow-400"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="rounded-full bg-transparent hover:bg-gray-100 py-2 text-center border border-black text-black font-semibold duration-100 transition-all ease-linear"
                >
                  Sign In
                </Link>
              </div>
              <div className="text-sm text-center w-full pt-4">
                By clicking Continue to join or sign in, you agree to MusoMania{" "}
                <Link
                  href="/privacy-policy"
                  className="text-purple-900 font-bold hover:underline"
                >
                  Privacy Policy
                </Link>
                , and{" "}
                <Link
                  href="/terms-of-service"
                  className="text-purple-900 font-bold hover:underline"
                >
                  Terms of Service
                </Link>
                .
              </div>
            </div>
            <div>
              <Image
                src="/images/landing-page.svg"
                alt="landing page image"
                width={1000}
                height={1000}
                className=""
              />
            </div>
          </div>
          <section className="w-full py-16 sm:px-12 px-6 bg-yellow-50">
            <div className="flex justify-center md:flex-row flex-col max-w-screen-xl mx-auto gap-6">
              <div>
                <h2 className="text-4xl">Explore the best genres</h2>
                <p className="text-gray-700 text-lg pt-3">
                  Dive into the world of music with MusoMania! Explore a diverse
                  range of genres, discover new favorites, and let the music take
                  you on an unforgettable journey.
                </p>
              </div>
              <div>
                <ul className="flex flex-wrap gap-4">
                  {preferences.map((item) => (
                    <PreferencesList key={item.title} title={item.title} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="w-full py-16 sm:px-12 px-6">
            <div className="flex justify-center md:flex-row flex-col max-w-screen-xl mx-auto gap-6">
              <div>
                <h2 className="text-4xl">Explore the best instruments</h2>
                <p className="text-gray-700 text-lg pt-3">
                  Dive into the world of music with MusoMania! Explore a diverse
                  range of genres, discover new favorites, and let the music take
                  you on an unforgettable journey.
                </p>
              </div>
              <div>
                <ul className="flex flex-wrap gap-4">
                  {instruments.map((item) => (
                    <PreferencesList key={item.title} title={item.title} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="w-full py-16 sm:px-12 px-6 bg-gray-50">
            <div className="flex justify-center md:flex-row flex-col max-w-screen-xl mx-auto gap-6">
              <div>
                <h2 className="text-4xl text-center">
                  Explore the best instruments
                </h2>
                <div className="pt-6 flex justify-center">
                  <Link
                    href="/login"
                    className="rounded-full bg-transparent py-3 px-6 hover:bg-yellow-300 hover:border-yellow-300 transition-all border border-black text-black font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <HomeFooter />
      </div>
    </>
  );
}
