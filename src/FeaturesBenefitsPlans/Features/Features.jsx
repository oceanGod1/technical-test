import SectionLargestCards from "../../ReccuringCmp/SectionLargestCard";
import FeaturesHeading from "./FeaturesHeading";
import FeaturesVisualCards from "./FeaturesVisualCards";

export default function Features() {
  return (
    <SectionLargestCards classes="py-32 gap-y-20">
      <FeaturesHeading />
      <FeaturesVisualCards />
    </SectionLargestCards>
  );
}
