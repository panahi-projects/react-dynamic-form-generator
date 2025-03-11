import React from "react";

interface FieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

const DynamicFormField: React.FC<FieldProps> = ({
  id,
  label,
  type,
  required,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      />
    </div>
  );
};

export default DynamicFormField;
