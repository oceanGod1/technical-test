import publishingIcon from "../../assets/publishing-icon.png";
import analytics from "../../assets/analytics-icon.png";
import engagementIcon from "../../assets/engagement-icon.png";

import ListItem from "./ListItem";

const listItems = [
  {
    id: 1,
    image: publishingIcon,
    content1: "Publishing",
    content2:
      "Plan, collaborate, and publish contents that drive meaningful engagement and growth for your brand",
  },
  {
    id: 2,
    image: analytics,
    content1: "Analytics",
    content2: "Analyze your performance and create gorgeous reports",
  },
  {
    id: 3,
    image: engagementIcon,
    content1: "Engagement",
    content2: "Quickly navigate and engage with your audience",
  },
];

export default function RightCard() {
  return (
    <ul className=" w-11/12 py-8 list-none row-start-3 col-span-2 md:justify-self-end md:row-span-3 md:col-start-2 md:col-span-1 lg:py-0 grid content-center gap-6">
      {listItems.map(({ id, image, content1, content2 }) => (
        <ListItem
          key={id}
          image={image}
          content1={content1}
          content2={content2}
        />
      ))}
    </ul>
  );
}
