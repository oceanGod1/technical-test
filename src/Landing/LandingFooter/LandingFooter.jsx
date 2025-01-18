import unsplashIcon from "../../assets/unsplash-icon.png";
import notionIcon from "../../assets/notion-icon.png";
import intercomIcon from "../../assets/intercom-icon.png";
import descriptIcon from "../../assets/descript-icon.png";
import grammarlyIcon from "../../assets/grammarly-icon.png";
import H2Cmp from "../../ReccuringCmp/h2Cmp";

export default function LandingFooter() {
  return (
    <footer className="row-start-4 col-span-2 my-32">
      <H2Cmp
        content="More than 25,000 teams use Collabs"
        classes="text-customFS1 text-center font-bold text-secondary"
      />
      <div className="mt-14 flex gap-9">
        <img src={unsplashIcon} alt="unsplash icon" />
        <img src={notionIcon} alt="notion icon" />
        <img src={intercomIcon} alt="intercom icon" />
        <img src={descriptIcon} alt="descript icon" />
        <img src={grammarlyIcon} alt="grammarly icon" />
      </div>
    </footer>
  );
}
