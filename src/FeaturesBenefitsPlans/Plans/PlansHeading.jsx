import H2Cmp from "../../ReccuringCmp/h2Cmp";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";

export default function PlansHeading() {
  return (
    <header className="w-customW8 self-end justify-self-center grid gap-10">
      <H2Cmp
        content="Choose The Plan That's Right For You"
        classes="font-bold text-customFS2 leading-customLH7 text-secondary text-center"
      />
      <ParagraphHolder
        content="Choose the plan that works best for you, feel free to contact us"
        classes="font-bold text-lg leading-customLH6 text-backup "
      />
    </header>
  );
}
