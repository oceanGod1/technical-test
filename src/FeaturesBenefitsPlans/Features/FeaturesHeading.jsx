import H2Cmp from "../../ReccuringCmp/h2Cmp";
import PrimaryLinkButton from "../../ReccuringCmp/PrimaryLinkButton";

export default function FeaturesHeading() {
  return (
    <header className="h-fit flex justify-between items-center">
      <H2Cmp
        content="Our Features you can get"
        classes="w-customW1 text-customFS2 font-semibold leading-customLH2 text-secondary"
      />
      <PrimaryLinkButton content="Get Started" />
    </header>
  );
}
