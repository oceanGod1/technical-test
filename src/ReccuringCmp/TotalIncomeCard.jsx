import barChart from "../assets/bar-chart.png";

import CardSplashCmp from "./CardSplashCmp";
export default function TotalIncomeCard({ content2, classes }) {
  return (
    <CardSplashCmp
      content1="Total Income"
      content2={content2}
      parentClasses={`absolute flex justify-between gap-4  ${classes}`}
    >
      <img src={barChart} alt="bar chart icon" className="self-end" />
    </CardSplashCmp>
  );
}
