const RadioButton = ({ id, label, defaultChecked }) => {
   return (
      <div className="xs:gap-3.5 flex items-center gap-2">
         <div className="grid place-items-center">
            <input type="radio" id={id} name="formMessage" className="peer col-start-1 row-start-1 size-7 shrink-0 cursor-pointer appearance-none rounded-full border border-black" defaultChecked={defaultChecked} />
            <div className="peer-checked:bg-primary pointer-events-none col-start-1 row-start-1 size-4 rounded-full"></div>
         </div>
         <label htmlFor={id} className="paragraph">
            {label}
         </label>
      </div>
   );
};

export default RadioButton;
