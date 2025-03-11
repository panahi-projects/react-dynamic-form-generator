import React from "react";
import DynamicFormField from "../DynamicFormField";

interface GroupFieldProps {
  id: string;
  label: string;
  fields?: any[];
}

const GroupField: React.FC<GroupFieldProps> = ({ id, label, fields }) => {
  return (
    <fieldset className="mb-6 border border-gray-300 p-4 rounded-lg">
      <legend className="text-lg font-semibold">{label}</legend>
      {fields &&
        fields.map((field) => <DynamicFormField key={field.id} {...field} />)}
    </fieldset>
  );
};

export default GroupField;
