import Card from "../Card";
import Heading from "../ui/Heading";
import ArrowSvg from "../svg/ArrowSvg";
import { caseStudies } from "../../constants/constants";

const SliderItem = ({ anchorURL, caseStudyExplanation }) => {
   return (
      <Card className="bg-dark xs:p-[45px] h-full p-8 max-lg:rounded-[45px] lg:py-0 xl:px-[60px]">
         <p className="paragraph mb-5 text-white">{caseStudyExplanation}</p>
         <a href={anchorURL} className="heading-4 text-primary flex gap-2 font-medium">
            Learn more
            <ArrowSvg color="primary" />
         </a>
      </Card>
   );
};

const CardSlider = () => {
   return (
      <div className="lg:bg-dark hide-scrollbar grid snap-x grid-flow-col overflow-x-scroll *:snap-center max-lg:auto-cols-[63%] max-lg:gap-5 max-lg:px-5 max-sm:auto-cols-[90%] lg:rounded-[45px] lg:py-[45px] lg:*:even:border-x-2 lg:*:even:border-x-white xl:py-[70px]">
         {caseStudies.map((caseStudy, index) => (
            <SliderItem anchorURL={caseStudy.url} caseStudyExplanation={caseStudy.explanation} key={index} />
         ))}
      </div>
   );
};

const CaseStudies = () => {
   return (
      <section className="mb-[60px] lg:mx-auto lg:mb-[140px] lg:px-5 lg:max-xl:container">
         <div className="flex items-center max-lg:container max-lg:mx-auto max-lg:flex-col max-lg:px-5 lg:mb-20 lg:gap-10">
            <Heading color="primary" headingLevel="heading-2" extraStyle="py-2">
               Case Studies
            </Heading>
            <p className="paragraph max-lg:my-7 max-lg:text-center">
               Explore Real-Life Examples of Our Proven Digital Marketing <br className="max-lg:hidden" />
               Success through Our Case Studies
            </p>
         </div>
         <CardSlider />
      </section>
   );
};

export default CaseStudies;
