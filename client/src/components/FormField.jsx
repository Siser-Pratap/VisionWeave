import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2 ml-2">
      <label
        htmlFor={name}
        className="block text-sm mx-2 sm:mx-2 font-medium text-white/80"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-white/80 bg-inherit hover:border-secondary border-[1px]"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-inherit border-inherit mx-4 sm:mx-2 border-[0px] text-white/80 sm:border-[0px] hover:border-[1px] hover:border-secondary text-sm rounded-lg focus:ring-[#6469ff] focus:border-secondary outline-none block w-[90%]  sm:w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;