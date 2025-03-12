import React from "react";
import FieldWrapper from "../FieldWrapper";
import { RadioField as RadioFieldType } from "@/interfaces";
import { useForm } from "@/providers/FormProvider";

const RadioField: React.FC<RadioFieldType> = ({
  id,
  label,
  options,
  required,
}) => {
  const { values, setValue } = useForm();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(id, event.target.value);
  };

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
              checked={values[id] === option}
              onChange={handleChange}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
    </FieldWrapper>
  );
};

export default RadioField;
