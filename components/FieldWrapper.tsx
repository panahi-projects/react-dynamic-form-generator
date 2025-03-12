import React from "react";

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string; // Add error prop to accept error messages
  children: React.ReactNode;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  id,
  label,
  required,
  error,
  children,
}) => {
  return (
    <div className="field-container mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}{" "}
    </div>
  );
};

export default FieldWrapper;
