import Navigation from "./Navigation/Navigation";
import Introduction from "./Introduction/Introduction";
import Visuals from "./Visuals/Visuals";
import LandingFooter from "./LandingFooter/LandingFooter";

export default function Landing() {
  return (
    <main className="h-fit m-0 px-[9%] font-customFont grid grid-cols-2 grid-rows-[2.5rem_10.5rem_auto] bg-gradient-to-bl from-[#00000011_40%] to-white_90% relative before:content-[''] before:-z-10 before:absolute before:w-full before:h-full before:bg-[radial-gradient(circle_at_top_left,#54bd9545_10%,transparent_30%)] after:content-[''] after:-z-10 after:absolute after:w-full after:h-full after:bg-[radial-gradient(circle_at_right,#54bd9545_20%,transparent_45%)]">
      <Navigation />
      <Introduction />
      <Visuals />
      <LandingFooter />
    </main>
  );
}
