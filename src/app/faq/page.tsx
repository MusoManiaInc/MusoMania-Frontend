import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";

export default function FAQ() {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <HomeHeader />
            <div className="lg:px-20 py-10 sm:px-10 px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-6 py-8 w-full">
                    <div>
                        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div className="hidden lg:flex">
                        <a 
                            className="flex flex-row items-center justify-center h-10 gap-2 px-4 py-2 border border-black rounded-md hover:bg-gray-100 transition-all duration-200" 
                            href="/contact"
                        >
                            <span className="font-bold text-black">Contact us</span>
                            <img 
                                className="h-4 w-4" 
                                src="/images/up-right-from-square-solid.svg" 
                                alt="Up right from square icon" 
                            />
                        </a>
                    </div>
                </div>
                <div className="px-6 flex flex-col gap-6 sm:gap-10">
                    <p className="text-lg sm:text-xl text-gray-700">
                        Quick answers to questions you may have. Can't find what you're looking for? Feel free to <a className="underline" href="/contact">contact us</a>.
                    </p>
                </div>
            </div>
            <hr />
            <HomeFooter />
        </div>
    )
}