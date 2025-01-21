import FeaturesBenefitsPlans from "./FeaturesBenefitsPlans/FeaturesBenefitsPlans";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import Navigation from "./Landing/Navigation/Navigation";
import Ratings from "./Ratings/Ratings";

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <Ratings />
      <FeaturesBenefitsPlans />
      <Footer />
    </>
  );
}

export default App;
