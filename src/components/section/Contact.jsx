import Input from "../Input";
import RadioButton from "../RadioButton";
import TextArea from "../Textarea";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import ContactImage from "../../assets/images/contact.png";

const ContactForm = () => {
   return (
      <>
         <div className="bg-light relative mb-8 grid grid-cols-1 rounded-[45px] p-7 lg:grid-cols-2 lg:p-[45px] xl:ps-[100px] xl:pe-0 xl:pt-[60px] xl:pb-[80px]">
            <form id="formMessage">
               <div className="mb-7 flex max-sm:justify-around sm:gap-[35px] lg:mb-10">
                  <RadioButton id="sayHi" label="Say Hi" defaultChecked={true} />
                  <RadioButton id="quote" label="Get a Quote" />
               </div>
               <div className="flex flex-col gap-[25px] lg:mb-10">
                  <Input color="white" type="text" label="Name" placeholder="Name" />
                  <Input color="white" type="email" label="Email*" placeholder="Email" />
                  <TextArea label="Message" placeholder="Message" />
               </div>
               <Button color="dark" className="hidden lg:block">
                  Send Message
               </Button>
            </form>
            <img src={ContactImage} alt="contact-image" className="absolute top-1/2 right-0 hidden h-[600px] -translate-y-1/2 lg:block" />
         </div>
         <Button color="dark" className="block lg:hidden">
            Send Message
         </Button>
      </>
   );
};

const Contact = () => {
   return (
      <section className="mx-auto mb-[90px] px-5 md:max-xl:container lg:mb-[140px]">
         <div className="flex flex-col items-center lg:mb-20 lg:flex-row lg:gap-10">
            <Heading color="primary" headingLevel="heading-2" className="py-2">
               Contact Us
            </Heading>
            <p className="paragraph max-lg:my-7 max-lg:text-center">
               Connect with Us: <br className="max-lg:hidden" />
               Let's Discuss Your Digital Marketing Needs
            </p>
         </div>
         <ContactForm />
      </section>
   );
};

export default Contact;
