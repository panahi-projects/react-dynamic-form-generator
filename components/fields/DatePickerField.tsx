import React from "react";

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
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type="date"
        required={required}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      />
    </div>
  );
};

export default DatePickerField;
