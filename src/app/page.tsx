import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader/>
        <div className="flex-grow">
          Home
        </div>
      <HomeFooter/>
    </div>
  );
}
