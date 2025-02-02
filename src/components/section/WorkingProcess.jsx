import Heading from "../ui/Heading";
import Accordion from "../Accordion";
import { accordions } from "../../constants/constants";
import { useState } from "react";

const Accordions = () => {
   const [activeAccordion, setActiveAccordion] = useState(null);

   const handleActiveAccordion = (accordionNumber) => {
      setActiveAccordion((prevState) => (prevState === accordionNumber ? null : accordionNumber));
   };

   return (
      <div className="flex flex-col gap-5 md:gap-[30px]">
         {accordions.map((accordion, index) => (
            <Accordion number={accordion.number} title={accordion.title} explanation={accordion.explanation} onSelectAccordion={() => handleActiveAccordion(accordion.number)} isActive={activeAccordion === accordion.number} key={index} />
         ))}
      </div>
   );
};

const WorkingProcess = () => {
   return (
      <section className="mx-auto mb-[60px] px-5 md:max-xl:container lg:mb-[140px]">
         <div className="flex items-center max-lg:flex-col lg:mb-20 lg:gap-10">
            <div className="flex flex-col items-center">
               <Heading color="primary" className="py-2">
                  Our Working <span className="max-lg:hidden">Process</span>
               </Heading>
               <Heading color="primary" className="block py-2 lg:hidden">
                  Process
               </Heading>
            </div>
            <p className="paragraph max-lg:my-7 max-lg:text-center">
               Step-by-Step Guide to Achieving <br className="max-lg:hidden" /> Your Business Goals
            </p>
         </div>
         <Accordions />
      </section>
   );
};

export default WorkingProcess;
