import SectionLargestCards from "../ReccuringCmp/SectionLargestCard";
import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";

export default function Ratings() {
  return (
    <SectionLargestCards classes="-z-10 h-fit py-16 bg-color4 md:grid-rows-[4rem_auto_auto] grid-cols-[minmax(1rem,40.25rem)_minmax(1rem,28.95rem)] lg:h-customH1 md:py-0">
      <LeftCard />
      <RightCard />
    </SectionLargestCards>
  );
}
