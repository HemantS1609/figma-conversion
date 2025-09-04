import FAQSection from "./components/FAQSection/FAQSection";
import FeatureSlider from "./components/FeatureSlider/FeatureSlider";
import FloatingBar from "./components/FloatingBar/FloatingBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import LeadCRMSection from "./components/LeadCRMSection/LeadCRMSection";
import LinkedInRevenueSection from "./components/LinkedInRevenueSection/LinkedInRevenueSection";
import LinkedInSolutions from "./components/LinkedInSolutions/LinkedInSolutions";
import Testimonials from "./components/Testimonials/Testimonials";
import WithWithoutLeadCRM from "./components/WithWithoutLeadCRM/WithWithoutLeadCRM";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <div id="wrapper-for-floating">
        <FeatureSlider id="feature-slider" />
        <WithWithoutLeadCRM id="with-without-leadcrm" />
        <HowItWorks id="how-it-works" />
        <Testimonials id="testimonials" />
        <LinkedInSolutions id="linkedin-solutions" />
        <LeadCRMSection id="leadcrm-section" />
        <LinkedInRevenueSection id="linkedin-revenue-section" />
        <FloatingBar />
      </div>
      <Footer id="footer-comp" />
    </>
  );
}

export default App;
