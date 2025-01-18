import CompanyLogo from "../../ReccuringCmp/CompanyLogo";
import MainMenu from "./MainMenu";

export default function Navigation() {
  return (
    <nav className="h-fit row-start-2 col-span-2 flex items-center justify-between">
      <CompanyLogo />
      <MainMenu />
    </nav>
  );
}
