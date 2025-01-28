import Introduction from "./Introduction/Introduction";
import LandingRightCard from "./LandingRightCard/LandingRightCard";
import LandingFooter from "./LandingFooter/LandingFooter";
import SectionLargestCards from "../ReccuringCmp/SectionLargestCard";

export default function Landing() {
  return (
    <SectionLargestCards classes="abcd h-fit bg-gradient-to-b from-[#00000005_70%] grid-rows-[2.5rem_5.5rem_auto_auto] lg:grid-rows-[2.5rem_10.5rem_auto_auto] grid-cols-[repeat(2,minmax(1rem,34.6rem))] to-white_90% before:content-[''] before:-z-30 before:absolute before:w-full before:h-full before:bg-customBG1 after:content-[''] after:-z-30 after:absolute after:w-full after:h-full after:bg-customBG2">
      <Introduction />
      <LandingRightCard />
      <LandingFooter />
    </SectionLargestCards>
  );
}
