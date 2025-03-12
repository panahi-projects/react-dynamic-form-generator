import React from "react";
import FieldWrapper from "../FieldWrapper";

interface SelectFieldProps {
  id: string;
  label: string;
  options?: string[];
  required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  options,
  required,
}) => {
  return (
    <FieldWrapper id={id} label={label} required={required}>
      <select
        id={id}
        required={required}
        className="mt-1 bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      >
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </FieldWrapper>
  );
};

export default SelectField;
