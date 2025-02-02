const PlusSvg = ({ className }) => {
   return (
      <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" className={`fill-dark ${className || ""}`}>
         <path d="M9.6 25.08V15.36H0V9.72H9.6V0H15.48V9.72H25.08V15.36H15.48V25.08H9.6Z" />
      </svg>
   );
};

export default PlusSvg;
