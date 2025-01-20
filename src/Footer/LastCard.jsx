import ParagraphHolder from "../ReccuringCmp/ParagraphHolder";
export default function LastCard() {
  return (
    <div className="col-span-2 flex justify-between">
      <ParagraphHolder
        classes="font-medium text-customLH5 text-white"
        content="&copy; 2025 Biccas Inc. Copyright, all rights reserved"
      />

      <div className="flex gap-2">
        <a href="#" className="font-medium text-customLH5 text-white">
          Terms and Conditions
        </a>
        <a href="#" className="font-medium text-customLH5 text-white">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
