import Card from "../Card";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import LinkedinSvg from "../svg/LinkedinSvg";
import { team } from "../../constants/constants";

const TeamMemberPicture = ({ image }) => {
   return (
      <div className="relative w-fit ps-2 pt-[5px]">
         <img src={image} className="mask-image max-xs:size-24 absolute top-0 left-0 z-10 shadow-sm" />
         <div className="mask-image bg-dark max-xs:size-24 size-[98px]"></div>
      </div>
   );
};

const TeamCard = ({ member }) => {
   return (
      <Card className="bg-light xs:px-[35px] xs:py-10 rounded-[45px] border border-black p-7 shadow-[0_6px_0_0]">
         <div className="relative flex items-end gap-3 sm:gap-5">
            <TeamMemberPicture image={member.image} />
            <span>
               <h4 className="heading-4 font-medium">{member.name}</h4>
               <p className="paragraph">{member.role}</p>
            </span>
            <a href={member.linkedInURL} className="absolute top-0 right-0 grid size-[34px] place-items-center rounded-full bg-black">
               <LinkedinSvg color="primary" />
            </a>
         </div>
         <hr className="my-7 border-t border-black" />
         <p className="paragraph">{member.experience}</p>
      </Card>
   );
};

const TeamCards = () => {
   return (
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">
         {team.map((member, index) => (
            <TeamCard member={member} key={index} />
         ))}
      </div>
   );
};

const Team = () => {
   return (
      <section className="mx-auto mb-[60px] px-5 md:max-xl:container lg:mb-[100px]">
         <div className="flex items-center max-lg:flex-col lg:mb-20 lg:gap-10">
            <Heading color="primary" headingLevel="heading-2" extraStyle="py-2">
               Team
            </Heading>
            <p className="paragraph max-lg:my-7 max-lg:text-center">
               Meet the skilled and experienced team behind our <br className="max-lg:hidden" /> successful digital marketing strategies
            </p>
         </div>
         <TeamCards />
         <div className="mt-10 flex justify-end">
            <Button color="dark" className="md:max-w-[269px]">
               See all team
            </Button>
         </div>
      </section>
   );
};

export default Team;
