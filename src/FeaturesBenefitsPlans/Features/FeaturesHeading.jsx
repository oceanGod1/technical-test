import H2Cmp from "../../ReccuringCmp/h2Cmp";
import PrimaryButton from "../../ReccuringCmp/PrimaryButton";
import GenericButton from "../../ReccuringCmp/GenericButton";

export default function FeaturesHeading() {
  return (
    <header className="h-fit flex justify-between items-center">
      <H2Cmp
        content="Our Features you can get"
        classes="w-customW1 text-customFS2 font-semibold leading-customLH2 text-secondary"
      />
      <PrimaryButton content="Get Started" />
    </header>
  );
}
