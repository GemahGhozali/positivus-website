import HeroImage from "../../assets/images/hero.png";
import Button from "../ui/Button";

const Hero = () => {
   return (
      <section className="max-xs:mt-14 xs:max-xl:mt-[72px] mx-auto mb-[60px] grid grid-cols-1 px-5 pt-8 max-xl:items-center md:max-xl:container lg:mb-[70px] lg:grid-cols-2 lg:pt-[54px] xl:gap-10">
         <div>
            <h1 className="heading-1 font-medium">Navigating the digital landscape for success</h1>
            <img src={HeroImage} alt="hero-image" className="mt-3 w-full lg:hidden" />
            <p className="paragraph my-[35px] xl:pe-32">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <Button color="dark" className="lg:w-auto">
               Book a consultation
            </Button>
         </div>
         <img src={HeroImage} alt="hero-image" className="hidden lg:block lg:w-full" />
      </section>
   );
};

export default Hero;
