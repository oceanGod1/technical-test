import GenericButton from "../../ReccuringCmp/GenericButton";
import SinglePlan from "./SinglePlan";

export default function ChoosePlan({ toggle }) {
  const plansArr = [
    {
      planHeading: {
        id: 1,
        title: "Free",
        addInfo: "Have a go and test your superpowers",
        price: "0",
        buttonContent: "Signup for free",
      },
      planFeatures: [
        { id: 1, content: "2 Users" },
        { id: 2, content: "2 Files" },
        { id: 3, content: "Public Share & Comments" },
        { id: 4, content: "Chat Support" },
        { id: 5, content: "New income apps" },
      ],
    },

    {
      planHeading: {
        id: 3,
        title: "Bussiness",
        addInfo: "Unveil new superpowers and join the Design League",
        price: toggle ? "192" : "16",
        buttonContent: "Go to Business",
      },
      planFeatures: [
        { id: 1, content: "All the features of pro plan" },
        { id: 2, content: "Account success Manager" },
        { id: 3, content: "Single Sign-On (SSO)" },
        { id: 4, content: "Co-coneception program" },
        { id: 5, content: "Collaboration-Soon" },
      ],
    },

    {
      planHeading: {
        id: 2,
        title: "Pro",
        addInfo: "Experience the power of infinite possibilities",
        price: toggle ? "96" : "8",
        buttonContent: "Go to pro",
      },
      planFeatures: [
        { id: 1, content: "4 Users" },
        { id: 2, content: "All apps" },
        { id: 3, content: "Unlimited editable exports" },
        { id: 4, content: "Folders and collaboration" },
        { id: 5, content: "All income apps" },
      ],
    },
  ];

  const mapPlans = plansArr.map(({ planHeading, planFeatures }) => {
    const { id, title, addInfo, price, buttonContent } = planHeading;

    const logic = (leftHand, rightHand) =>
      title == "Pro" ? leftHand : rightHand;

    return (
      <SinglePlan
        key={id}
        contentH2={price}
        contentH3={title}
        contentP={addInfo}
        planFeatures={planFeatures}
        buttonContent={buttonContent}
        liClasses={logic("bg-primary", "bg-white")}
        classesP={logic("text-white", "text-backup")}
        classesH3={logic("text-white", "text-secondary")}
        buttonClasses={logic("text-white bg-primary", "text-primary bg-white")}
        featuresCardClasses={logic("bg-white", "bg-color10")}
        centerPro={title == "Bussiness" && "customMQ3:order-last"}
      >
        {logic(
          <>
            <GenericButton
              content="Save $50 a year"
              classes={`p-3 rounded-lg text-sm font-semibold text-center text-white bg-primaryLight1 shadow-customBS1 row-start-2`}
            />
            <div className="w-customW10 h-customH3 rounded-full bg-primaryLight2 absolute top-[9.4rem] -z-10"></div>
          </>
        )}
      </SinglePlan>
    );
  });

  return (
    <ul className="list-none flex flex-wrap justify-around items-center gap-y-12">
      {mapPlans}
    </ul>
  );
}
