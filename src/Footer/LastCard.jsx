import ParagraphHolder from "../ReccuringCmp/ParagraphHolder";
export default function LastCard() {
  return (
    <div className="pt-4 lg:pt-0 col-span-2 flex flex-col items-center gap-4 lg:flex-row justify-between">
      <ParagraphHolder
        classes="font-medium text-customLH5 text-white text-center"
        content={`\u00A9 ${new Date().getFullYear()} Biccas Inc. Copyright, all rights reserved`}
      />

      <div className="flex flex-col lg:flex-row gap-2">
        <a
          href="#"
          className="font-medium text-customLH5 text-white text-center lg:text-start"
        >
          Terms and Conditions
        </a>
        <p className="hidden lg:block text-white">&bull;</p>
        <a
          href="#"
          className="font-medium text-customLH5 text-white text-center lg:text-start"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
