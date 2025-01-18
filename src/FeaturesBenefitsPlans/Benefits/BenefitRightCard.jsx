import computerImage from "../../assets/benefit-right-image.png";
import amandaDp from "../../assets/amanda-dp.png";
import commentIcon from "../../assets/comment-icon.png";
import pictureIcon from "../../assets/picture-icon.png";
import greenTickIcon from "../../assets/green-tick-icon.png";

import IconSplach from "../../ReccuringCmp/IconSplash";
import CardSplashCmp from "../../ReccuringCmp/CardSplashCmp";
import TotalIncomeCard from "../../ReccuringCmp/TotalIncomeCard";
export default function BenefitRightCard() {
  return (
    <div className="relative flex justify-end">
      <img
        src={computerImage}
        alt="photo of a laptop and teacup on a table"
        className="relative -top-2"
      />

      <img
        src={pictureIcon}
        alt="picture icon"
        className="absolute top-64 left-8"
      />
      <TotalIncomeCard content2="$245.00" classes="-right-16 top-28" />

      <CardSplashCmp
        content2="Amanda Young"
        content1="Expert Saving Money"
        parentClasses="absolute top-8 left-0 grid grid-cols-customCols1 gap-4"
        child1Classes="flex flex-col-reverse gap-2"
      >
        <img
          src={amandaDp}
          alt="amanda young display photo"
          className="col-start-1 row-start-1"
        />
        <IconSplach
          image={commentIcon}
          figClasses="w-10 h-10 rounded-full bg-primary col-start-3 row-start-1"
        />
      </CardSplashCmp>

      <CardSplashCmp
        fontSize="text-lg"
        content2="Money Transfer Successful"
        parentClasses="absolute -bottom-2 left-4 grid grid-cols-customCols1 gap-4"
      >
        <img
          src={greenTickIcon}
          alt="check icon"
          className="col-start-1 row-start-1"
        />
      </CardSplashCmp>
    </div>
  );
}
