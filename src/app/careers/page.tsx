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
        </div>
        <HomeFooter />
    </div>
  )
}