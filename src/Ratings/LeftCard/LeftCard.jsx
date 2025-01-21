import H2Cmp from "../../ReccuringCmp/h2Cmp";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";
import LikertScale from "./LikartScale";

import fiveStar from "../../assets/five-star.png";
import fourStar from "../../assets/four-star.png";

export default function LeftCard() {
  return (
    <>
      <header className="row-start-2 col-span-2 md:col-span-1">
        <H2Cmp
          content="How we support our partners all over the world"
          classes="text-center lg:text-customFS2 md:text-start lg:leading-customLH1 font-bold"
        />
        <ParagraphHolder
          classes="text-center my-6 text-sm md:text-base font-medium text-backup leading-customLH5 md:text-start"
          content="SasS became a common delivery model for many business applications, including office software, messaging software, payroll processing software, DBMS software, and management software"
        />
      </header>

      <div className="row-start-4 col-span-2 items-center justify-center flex flex-col gap-10 md:gap-20 sm:flex-row md:row-start-3 md:col-span-1 md:justify-start md:items-start">
        <LikertScale
          ratingStars={fiveStar}
          ratingScore="4.9"
          clientName="databricks"
        />
        <LikertScale
          ratingStars={fourStar}
          ratingScore="4.8"
          clientName="Chainalysis"
        />
      </div>
    </>
  );
}
