import CompanyLogo from "./CompanyLogo";
import MainMenu from "./MainMenu";

export default function Navigation() {
  return (
    <nav className="col-span-2 flex items-center justify-between">
      <span>
        <CompanyLogo />
      </span>
      <MainMenu />
    </nav>
  );
}
