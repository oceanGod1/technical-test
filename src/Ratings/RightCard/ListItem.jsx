import H3Cmp from "../../ReccuringCmp/H3Cmp";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";

export default function ListItem({ image, content1, content2 }) {
  return (
    <li className="grid grid-rows-customRows2 grid-cols-customCols2 gap-x-5">
      <div className="w-customW9 h-customH2 shadow-customBS1 bg-white grid place-items-center row-span-2">
        <img src={image} alt="list heading icon" />
      </div>
      <H3Cmp
        content={content1}
        classes="my-1 text-customFS3 font-bold leading-customLH4 text-secondary"
      />
      <ParagraphHolder
        content={content2}
        classes="my-1 text-lg text-backup font-medium leading-customLH5"
      />
    </li>
  );
}
