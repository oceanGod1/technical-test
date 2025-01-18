import GenericButton from "../../ReccuringCmp/GenericButton";
import PCmp from "../../ReccuringCmp/PCmp";
import PrimaryButton from "../../ReccuringCmp/PrimaryButton";

import introArch from "../../assets/landing-arch.png";
import playIcon from "../../assets/play-icon.png";

export default function Introduction() {
  return (
    <div className="row-start-3 h-fit grid gap-6">
      <header>
        <h1 className="font-bold text-[5rem] leading-[5.625rem] tracking-wide">
          We're here to Increase your Productivity
        </h1>
      </header>

      <img src={introArch} />

      <PCmp
        classes="w-customW3 my-6 text-secondary font-medium text-lg leading-customLH5"
        content="Let's make your work easier and more organized, using the Taskio Dashboard
      with many of the latest features in managing work every day."
      />

      <div className="h-fit flex items-center gap-8">
        <PrimaryButton content="Try free trial" />
        <GenericButton
          content="View Demo"
          classes="px-customP1 py-5 rounded-customRadius1 text-secondary text-lg font-medium bg-transparent flex items-center gap-4 hover:bg-backup hover:text-white"
        >
          <img src={playIcon} />
        </GenericButton>
      </div>
    </div>
  );
}
