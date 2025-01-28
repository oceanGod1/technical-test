import { useState, useEffect } from "react";

import CompanyLogo from "../ReccuringCmp/CompanyLogo";
import Hamburger from "./Hamburger";
import MainMenu from "./MainMenu";
import MobileCurtain from "./MobileCurtain";

export default function MainNavigation() {
  let [activeCurtain, setActiveCurtain] = useState(false);
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollStyles = isScrolled ? "bg-color9 -top-6" : "bg-transparent top-0";

  const handleCurtain = e => {
    setActiveCurtain(!activeCurtain);
  };
  return (
    <header
      className={`h-20 w-screen px-[9%] font-customFont duration-500 ease-in-4 fixed ${scrollStyles} flex items-end`}
    >
      <nav className="h-12 grid grid-cols-[repeat(2,minmax(1rem,34.6rem))] justify-center items-center">
        <CompanyLogo />
        <MainMenu classes="hidden lg:flex justify-self-end" />
        <Hamburger
          handleCurtain={handleCurtain}
          activeCurtain={activeCurtain}
        />
        <MobileCurtain activeCurtain={activeCurtain} />
      </nav>
    </header>
  );
}
