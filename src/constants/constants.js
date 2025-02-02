// SPONSOR IMAGES
import AmazonImage from "../assets/images/sponsor-1.png";
import DribbleImage from "../assets/images/sponsor-2.png";
import HubSpotImage from "../assets/images/sponsor-3.png";
import NotionImage from "../assets/images/sponsor-4.png";
import NetflixImage from "../assets/images/sponsor-5.png";
import ZoomImage from "../assets/images/sponsor-6.png";

// SERVICE IMAGES;
import Illustration_1 from "../assets/images/illustration-1.png";
import Illustration_2 from "../assets/images/illustration-2.png";
import Illustration_3 from "../assets/images/illustration-3.png";
import Illustration_4 from "../assets/images/illustration-4.png";
import Illustration_5 from "../assets/images/illustration-5.png";
import Illustration_6 from "../assets/images/illustration-6.png";

// TEAM MEMBER IMAGES
import TeamMember_1 from "../assets/images/team-member-1.jpg";
import TeamMember_2 from "../assets/images/team-member-2.jpg";
import TeamMember_3 from "../assets/images/team-member-3.jpg";
import TeamMember_4 from "../assets/images/team-member-4.jpg";
import TeamMember_5 from "../assets/images/team-member-5.jpg";
import TeamMember_6 from "../assets/images/team-member-6.jpg";

// SOCIAL MEDIA ICON SVG
import LinkedinSvg from "../components/svg/LinkedinSvg";
import FacebookSvg from "../components/svg/FacebookSvg";
import TwitterSvg from "../components/svg/TwitterSvg";

export const navlinks = [
   { name: "About Us", url: "#!" },
   { name: "Services", url: "#!" },
   { name: "Use Cases", url: "#!" },
   { name: "Pricing", url: "#!" },
   { name: "Blog", url: "#!" },
];

export const sponsors = [
   { image: AmazonImage, alt: "Amazon" },
   { image: DribbleImage, alt: "Dribble" },
   { image: HubSpotImage, alt: "Hubspot" },
   { image: NotionImage, alt: "Notion" },
   { image: NetflixImage, alt: "Netflix" },
   { image: ZoomImage, alt: "Zoom" },
];

export const services = [
   {
      headings: ["Search engine", "optimization"],
      image: Illustration_1,
      card: {
         backgroundColor: "light",
         headingColor: "primary",
      },
      link: {
         textColor: "dark",
         backgroundColor: "dark",
         iconColor: "primary",
         url: "#!",
      },
   },
   {
      headings: ["Pay-per-click", "advertising"],
      image: Illustration_2,
      card: {
         backgroundColor: "primary",
         headingColor: "light",
      },
      link: {
         textColor: "dark",
         backgroundColor: "dark",
         iconColor: "primary",
         url: "#!",
      },
   },
   {
      headings: ["Social Media", "Marketing"],
      image: Illustration_3,
      card: {
         backgroundColor: "dark",
         headingColor: "light",
      },
      link: {
         textColor: "light",
         backgroundColor: "light",
         iconColor: "dark",
         url: "#!",
      },
   },
   {
      headings: ["Email", "Marketing"],
      image: Illustration_4,
      card: {
         backgroundColor: "light",
         headingColor: "primary",
      },
      link: {
         textColor: "dark",
         backgroundColor: "dark",
         iconColor: "primary",
         url: "#!",
      },
   },
   {
      headings: ["Content", "Creation"],
      image: Illustration_5,
      card: {
         backgroundColor: "primary",
         headingColor: "light",
      },
      link: {
         textColor: "dark",
         backgroundColor: "dark",
         iconColor: "primary",
         url: "#!",
      },
   },
   {
      headings: ["Analytics and", "Tracking"],
      image: Illustration_6,
      card: {
         backgroundColor: "dark",
         headingColor: "primary",
      },
      link: {
         textColor: "light",
         backgroundColor: "light",
         iconColor: "dark",
         url: "#!",
      },
   },
];

