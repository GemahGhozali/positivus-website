import PositivusSvg from "../svg/PositivusSvg";
import { textColors } from "../../constants/constants";

const Logo = ({ color, className }) => {
   return (
      <span className={`flex items-center gap-2 ${className || ""}`}>
         <a href="/">
            <PositivusSvg color={color} className="max-sm:size-6" />
         </a>
         <a href="/" className={`xs:max-sm:heading-3 heading-2 font-medium ${textColors[color] || ""}`}>
            Positivus
         </a>
      </span>
   );
};

export default Logo;
