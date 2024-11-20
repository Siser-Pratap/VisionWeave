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
        className="block text-sm mx-2 sm:mx-2 font-medium text-white/70"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 mx-4 sm:mx-2 border-[2px] sm:border-[2px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-secondary outline-none block w-[90%]  sm:w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;