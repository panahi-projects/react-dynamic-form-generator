import React from "react";
import DynamicFormField from "../DynamicFormField";

interface GroupFieldProps {
  id: string;
  label: string;
  fields?: any[];
}

const GroupField: React.FC<GroupFieldProps> = ({ id, label, fields }) => {
  return (
    <fieldset className="bg-gray-50 mb-6 border border-gray-200 p-4 rounded-lg shadow-sm">
      <legend className="text-lg font-semibold px-2">{label}</legend>
      {fields &&
        fields.map((field) => <DynamicFormField key={field.id} {...field} />)}
    </fieldset>
  );
};

export default GroupField;
