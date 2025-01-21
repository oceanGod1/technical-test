import { useState } from "react";

import CompanyLogo from "../../ReccuringCmp/CompanyLogo";
import MobileCurtain from "./MobileCurtain";
import Hamburger from "./Hamburger";
import MainMenu from "./MainMenu";

export default function Navigation() {
  let [activeCurtain, setActiveCurtain] = useState(false);

  const handleCurtain = e => {
    setActiveCurtain(!activeCurtain);
  };

  return (
    <nav className="h-fit sticky top-3 row-start-2 col-span-2 flex items-center justify-between">
      <CompanyLogo />
      <MainMenu classes="hidden lg:flex" />
      <Hamburger handleCurtain={handleCurtain} activeCurtain={activeCurtain} />
      <MobileCurtain activeCurtain={activeCurtain} />
    </nav>
  );
}
