import SectionLargestCards from "../ReccuringCmp/SectionLargestCard";
import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";

export default function Ratings() {
  return (
    <SectionLargestCards classes="h-customH1 bg-color4 grid-rows-[4rem_auto_auto] grid-cols-[minmax(1rem,40.25rem)_minmax(1rem,28.95rem)]">
      <LeftCard />
      <RightCard />
    </SectionLargestCards>
  );
}
