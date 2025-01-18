import H3Cmp from "../../ReccuringCmp/H3Cmp";
import PCmp from "../../ReccuringCmp/PCmp";

export default function FeaturesSingleCard({ image, content1, content2 }) {
  return (
    <div className="w-fit grid gap-8">
      <img src={image} alt={`${content1} icon`} className="h-[26rem]" />
      <H3Cmp
        content={content1}
        classes="text-customFS4 font-semibold leading-customLH5 text-secondary"
      />
      <PCmp
        content={content2}
        classes="w-customW4 text-lg text-backup leading-customLH5"
      />
    </div>
  );
}
