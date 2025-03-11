import React from "react";

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  id,
  label,
  required,
  children,
}) => {
  return (
    <div className="field-container mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
};

export default FieldWrapper;
