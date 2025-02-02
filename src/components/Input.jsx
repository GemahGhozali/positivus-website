import { inputStyle } from "../constants/constants";

const Input = ({ color, type, label, placeholder, className }) => {
   return (
      <div className="*:block">
         {label && <label className="xs:text-base mb-[5px] text-sm">{label}</label>}
         <input type={type || "text"} className={`paragraph box-border w-full rounded-[14px] p-[18px] outline-hidden lg:px-[30px] lg:py-[18px] ${inputStyle[color]} ${className || ""}`} placeholder={placeholder} />
      </div>
   );
};

export default Input;
