import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />

    {/* Header Break Section */}

    <div className="h-[100vh] flex flex-col items-center justify-center space-y-6">
  <h1 className="text-8xl font-bold">Let's Talk.</h1>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ECB602" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7"/>
  </svg>
</div>

    {/* Map Section */}
    <section className="text-gray-600 body-font relative h-[75vh] border-2 rounded" style={{ borderColor: "#ECB602" }}>
  <div className="absolute inset-0 bg-gray-300">
    <iframe
      width="100%"
      height="100%"
      frameBorder="0"
      title="map"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Lakehead+University+Orillia+Ontario&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{}}
    ></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div
      className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md "
      
    >
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Questions?</h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Please Fill out the form below with any questions you may have.
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="name"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="bg-custom-purple2 text-white px-6 py-3 rounded-full hover:bg-custom-purple1 transition-all font-bold">
        Submit
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Please allow a reasonable amount of time for a response.
      </p>
    </div>
  </div>
</section>

      <HomeFooter />
    </div>
  );
}
