import { useState } from "react";

import SectionLargestCards from "../../ReccuringCmp/SectionLargestCard";
import BillingDuration from "./BillingDuration";
import ChoosePlan from "./ChoosePlan";
import PlansHeading from "./PlansHeading";

export default function Plans() {
  let [toggle, setToggle] = useState(true);
  const handleBillingChange = e => {
    setToggle(!toggle);
  };
  return (
    <SectionLargestCards classes="py-8 2xl:pt-[8.53rem] lg:pb-[8.2rem] grid-rows-[auto_6.2rem_auto] customMQ3:grid-rows-[auto_6.2rem_43.5rem] grid-cols-[minmax(1rem,69.2rem)] gap-10">
      <PlansHeading />
      <BillingDuration
        toggle={toggle}
        handleBillingChange={handleBillingChange}
      />
      <ChoosePlan toggle={toggle} />
    </SectionLargestCards>
  );
}
