import H2Cmp from "../../ReccuringCmp/h2Cmp";
import PCmp from "../../ReccuringCmp/PCmp";
import LikertScale from "./LikartScale";

import fiveStar from "../../assets/five-star.png";
import fourStar from "../../assets/four-star.png";

export default function LeftHalf() {
  return (
    <>
      <header className="row-start-2">
        <H2Cmp
          content="How we support our partners all over the world"
          fSize="3.125rem"
          tAlign="start"
          lHeight="3.81rem"
        />
        <PCmp
          marginY="6"
          fSize="base"
          textColor="backup"
          lHeight="1.875rem"
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
