import introImage from "../../assets/landing-image-1.png";

import messageIcon from "../../assets/message-icon.png";
import databaseIcon from "../../assets/database-icon.png";
import tickIcon from "../../assets/tick-icon.png";

import IconSplach from "../../ReccuringCmp/IconSplash";
import CardSplashCmp from "../../ReccuringCmp/CardSplashCmp";
import TotalIncomeCard from "../../ReccuringCmp/TotalIncomeCard";

export default function LandingRightCard() {
  return (
    <div className="w-full h-fit relative row-start-3 flex justify-end">
      <img src={introImage} alt="landing page image" />

      <IconSplach
        image={tickIcon}
        figClasses="w-10 h-10 rounded-lg bg-color6 absolute top-44 left-20 -rotate-12"
      />
      <IconSplach
        image={messageIcon}
        imgClasses={"-rotate-15"}
        figClasses="w-10 h-10 rounded-lg bg-color7 absolute right-12 -bottom-7 rotate-15"
      />

      <IconSplach
        image={databaseIcon}
        imgClasses={"-rotate-15"}
        figClasses="w-12 h-12 rounded-lg bg-color8 absolute top-8 -right-8 rotate-15"
      />
      <div className="h-[calc(100%-4rem)] w-fit absolute top-8 left-8">
        <CardSplashCmp
          content2="$450.00"
          content1="Enter amount"
          parentClasses="w-48 grid grid-cols-2 grid-rows-customRows1"
          child1Classes="gap-1"
        >
          <p className="px-4 py-1 rounded-[2.5rem] text-[#ffffff] text-[0.8125rem] font-medium bg-primary justify-self-end">
            Send
          </p>
          <hr className="row-start-3 col-span-2" />
        </CardSplashCmp>
        <TotalIncomeCard classes="right-0 bottom-0" content2="$250.00" />
      </div>
    </div>
  );
}
