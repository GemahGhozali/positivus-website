import Heading from "../ui/Heading";
import ArrowRightSvg from "../svg/ArrowRightSvg";
import ArrowLeftSvg from "../svg/ArrowLeftSvg";
import PositivusSvg from "../svg/PositivusSvg";
import { testimonials } from "../../constants/constants";
import { useRef } from "react";

// REACT SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextButton = ({ onClick }) => {
   return (
      <button onClick={onClick}>
         <ArrowRightSvg />
      </button>
   );
};

const PrevButton = ({ onClick }) => {
   return (
      <button onClick={onClick}>
         <ArrowLeftSvg />
      </button>
   );
};

const CarouselItem = ({ clientName, clientTestimonial }) => {
   return (
      <>
         <p className="bg-dark paragraph border-primary xs:p-7 before:bg-dark before:border-primary relative rounded-[35px] border p-6 text-white before:absolute before:-bottom-[1.2rem] before:left-10 before:size-9 before:rotate-45 before:border-e before:border-b before:content-[''] lg:rounded-[45px] lg:px-[52px] lg:py-12 lg:before:-bottom-[1.1rem]">"{clientTestimonial}"</p>
         <div className="mt-12 flex">
            <span className="xs:ms-16 ms-6">
               <h4 className="heading-4 text-primary font-medium">{clientName}</h4>
               <p className="paragraph text-white">Marketing Director at XYZ Corp</p>
            </span>
         </div>
      </>
   );
};

const Carousel = () => {
   const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "292px",
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               centerPadding: "240px",
            },
         },
         {
            breakpoint: 1024,
            settings: {
               centerPadding: "0px",
            },
         },
      ],
      customPaging: () => (
         <div>
            <PositivusSvg color="white" className="xs:size-[14px] size-[12px]" />
         </div>
      ),
      appendDots: (dots) => <ul>{dots}</ul>,
   };

   const slider = useRef(null);

   return (
      <div className="bg-dark xs:p-7 xs:pb-14 overflow-hidden rounded-[45px] p-5 pb-8 lg:px-0 lg:pt-[84px] lg:pb-[68px]" id="testimonialsCarousel">
         <Slider ref={slider} {...settings}>
            {testimonials.map((client, index) => (
               <CarouselItem clientName={client.name} clientTestimonial={client.testimonial} key={index} />
            ))}
         </Slider>
         <div className="mx-auto flex max-w-[564px] justify-between *:relative *:z-50">
            <PrevButton onClick={() => slider?.current?.slickPrev()} />
            <NextButton onClick={() => slider?.current?.slickNext()} />
         </div>
      </div>
   );
};

const Testimonials = () => {
   return (
      <section className="mx-auto mb-[60px] px-5 md:max-xl:container lg:mb-[140px]">
         <div className="flex items-center max-lg:flex-col lg:mb-20 lg:gap-10">
            <Heading color="primary" className="py-2">
               Testimonials
            </Heading>
            <p className="paragraph max-lg:my-7 max-lg:text-center">
               Hear from Our Satisfied Clients: Read Our Testimonials <br className="max-lg:hidden" /> to Learn More about Our Digital Marketing Services
            </p>
         </div>
         <Carousel />
      </section>
   );
};

export default Testimonials;
