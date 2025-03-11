import React from "react";
import FieldWrapper from "../FieldWrapper";

interface RadioFieldProps {
  id: string;
  label: string;
  options?: string[];
  required?: boolean;
}

const RadioField: React.FC<RadioFieldProps> = ({
  id,
  label,
  options,
  required,
}) => {
  return (
    <FieldWrapper id={id} label={label} required={required}>
      {options &&
        options.map((option) => (
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
    </FieldWrapper>
  );
};

export default RadioField;
