interface BaseField {
  id: string;
  label: string;
  required?: boolean;
  type: string;
}

interface TextField extends BaseField {
  type: "text";
}

interface NumberField extends BaseField {
  type: "number";
  validation?: {
    min?: number;
    max?: number;
  };
}

interface DateField extends BaseField {
  type: "date";
}

interface SelectField extends BaseField {
  type: "select";
  options: string[];
  dynamicOptions?: {
    dependsOn: string;
    endpoint: string;
    method: string;
  };
}

interface RadioField extends BaseField {
  type: "radio";
  options: string[];
}

interface CheckboxField extends BaseField {
  type: "checkbox";
  options: string[];
}

interface GroupField extends BaseField {
  type: "group";
  fields: FormField[];
}

interface VisibilityCondition {
  dependsOn: string;
  condition: "equals";
  value: string;
}

interface ConditionalField extends BaseField {
  visibility?: VisibilityCondition;
}

type FormField =
  | TextField
  | NumberField
  | DateField
  | SelectField
  | RadioField
  | CheckboxField
  | GroupField
  | ConditionalField;
