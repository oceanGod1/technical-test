import collaborationIcon from "../../assets/collaboration-teams-icon.png";
import analyticsIcon from "../../assets/daily-analytics-icon.png";
import cloudStorageIcon from "../../assets/cloud-storage-icon.png";
import BenefitsLeftCard from "../Benefits/BenefitsLeftCard";

import FeaturesSingleCard from "./FeaturesSingleCard";

const cardDetails = [
  {
    id: 1,
    image: collaborationIcon,
    content1: "Collaboration Teams",
    content2: "Here you can handle projects together with your team virtually",
  },
  {
    id: 2,
    image: cloudStorageIcon,
    content1: "Cloud Storage",
    content2:
      "No need to worry about storage because we provide storage up to 2TB",
  },
  {
    id: 3,
    image: analyticsIcon,
    content1: "Daily Analytics",
    content2:
      "We always provide useful information to make it easier for you every day",
  },
];

export default function FeatureVisualCards() {
  return (
    <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))]  gap-y-8 customMQ1:flex customMQ1:justify-between">
      {cardDetails.map(({ id, image, content1, content2 }) => {
        return (
          <FeaturesSingleCard
            key={id}
            image={image}
            content1={content1}
            content2={content2}
          />
        );
      })}
      <BenefitsLeftCard classes="customMQ2:hidden justify-self-center" />
    </div>
  );
}
