import React from "react";
import FieldWrapper from "../FieldWrapper";
import { useForm } from "@/providers/FormProvider";
import { DateField } from "@/interfaces";

const DatePickerField: React.FC<DateField> = ({ id, label, required }) => {
  const { values, setValue } = useForm(); // Access form context

  return (
    <FieldWrapper id={id} label={label} required={required}>
      <input
        id={id}
        type="date"
        required={required}
        value={values[id] || ""}
        onChange={(e) => setValue(id, e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      />
    </FieldWrapper>
  );
};

export default DatePickerField;
