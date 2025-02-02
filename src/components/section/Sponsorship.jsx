import { sponsors } from "../../constants/constants";

const LogoAnimation = ({ logoList, direction, className }) => {
   const animateDirection = {
      left: "max-lg:animate-scroll-left",
      right: "max-lg:animate-scroll-right",
   };

   return (
      <div className={`group-hover:pause-animation flex *:max-w-none *:cursor-pointer *:duration-500 [&>img]:grayscale [&>img]:hover:grayscale-0 ${animateDirection[direction]} ${className}`}>
         {logoList.map((logo, index) => (
            <img src={logo.image} alt={logo.alt} key={index} />
         ))}
      </div>
   );
};

const InfiniteLogoScroll = () => {
   return (
      <>
         {/* TABLET TO DEKSTOP */}
         <div className="group hidden space-x-24 min-[450px]:flex">
            <LogoAnimation logoList={sponsors} direction="left" className="max-lg:space-x-24 lg:mx-0 lg:w-full lg:justify-between" />
            <LogoAnimation logoList={sponsors} direction="left" className="space-x-24 lg:hidden" />
         </div>

         {/* MOBILE */}
         <div className="min-[450px]:hidden">
            <div className="group mb-4 flex justify-end space-x-10">
               <LogoAnimation logoList={sponsors.slice(0, 3)} direction="right" className="space-x-10" />
               <LogoAnimation logoList={sponsors.slice(0, 3)} direction="right" className="space-x-10" />
            </div>
            <div className="group flex space-x-10">
               <LogoAnimation logoList={sponsors.slice(3)} direction="left" className="space-x-10" />
               <LogoAnimation logoList={sponsors.slice(3)} direction="left" className="space-x-10" />
            </div>
         </div>
      </>
   );
};

const Sponsorship = () => {
   return (
      <section className="mx-auto mb-[60px] overflow-hidden px-5 lg:mb-[140px] lg:max-xl:container">
         <InfiniteLogoScroll />
      </section>
   );
};

export default Sponsorship;
