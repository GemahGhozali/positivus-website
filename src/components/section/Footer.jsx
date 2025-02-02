import Input from "../Input";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import { navlinks, footerContact, footerSocialMedia } from "../../constants/constants";

const ContactAndSubscription = () => {
   return (
      <div className="flex max-lg:flex-col lg:mt-[66px] lg:justify-between lg:max-xl:*:grow">
         <div className="max-lg:text-center">
            <Heading color="primary" headingLevel="heading-4" className="mb-4 max-lg:mt-8 lg:mb-[7px]">
               Contact us:
            </Heading>
            <ul className="*:paragraph flex flex-col *:not-last:mt-5">
               {footerContact.map((contact, index) => (
                  <li key={index}>{contact}</li>
               ))}
            </ul>
         </div>
         <form className="flex gap-5 rounded-[14px] bg-[#292A32] p-6 max-xl:flex-col max-lg:my-8 lg:*:grow xl:items-center xl:px-10 xl:py-[58px]">
            <Input color="transparent" type="email" placeholder="Email" className="xl:px-[35px] xl:py-5" />
            <Button color="primary" className="xl:w-auto">
               Subscribe to news
            </Button>
         </form>
      </div>
   );
};

const SocialMedia = ({ className }) => {
   return (
      <div className={`*:nth-2:bg-dark flex justify-center gap-5 ${className || ""}`}>
         {footerSocialMedia.map((socialMedia, index) => (
            <a href={socialMedia.url} className="grid size-[30px] place-items-center rounded-full bg-white" key={index}>
               <socialMedia.svg />
            </a>
         ))}
      </div>
   );
};

const FooterHead = () => {
   return (
      <div className="flex items-center max-lg:flex-col lg:justify-between">
         <Logo color="white" />
         <nav className="*:paragraph mt-8 flex gap-4 *:text-center max-lg:flex-col lg:mt-0 xl:gap-10">
            {navlinks.map((link, index) => (
               <a href={link.url} className="decoration-1 underline-offset-2 hover:underline" key={index}>
                  {link.name}
               </a>
            ))}
         </nav>
         <SocialMedia className="hidden lg:flex" />
      </div>
   );
};

const Copyrights = () => {
   return (
      <>
         <hr className="my-8 lg:my-[50px]" />
         <div className="flex items-center max-lg:flex-col lg:gap-10">
            <p className="paragraph max-lg:mb-2">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#!" className="paragraph">
               Privacy Policy
            </a>
         </div>
      </>
   );
};

const Footer = () => {
   return (
      <footer className="mx-auto text-white lg:px-5 lg:max-xl:container">
         <div className="bg-dark p-5 pt-[55px] pb-8 sm:px-[60px] sm:pb-[50px] lg:rounded-t-[45px]">
            <FooterHead />
            <ContactAndSubscription />
            <SocialMedia className="lg:hidden" />
            <Copyrights />
         </div>
      </footer>
   );
};

export default Footer;
