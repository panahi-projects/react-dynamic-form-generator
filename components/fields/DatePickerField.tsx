import React from "react";
import FieldWrapper from "../FieldWrapper";

interface DatePickerFieldProps {
  id: string;
  label: string;
  required?: boolean;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  id,
  label,
  required,
}) => {
  return (
    <FieldWrapper id={id} label={label} required={required}>
      <input
        id={id}
        type="date"
        required={required}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      />
    </FieldWrapper>
  );
};

export default DatePickerField;
