import { useState } from "react";

import CompanyLogo from "../../ReccuringCmp/CompanyLogo";
import MobileCurtain from "./MobileCurtain";
import Hamburger from "./Hamburger";
import MainMenu from "./MainMenu";
import SectionLargestCards from "../../ReccuringCmp/SectionLargestCard";

export default function Navigation() {
  let [activeCurtain, setActiveCurtain] = useState(false);

  const handleCurtain = e => {
    setActiveCurtain(!activeCurtain);
  };

  return (
    <nav className="h-fit w-full pt-10 px-[9%] fixed top-3 row-start-2 col-span-2 grid grid-cols-[repeat(2,minmax(1rem,34.6rem))] items-center justify-center">
      <CompanyLogo />
      <MainMenu classes="hidden lg:flex justify-self-end" />
      <Hamburger handleCurtain={handleCurtain} activeCurtain={activeCurtain} />
      <MobileCurtain activeCurtain={activeCurtain} />
    </nav>
  );
}
