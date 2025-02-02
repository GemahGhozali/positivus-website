import Button from "../ui/Button";
import TrialImage from "../../assets/images/trial.png";

const Trial = () => {
   return (
      <section className="mx-auto mb-[60px] px-5 md:max-xl:container lg:mb-[140px] lg:py-[23px]">
         <div className="bg-light xs:p-[50px] relative grid grid-cols-1 gap-20 rounded-[45px] p-8 lg:grid-cols-2 lg:p-[60px]">
            <div>
               <h3 className="heading-3 font-bold">Let's make things happen</h3>
               <p className="paragraph my-5">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
               <Button color="dark" className="lg:w-auto">
                  Get your proposal
               </Button>
            </div>
            <img src={TrialImage} alt="trial-image" className="max-lg:hidden lg:absolute lg:right-[45px] lg:bottom-1/2 lg:translate-y-1/2 xl:right-[135px]" />
         </div>
      </section>
   );
};

export default Trial;
