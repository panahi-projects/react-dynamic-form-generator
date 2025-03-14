import React, { useEffect, useState } from "react";
import FieldWrapper from "../FieldWrapper";
import { SelectField as SelectFieldType } from "@/interfaces";
import { useForm } from "@/providers/FormProvider";
import useFetch from "@/hooks/useFetch";

const SelectField: React.FC<SelectFieldType> = ({
  id,
  label,
  options,
  required,
}) => {
  const { values, setValue, errors, validateField, dynamicOptions } = useForm();
  const [dynamicValues, setDynamicValues] = useState<string[]>(
    dynamicOptions[id] || options || []
  );

  useEffect(() => {
    console.log("dynamicOptions >>>", dynamicOptions, id);
    if (dynamicOptions[id]) {
      setDynamicValues(Object.values(dynamicOptions[id])?.[1] || options || []);
    }
  }, [dynamicOptions]);
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
        {dynamicValues &&
          dynamicValues?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </FieldWrapper>
  );
};

export default SelectField;
