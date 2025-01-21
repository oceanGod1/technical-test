import H2Cmp from "../../ReccuringCmp/h2Cmp";
import PrimaryLinkButton from "../../ReccuringCmp/PrimaryLinkButton";

export default function FeaturesHeading() {
  return (
    <header className="h-fit flex flex-col gap-8 sm:flex-row sm:gap-0 justify-between items-center">
      <h2 className="text-center sm:text-start sm:w-customW1 text-2xl md:text-3xl lg:text-customFS2 font-semibold lg:leading-customLH2 text-secondary">
        Our Features you can get
      </h2>
      <PrimaryLinkButton content="Get Started" />
    </header>
  );
}
