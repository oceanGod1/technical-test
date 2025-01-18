import H3Cmp from "../../ReccuringCmp/H3Cmp";
import PCmp from "../../ReccuringCmp/PCmp";

export default function ListItem({ image, content1, content2 }) {
  return (
    <li className="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] gap-x-5">
      <div className="w-[3.75rem] h-[3.75rem] shadow-[0px_4px_9px_#00000015] bg-white grid place-items-center row-span-2">
        <img src={image} alt="list heading icon" />
      </div>
      <H3Cmp
        content={content1}
        classes="my-1 text-customFS3 font-bold leading-customLH4 text-secondary"
      />
      <PCmp
        content={content2}
        classes="my-1 text-lg text-backup font-medium leading-customLH5"
      />
    </li>
  );
}
