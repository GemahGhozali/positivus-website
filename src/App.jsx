import "./index.css";
import Header from "./components/section/Header";
import Hero from "./components/section/Hero";
import Sponsorship from "./components/section/Sponsorship";
import Services from "./components/section/Services";
import Trial from "./components/section/Trial";
import CaseStudies from "./components/section/CaseStudies";
import WorkingProcess from "./components/section/WorkingProcess";
import Team from "./components/section/Team";
import Testimonials from "./components/section/Testimonials";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

const App = () => {
   return (
      <>
         <Header />
         <Hero />
         <Sponsorship />
         <Services />
         <Trial />
         <CaseStudies />
         <WorkingProcess />
         <Team />
         <Testimonials />
         <Contact />
         <Footer />
      </>
   );
};

export default App;
