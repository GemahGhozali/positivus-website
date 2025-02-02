import ArrowSvg from "../svg/ArrowSvg";
import { backgroundColors, textColors } from "../../constants/constants";

const Link = ({ url, backgroundColor, iconColor, textColor, className }) => {
   return (
      <span className={`flex items-center gap-4 ${className || ""}`}>
         <a href={url} className={`${backgroundColors[backgroundColor]} xs:size-[41px] grid size-9 place-items-center rounded-full`}>
            <ArrowSvg color={iconColor} />
         </a>
         <a href={url} className={`${textColors[textColor]} heading-4 max-sm:hidden`}>
            Learn More
         </a>
      </span>
   );
};

export default Link;
