import React from "react";

interface CheckboxFieldProps {
  id: string;
  label: string;
  options?: string[];
  required?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
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
      {options &&
        options.map((option) => (
          <label key={option} className="inline-flex items-center mt-1 mr-4">
            <input
              type="checkbox"
              name={id}
              value={option}
              required={required}
              className="form-checkbox"
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
    </div>
  );
};

export default CheckboxField;
