import SectionLargestCards from "../ReccuringCmp/SectionLargestCard";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCard from "./BottomRightCard";
import LastCard from "./LastCard";
import TopLeftCard from "./TopLeftCard";
import TopRightForm from "./TopRightCard";

export default function Footer() {
  return (
    <SectionLargestCards classes="h-fit pt-10 lg:pt-[8.2rem] pb-10 bg-color11 xl:grid-rows-customRows1 lg:grid-cols-2 xl:grid-cols-[29.2rem_36rem] gap-8 xl:gap-16">
      <TopLeftCard />
      <TopRightForm />
      <BottomLeftCard />
      <BottomRightCard />
      <LastCard />
    </SectionLargestCards>
  );
}
