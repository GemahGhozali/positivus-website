import { headingStyle } from "../../constants/constants";

const Heading = ({ color, headingLevel, className, children }) => {
   return <h1 className={`inline-block rounded-[7px] px-[7px] py-1 font-medium ${headingStyle[color] || ""} ${headingLevel || "heading-2"} ${className || ""}`}>{children}</h1>;
};

export default Heading;
