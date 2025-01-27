import SectionLargestCards from "../../ReccuringCmp/SectionLargestCard";
import BenefitRightCard from "./BenefitRightCard";
import BenefitsLeftCard from "./BenefitsLeftCard";

export default function Benefits() {
  return (
    <SectionLargestCards classes="hidden customMQ2:grid grid-cols-[repeat(2,minmax(1rem,34.6rem))]">
      <BenefitsLeftCard />
      <BenefitRightCard />
    </SectionLargestCards>
  );
}
