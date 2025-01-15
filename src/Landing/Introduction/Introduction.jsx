import PrimaryButton from "../../PrimaryButton/PrimaryButton";

import introArch from "../../assets/landing-arch.png";
import playIcon from "../../assets/play-icon.png";

export default function Introduction() {
  return (
    <header className="row-start-3 h-fit grid gap-6">
      <h1 className="font-bold text-[5rem] leading-[5.625rem] tracking-wide">
        We're here to Increase your Productivity
      </h1>
      <img src={introArch} />
      <p className="w-[29.3rem] my-6 font-medium text-lg">
        Let's make your work easier and more organized, using the Taskio
        Dashboard with many of the latest features in managing work every day.
      </p>
      <div className="h-fit flex items-center gap-8">
        <PrimaryButton content="Try free trial" />
        <a href="#" className="text-lg font-medium flex items-center gap-4">
          <img src={playIcon} /> View Demo
        </a>
      </div>
    </header>
  );
}
