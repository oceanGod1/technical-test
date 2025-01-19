import Navigation from "./Navigation/Navigation";
import Introduction from "./Introduction/Introduction";
import LandingRightCard from "./LandingRightCard/LandingRightCard";
import LandingFooter from "./LandingFooter/LandingFooter";
import SectionLargestCards from "../ReccuringCmp/SectionLargestCard";

export default function Landing() {
  return (
    <SectionLargestCards classes="h-fit bg-gradient-to-b from-[#00000005_70%] grid-rows-[2.5rem_10.5rem_auto] grid-cols-[repeat(2,minmax(1rem,34.6rem))] to-white_90% before:content-[''] before:-z-10 before:absolute before:w-full before:h-full before:bg-customBG1 after:content-[''] after:-z-10 after:absolute after:w-full after:h-full after:bg-customBG2">
      <Navigation />
      <Introduction />
      <LandingRightCard />
      <LandingFooter />
    </SectionLargestCards>
  );
}
