import H3Cmp from "../../ReccuringCmp/H3Cmp";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";

export default function FeaturesSingleCard({ image, content1, content2 }) {
  return (
    <div className="justify-self-center grid justify-items-center lg:justify-items-start lg:gap-8">
      <img
        src={image}
        alt={`${content1} icon`}
        className="w-full customMQ1:h-[26rem]"
      />
      <H3Cmp
        content={content1}
        classes="lg:text-customFS4 font-semibold lg:leading-customLH5 text-secondary"
      />
      <ParagraphHolder
        content={content2}
        classes="w-[12rem] text-center lg:text-start lg:w-customW4 text-sm md:text-base lg:text-lg text-backup lg:leading-customLH5"
      />
    </div>
  );
}