export const caseStudies = [
   {
      explanation: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      url: "#!",
   },
   {
      explanation: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      url: "#!",
   },
   {
      explanation: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      url: "#!",
   },
];

export const accordions = [
   {
      number: "01",
      title: "Consultation",
      explanation: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
   },
   {
      number: "02",
      title: "Research and Strategy Development",
      explanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati explicabo voluptatibus ducimus nihil repudiandae voluptatum eveniet atque nobis aliquid itaque, cupiditate excepturi reiciendis accusamus eius at. Pariatur, culpa possimus!",
   },
   {
      number: "03",
      title: "Implementation",
      explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sunt. Necessitatibus quibusdam dolorum incidunt? Placeat nostrum, eum, quis sunt molestiae autem, repudiandae voluptate!",
   },
   {
      number: "04",
      title: "Monitoring and Optimization",
      explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni eligendi , excepturi odit in magnam suscipit? Laborum ipsa vitae veritatis molestias quibusdam tenetur.",
   },
   {
      number: "05",
      title: "Reporting and Communication",
      explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptates laborum possimus hic non tempore, quo id aperiam ducimus minima unde enim molestias itaque quam et odio ipsum, corporis veritatis!",
   },
   {
      number: "06",
      title: "Continual Improvement",
      explanation: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, id, vitae corrupti omnis ratione velit dicta odio minus dignissimos voluptatem tempora ipsum vel quis ex exercitationem.",
   },
];

export const team = [
   {
      name: "John Smith",
      role: "CEO and Founder",
      experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: TeamMember_1,
      linkedInURL: "#!",
   },
   {
      name: "Jane Doe",
      role: "Director of Operations",
      experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: TeamMember_2,
      linkedInURL: "#!",
   },
   {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: TeamMember_3,
      linkedInURL: "#!",
   },
   {
      name: "Emily Johnson",
      role: "PPC Manager",
      experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: TeamMember_4,
      linkedInURL: "#!",
   },
   {
      name: "Brian Williams",
      role: "Social Media Specialist",
      experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: TeamMember_5,
      linkedInURL: "#!",
   },
   {
      name: "Sarah Kim",
      role: "Content Creator",
      experience: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
      image: TeamMember_6,
      linkedInURL: "#!",
   },
];

export const testimonials = [
   {
      name: "John Smith",
      testimonial:
         "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
   },
   {
      name: "John Smith",
      testimonial:
         "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
   },
   {
      name: "John Smith",
      testimonial:
         "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
   },
   {
      name: "John Smith",
      testimonial:
         "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
   },
   {
      name: "John Smith",
      testimonial:
         "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
   },
];

export const footerContact = ["Email: info@positivus.com", "Phone: 555-567-8901", "Address: 1234 Main St", "Moonstone City, Stardust State 12345"];

export const footerSocialMedia = [
   { url: "#!", svg: LinkedinSvg },
   { url: "#!", svg: FacebookSvg },
   { url: "#!", svg: TwitterSvg },
];

// COLOR OBJECTS (FOR DYNAMIC CLASS)
export const backgroundColors = {
   primary: "bg-primary",
   dark: "bg-dark",
   light: "bg-light",
};

export const textColors = {
   primary: "text-primary",
   dark: "text-dark",
   light: "text-light",
   black: "text-black",
   white: "text-white",
};

export const fillColors = {
   primary: "fill-primary",
   dark: "fill-dark",
   light: "fill-light",
   black: "fill-black",
   white: "fill-white",
};

// PRIMITIVE UI COMPONENT STYLE
export const buttonStyle = {
   dark: "bg-dark text-light border border-dark",
   primary: "bg-primary text-dark border border-primary",
   transparent: "bg-transparent text-dark border border-dark",
};

export const headingStyle = {
   dark: "bg-dark text-white",
   light: "bg-light text-dark",
   primary: "bg-primary text-dark",
};

export const inputStyle = {
   transparent: "border border-white bg-transparent placeholder-white text-white",
   white: "border border-black bg-white placeholder-[#898989] text-black",
};
