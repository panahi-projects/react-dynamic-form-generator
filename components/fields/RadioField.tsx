import React from "react";

interface RadioFieldProps {
  id: string;
  label: string;
  options: string[];
  required?: boolean;
}

const RadioField: React.FC<RadioFieldProps> = ({
  id,
  label,
  options,
  required,
}) => {
  return (
    <div className="mb-4">
      <p className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </p>
      {options.map((option) => (
        <label key={option} className="inline-flex items-center mt-1 mr-4">
          <input
            type="radio"
            name={id}
            value={option}
            required={required}
            className="form-radio"
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioField;
