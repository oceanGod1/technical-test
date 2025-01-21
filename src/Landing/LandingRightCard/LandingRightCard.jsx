import introImage from "../../assets/landing-image-1.png";

import messageIcon from "../../assets/message-icon.png";
import databaseIcon from "../../assets/database-icon.png";
import tickIcon from "../../assets/tick-icon.png";

import IconSplach from "../../ReccuringCmp/IconSplash";
import CardSplashCmp from "../../ReccuringCmp/CardSplashCmp";
import TotalIncomeCard from "../../ReccuringCmp/TotalIncomeCard";
import ParagraphLikeButton from "../../ReccuringCmp/ParagraphLikeButton";

export default function LandingRightCard() {
  return (
    <figure className="-z-20 pt-12 row-start-4 col-span-2 relative md:p-0 md:row-start-3 md:flex md:justify-end lg:h-fit">
      <img
        src={introImage}
        alt="landing page image"
        className="w-full md:h-3/4 md:w-auto"
      />

      <IconSplach
        image={tickIcon}
        figClasses="w-10 h-10 rounded-lg bg-color6 absolute top-44 left-20 -rotate-12 hidden lg:grid"
      />
      <IconSplach
        image={messageIcon}
        imgClasses={"-rotate-15"}
        figClasses="w-10 h-10 rounded-lg bg-color7 absolute right-12 -bottom-7 rotate-15 md:hidden lg:grid"
      />

      <IconSplach
        image={databaseIcon}
        imgClasses={"-rotate-15"}
        figClasses="w-12 h-12 rounded-lg bg-color8 absolute top-8 -right-8 rotate-15 hidden md:grid"
      />

      <div className="h-[calc(100%-4rem)] w-full absolute top-8 md:hidden lg:block lg:left-8 lg:w-fit">
        <CardSplashCmp
          content2="$450.00"
          content1="Enter amount"
          parentClasses="w-48 grid grid-cols-2 grid-rows-customRows1"
          child1Classes="gap-1"
        >
          <ParagraphLikeButton
            content="Send"
            classes="px-4 py-1 rounded-[2.5rem] text-customFS5 font-medium bg-primary justify-self-end"
          />

          <hr className="row-start-3 col-span-2" />
        </CardSplashCmp>
        <TotalIncomeCard classes="right-0 bottom-0" content2="$250.00" />
      </div>
    </figure>
  );
}
