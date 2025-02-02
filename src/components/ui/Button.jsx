import { buttonStyle } from "../../constants/constants";

const Button = ({ color, className, children }) => {
   return <button className={`heading-4 box-border w-full rounded-[14px] px-[35px] py-5 ${buttonStyle[color] || ""} ${className || ""}`}>{children}</button>;
};

export default Button;
