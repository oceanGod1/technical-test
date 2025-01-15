import introImage from "../../assets/landing-image-1.png";
import barChart from "../../assets/bar-chart.png";
import messageIcon from "../../assets/message-icon.png";
import stackIcon from "../../assets/stack-icon.png";
import tickIcon from "../../assets/tick-icon.png";

export default function Visuals() {
  return (
    <div className="w-full h-fit relative row-start-3 flex justify-end">
      <img src={introImage} alt="landing page image" />
      <div className="h-[calc(100%-4rem)] w-fit absolute top-8 left-8 ">
        <div className="w-48 p-4 bg-white rounded-md grid grid-rows-[auto_1fr] grid-cols-2 items-center">
          <div className="grid gap-1">
            <h4 className="font-normal text-xs text-color5">Enter amount</h4>
            <p className="m-y-4 text-secondary font-medium text-base">
              $450.00
            </p>
          </div>
          <p
            href="#"
            className="px-4 py-1 rounded-[2.5rem] text-[#ffffff] text-[0.8125rem] font-medium bg-primary justify-self-end"
          >
            Send
          </p>
          <hr className="row-start-3 col-span-2" />
        </div>
        <div className="w-10 h-10 rounded-lg bg-[#4535af] absolute top-36 right-24 -rotate-12 grid place-content-center">
          <img src={tickIcon} alt="" />
        </div>
        <div className="p-4 bg-white rounded-md absolute bottom-0 right-0 flex items-center justify-between gap-4">
          <div>
            <h4 className="font-normal text-xs text-color5">Total Income</h4>
            <p className="text-secondary font-medium text-base">$250.00</p>
          </div>
          <img src={barChart} alt="bar chart icon" className="self-end" />
        </div>
      </div>
      <img
        src={messageIcon}
        alt="message icon"
        className="absolute -bottom-8 right-12"
      />
      <img
        src={stackIcon}
        alt="stack icon"
        className="absolute top-8 -right-8"
      />
    </div>
  );
}
