import H2Cmp from "../../ReccuringCmp/h2Cmp";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";

export default function PlansHeading() {
  return (
    <header className="lg:w-customW8 self-end justify-self-center grid gap-4 lg:gap-10">
      <H2Cmp
        content="Choose The Plan That's Right For You"
        classes="font-bold lg:text-customFS2 lg:leading-customLH7 text-secondary text-center"
      />
      <ParagraphHolder
        content="Choose the plan that works best for you, feel free to contact us"
        classes="font-bold text-sm md:text-base text-center lg:text-lg leading-customLH6 text-backup "
      />
    </header>
  );
}
