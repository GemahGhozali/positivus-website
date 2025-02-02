import PlusSvg from "./svg/PlusSvg";
import MinusSvg from "./svg/MinusSvg";

const AccordionToggler = ({ onClick, isActive }) => {
   return (
      <button onClick={onClick} className="bg-light xs:size-11 ms-auto grid size-8 shrink-0 place-items-center rounded-full border border-black md:size-[58px]">
         {isActive ? <MinusSvg className="size-4 md:size-6" /> : <PlusSvg className="size-4 md:size-6" />}
      </button>
   );
};

const Accordion = ({ number, title, explanation, onSelectAccordion, isActive }) => {
   const accordionDescription = (
      <>
         <hr className="my-6 border-t border-black md:my-[30px]" />
         <p className="paragraph box-border text-start">{explanation}</p>
      </>
   );

   return (
      <div className={`xs:p-7 rounded-[45px] border border-black p-6 shadow-[0_6px_0_0] md:px-[60px] md:py-[41px] ${isActive ? "bg-primary" : "bg-light"}`}>
         <div className="flex items-center">
            <h1 className="heading-3 md:heading-1 font-medium">{number}</h1>
            <h3 className="heading-4 md:heading-3 ms-[25px] me-2 text-start font-medium">{title}</h3>
            <AccordionToggler onClick={onSelectAccordion} isActive={isActive} />
         </div>
         {isActive ? accordionDescription : null}
      </div>
   );
};

export default Accordion;
