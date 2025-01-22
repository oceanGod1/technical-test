import { useState } from "react";

import CompanyLogo from "../ReccuringCmp/CompanyLogo";
import Hamburger from "./Hamburger";
import MainMenu from "./MainMenu";
import MobileCurtain from "./MobileCurtain";

export default function MainNavigation() {
  let [activeCurtain, setActiveCurtain] = useState(false);

  const handleCurtain = e => {
    setActiveCurtain(!activeCurtain);
  };
  return (
    <section className="h-20 w-screen px-[9%] font-customFont fixed top-0 flex items-end">
      <nav className="h-12 grid grid-cols-[repeat(2,minmax(1rem,34.6rem))] justify-center items-center">
        <CompanyLogo />
        <MainMenu classes="hidden lg:flex justify-self-end" />
        <Hamburger
          handleCurtain={handleCurtain}
          activeCurtain={activeCurtain}
        />
        <MobileCurtain activeCurtain={activeCurtain} />
      </nav>
    </section>
  );
}
