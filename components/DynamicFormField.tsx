import React from "react";
import InputField from "./fields/InputField";
import DatePickerField from "./fields/DatePickerField";
import GroupField from "./fields/GroupField";
import SelectField from "./fields/SelectField";
import RadioField from "./fields/RadioField";
import CheckboxField from "./fields/CheckboxField";

import {
  BaseField,
  TextField as TextFieldType,
  DateField as DateFieldType,
  SelectField as SelectFieldType,
  RadioField as RadioFieldType,
  CheckboxField as CheckboxFieldType,
} from "@/interfaces";
import { useForm } from "@/providers/FormProvider";

// Define FieldProps as a union type of all field interfaces
type FieldProps =
  | TextFieldType
  | DateFieldType
  | SelectFieldType
  | RadioFieldType
  | CheckboxFieldType
  | BaseField;

const DynamicFormField: React.FC<FieldProps> = (props) => {
  const { shouldShowField } = useForm();

  if (!shouldShowField(props)) return null;

  switch (props.type) {
    case "group":
      return <GroupField {...props} />;
    case "text":
    case "number":
    case "email":
      return <InputField {...props} type={props.type} />;
    case "date":
      return <DatePickerField {...(props as DateFieldType)} />;
    case "select":
      return <SelectField {...(props as SelectFieldType)} />;
    case "radio":
      return <RadioField {...(props as RadioFieldType)} />;
    case "checkbox":
      return <CheckboxField {...(props as CheckboxFieldType)} />;
    default:
      return null;
  }
};

export default DynamicFormField;
