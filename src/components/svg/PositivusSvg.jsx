import { fillColors } from "../../constants/constants";

const PositivusSvg = ({ color, className }) => {
   return (
      <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className={`${fillColors[color]} ${className || ""}`}>
         <g clipPath="url(#clip0_902_83)">
            <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" />
         </g>
         <defs>
            <clipPath id="clip0_902_83">
               <rect width="36" height="36" />
            </clipPath>
         </defs>
      </svg>
   );
};

export default PositivusSvg;
