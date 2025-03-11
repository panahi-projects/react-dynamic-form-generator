import React from "react";
import InputField from "./fields/InputField";
import DatePickerField from "./fields/DatePickerField";
import GroupField from "./fields/GroupField";
import SelectField from "./fields/SelectField";
import RadioField from "./fields/RadioField";
import CheckboxField from "./fields/CheckboxField";

interface FieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  fields?: any[];
}

const DynamicFormField: React.FC<FieldProps> = (props) => {
  switch (props.type) {
    case "group":
      return <GroupField {...props} />;
    case "text":
    case "number":
      return <InputField {...props} type={props.type} />;
    case "date":
      return <DatePickerField {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "radio":
      return <RadioField {...props} />;
    case "checkbox":
      return <CheckboxField {...props} />;
    default:
      return null;
  }
};

export default DynamicFormField;
