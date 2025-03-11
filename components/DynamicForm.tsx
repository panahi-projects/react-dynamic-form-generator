import React from "react";
import DynamicFormField from "./DynamicFormField";

interface FormProps {
  fields: {
    id: string;
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
  }[];
}

const DynamicForm: React.FC<FormProps> = ({ fields }) => {
  return (
    <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      {fields.map((field) => (
        <DynamicFormField key={field.id} {...field} />
      ))}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
