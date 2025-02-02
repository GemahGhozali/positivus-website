import Heading from "../ui/Heading";
import Link from "../ui/Link";
import Card from "../Card";
import { services, backgroundColors } from "../../constants/constants";

const ServiceCard = ({ service }) => {
   return (
      <Card className={`${backgroundColors[service.card.backgroundColor]} xs:p-[50px] relative grid grid-cols-1 gap-6 rounded-[45px] border border-black p-8 shadow-[0_6px_0_0] sm:max-lg:h-[320px] sm:max-lg:grid-cols-2 xl:h-[310px] xl:grid-cols-2`}>
         <div className="*:block *:w-fit">
            {service.headings.map((heading, headingIndex) => (
               <Heading color={service.card.headingColor} headingLevel="heading-3" key={headingIndex}>
                  {heading}
               </Heading>
            ))}
         </div>
         <img src={service.image} className="xs:max-sm:w-[170px] max-xs:w-[130px] ms-auto self-end lg:max-xl:w-[180px] xl:self-center" />

         <Link url={service.link.url} backgroundColor={service.link.backgroundColor} iconColor={service.link.iconColor} textColor={service.link.textColor} className="xs:bottom-[50px] xs:left-[50px] absolute bottom-8 left-8" />
      </Card>
   );
};

const ServiceCards = () => {
   return (
      <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-2">
         {services.map((serviceData, serviceIndex) => (
            <ServiceCard service={serviceData} key={serviceIndex} />
         ))}
      </div>
   );
};

const Services = () => {
   return (
      <section className="mx-auto mb-[60px] px-5 md:max-xl:container lg:mb-[100px]">
         <div className="flex items-center max-lg:flex-col lg:mb-20 lg:gap-10">
            <Heading color="primary" className="py-2">
               Services
            </Heading>
            <p className="paragraph max-lg:my-7 max-lg:text-center">
               At our digital marketing agency, we offer a range of services to <br className="max-lg:hidden" />
               help businesses grow and succeed online. These services include:
            </p>
         </div>
         <ServiceCards />
      </section>
   );
};

export default Services;
