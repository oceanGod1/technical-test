import H3Cmp from "../../ReccuringCmp/H3Cmp";
import PCmp from "../../ReccuringCmp/PCmp";

export default function ListItem({ image, content1, content2 }) {
  return (
    <li className="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] gap-x-5">
      <div className="w-[3.75rem] h-[3.75rem] shadow-[0px_4px_9px_#00000015] bg-white grid place-items-center row-span-2">
        <img src={image} alt="list heading icon" />
      </div>
      <H3Cmp content={content1} />
      <PCmp
        content={content2}
        fSize="lg"
        textColor="backup"
        lHeight="1.875rem"
        marginY="3"
      />
    </li>
  );
}
