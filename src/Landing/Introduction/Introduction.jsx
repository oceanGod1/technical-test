import LinkButton from "../../ReccuringCmp/LinkButton";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";
import PrimaryLinkButton from "../../ReccuringCmp/PrimaryLinkButton";

import introArch from "../../assets/landing-arch.png";
import playIcon from "../../assets/play-icon.png";

export default function Introduction() {
  return (
    <div className="h-fit row-start-3 col-span-2 md:col-span-1 grid gap-6">
      <header>
        <h1 className="font-bold text-4xl text-secondary sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[5.625rem] tracking-wide">
          We're here to Increase your Productivity
        </h1>
      </header>

      <img src={introArch} className="w-full hidden md:inline" />
      <div className="-z-10 relative content-[''] md:before:w-[60%] md:before:h-full before:rounded-3xl before:bg-[#dddddd70] before:absolute before:right-0 before:-z-10 xl:before:w-0 xl:before:h-0">
        <ParagraphHolder
          classes="lg:w-customW3 my-6 text-secondary font-medium text-lg leading-customLH5"
          content="Let's make your work easier and more organized, using the Taskio Dashboard
      with many of the latest features in managing work every day."
        />
      </div>

      <div className="h-fit flex flex-col sm:flex-row items-center gap-8">
        <PrimaryLinkButton content="Try free trial" />
        <LinkButton
          content="View Demo"
          classes="px-customP1 py-5 rounded-customRadius1 text-secondary text-lg font-medium bg-transparent flex items-center gap-4 hover:bg-backup hover:text-white md:absolute lg:static right-[9%] md:-z-10"
        >
          <img src={playIcon} />
        </LinkButton>
      </div>
    </div>
  );
}
