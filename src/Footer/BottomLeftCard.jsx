import CompanyLogo from "../ReccuringCmp/CompanyLogo";
import GenericButton from "../ReccuringCmp/GenericButton";
import ParagraphHolder from "../ReccuringCmp/ParagraphHolder";
import forwardArrow from "../assets/forward-arrow.png";

export default function BottomLeftCard() {
  return (
    <div className="pt-24 grid gap-3">
      <CompanyLogo />
      <ParagraphHolder
        classes="mb-3 font-medium text-customLH5 text-backup"
        content="Get started now, try our product"
      />

      <form className="h-14 ps-4 py-1 pe-1 border-2 border-solid border-backup rounded-full flex">
        <input
          type="search"
          placeholder="Search"
          className="flex-1 outline-none border-none text-backup bg-inherit"
        />
        <GenericButton classes="w-customW13 h-customW13 rounded-full bg-primary grid place-items-center">
          <img src={forwardArrow} alt="forward arrow" />
        </GenericButton>
      </form>
    </div>
  );
}
