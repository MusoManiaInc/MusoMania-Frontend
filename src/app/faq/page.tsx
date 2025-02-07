import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";

export default function FAQ() {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <HomeHeader />
            {/* FAQ Masthead */}
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
            {/* Divider */}
            <hr />
            {/* FAQs */}
            <div className="lg:px-20 py-10 sm:px-10 px-6">
                <div className="flex flex-col gap-6 sm:gap-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="font-bold text-2xl sm:text-3xl">General</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">What is MusoMania?</h2>
                                <p className="text-gray-700">
                                    MusoMania is a social media platform designed for musicians to connect, collaborate, and monetize their talents. Our platform empowers musicians by allowing them to share their music, find bandmates, sell rights or sheet music, and even offer their skills as a service (e.g. recording drum loops).
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">How do I sign up for MusoMania?</h2>
                                <p className="text-gray-700">
                                    You can sign up for MusoMania by clicking the "Join now" button on the homepage. You will be asked to provide your name, email address, and a password. Once you have signed up, you can start creating your profile and connecting with other musicians.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">How do I reset my password?</h2>
                                <p className="text-gray-700">
                                    If you have forgotten your password, you can reset it by clicking the "Forgot password" link on the login page. You will be asked to provide your email address, and a password reset link will be sent to you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="font-bold text-2xl sm:text-3xl">Account</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">How do I delete my account?</h2>
                                <p className="text-gray-700">
                                    If you would like to delete your MusoMania account, please contact us at <a className="underline" href="mailto:support@musomania.ca">support@musomania.ca</a>. We will assist you with the process.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">How do I change my email address?</h2>
                                <p className="text-gray-700">
                                    You can change your email address by going to the "Settings" section of your profile. From there, you can update your email address and save the changes.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">How do I change my password?</h2>
                                <p className="text-gray-700">
                                    You can change your password by going to the "Settings" section of your profile. From there, you can update your password and save the changes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="font-bold text-2xl sm:text-3xl">Privacy</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">Is my information secure?</h2>
                                <p className="text-gray-700">
                                    Yes, we take the security of your information very seriously. We use industry-standard encryption to protect your data and we do not share your information with third parties without your consent.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">How do I report a privacy concern?</h2>
                                <p className="text-gray-700">
                                    If you have a privacy concern, please contact us at <a className="underline" href="mailto:support@musomania.ca">support@musomania.ca</a>. We take all privacy concerns seriously and will address them promptly.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold text-lg">Can I control who sees my profile?</h2>
                                <p className="text-gray-700">
                                    Yes, you can control who sees your profile by adjusting your privacy settings. You can choose to make your profile public, private, or visible to only your connections.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <hr />
            {/* Contact */}
            <div className="lg:px-20 py-10 sm:px-10 px-6">
                <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-2xl sm:text-3xl">Contact</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-lg">How do I contact MusoMania?</h2>
                            <p className="text-gray-700">
                                You can contact MusoMania by emailing us at <a className="underline" href="mailto:support@musomania.ca">support@musomania.ca</a>. We are here to help you with any questions or concerns you may have.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-lg">How do I provide feedback?</h2>
                            <p className="text-gray-700">
                                We welcome your feedback! You can provide feedback by emailing us at <a className="underline" href="mailto:support@musomania.ca">support@musomania.ca</a>. We appreciate your input and strive to improve our platform based on your suggestions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </div>
    )
}