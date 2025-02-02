const TextArea = ({ label, placeholder }) => {
   return (
      <div className="*:block">
         {label && <label className="xs:text-base mb-2 text-sm">{label}*</label>}
         <textarea className="paragraph w-full resize-none rounded-[14px] border border-black bg-white p-[18px] outline-hidden" placeholder={placeholder} rows="5"></textarea>
      </div>
   );
};

export default TextArea;
