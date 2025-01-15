import unsplashIcon from "../../assets/unsplash-icon.png";
import notionIcon from "../../assets/notion-icon.png";
import intercomIcon from "../../assets/intercom-icon.png";
import descriptIcon from "../../assets/descript-icon.png";
import grammarlyIcon from "../../assets/grammarly-icon.png";

export default function LandingFooter() {
  return (
    <div className="row-start-4 col-span-2 my-32">
      <h2 className="font-bold text-[2.5rem] text-center text-secondary">
        More than 25,000 teams use Collabs
      </h2>
      <div className="mt-14 flex gap-9">
        <img src={unsplashIcon} alt="unsplash icon" />
        <img src={notionIcon} alt="notion icon" />
        <img src={intercomIcon} alt="intercom icon" />
        <img src={descriptIcon} alt="descript icon" />
        <img src={grammarlyIcon} alt="grammarly icon" />
      </div>
    </div>
  );
}
