import Benefits from "./Benefits/Benefits";
import Features from "./Features/Features";
import Plans from "./Plans/Plans";

export default function FeaturesBenefitsPlans() {
  return (
    <main className="-z-10 bg-customBG3 relative before:content-[''] before:-z-30 before:absolute before:w-full before:h-full before:bg-customBG4">
      <Features />
      <Benefits />
      <Plans />
    </main>
  );
}
