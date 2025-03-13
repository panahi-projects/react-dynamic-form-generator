import React from "react";
import FieldWrapper from "../FieldWrapper";
import { SelectField as SelectFieldType } from "@/interfaces"; // Adjust path if needed
import { useForm } from "@/providers/FormProvider";

const SelectField: React.FC<SelectFieldType> = ({
  id,
  label,
  options,
  required,
}) => {
  const { values, setValue, errors, validateField } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(id, e.target.value);
    validateField(id, e.target.value);
  };

  return (
    <FieldWrapper id={id} label={label} required={required} error={errors[id]}>
      <select
        id={id}
        value={values[id] || ""}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      >
        <option value="" disabled>
          Select an option
        </option>
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
