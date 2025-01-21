import MainNavigation from "./MainNavigation/MainNavigation";
import FeaturesBenefitsPlans from "./FeaturesBenefitsPlans/FeaturesBenefitsPlans";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import Ratings from "./Ratings/Ratings";

function App() {
  return (
    <>
      <Landing />
      <Ratings />
      <FeaturesBenefitsPlans />
      <Footer />
      <MainNavigation />
    </>
  );
}

export default App;
