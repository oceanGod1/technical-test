import BenefitRightCard from "./Benefits/BenefitRightCard";
import Benefits from "./Benefits/Benefits";
import BenefitsLeftCard from "./Benefits/BenefitsLeftCard";
import Features from "./Features/Features";
import Plans from "./Plans/Plans";

export default function FeaturesBenefitsPlans() {
  return (
    <main className="bg-customBG3 relative before:content-[''] before:z-0 before:absolute before:w-full before:h-full before:bg-customBG4">
      <Features />
      <Benefits />
      <Plans />
    </main>
  );
}
