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
    <section className="h-12 px-[9%] font-customFont fixed top-8 grid grid-cols-[repeat(2,minmax(1rem,34.6rem))] justify-center items-center">
      <CompanyLogo />
      <MainMenu classes="hidden lg:flex justify-self-end" />
      <Hamburger handleCurtain={handleCurtain} activeCurtain={activeCurtain} />
      <MobileCurtain activeCurtain={activeCurtain} />
    </section>
  );
}
