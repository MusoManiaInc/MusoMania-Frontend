'use client'
import { useState, useEffect } from 'react'

const LogoComponent = () => {
  const [currentImage, setCurrentImage] = useState<string>("null");

  useEffect(() => {
    const images: { [key in "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"]: string } = {
      Sunday: "/icons/logoSu.png",
      Monday: "/icons/logoM.png",
      Tuesday: "/icons/logoTu.png",
      Wednesday: "/icons/logoW.png",
      Thursday: "/icons/logoTh.png",
      Friday: "/icons/logoF.png",
      Saturday: "/icons/logoSa.png",
    };

    const today = new Date().toLocaleString("en-US", { weekday: "long" }) as keyof typeof images;
    setCurrentImage(images[today]);
  }, []);

  return (
      <img className="h-12" src={currentImage} alt="MusoMania footer logo" />
  );
};

export default LogoComponent