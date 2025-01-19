import H2Cmp from "../../ReccuringCmp/h2Cmp";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";
import LikertScale from "./LikartScale";

import fiveStar from "../../assets/five-star.png";
import fourStar from "../../assets/four-star.png";

export default function LeftCard() {
  return (
    <>
      <header className="row-start-2">
        <H2Cmp
          content="How we support our partners all over the world"
          classes="text-customFS2 leading-customLH1 font-bold"
        />
        <ParagraphHolder
          classes="my-6 font-base text-medium text-backup leading-customLH5"
          content="SasS became a common delivery model for many business applications, including office software, messaging software, payroll processing software, DBMS software, and management software"
        />
      </header>

      <div className="row-start-3 flex gap-20">
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
