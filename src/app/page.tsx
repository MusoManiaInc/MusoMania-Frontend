import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";
import Image from "next/image";

export default function Home() {
  //! NOTE: If you want to call the custom colors use the following syntax: `bg-custom-purple1 or text-custom-yellow1`  
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader/>
        <div className="flex-grow">
            Home PAGE!
        </div>
      <HomeFooter/>
    </div>
  );
}
