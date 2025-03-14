export interface BaseField {
  id: string;
  label: string;
  required?: boolean;
  type: string;
  visibility?: {
    dependsOn: string;
    condition: string;
    value: string;
  };
}

export interface TextField extends BaseField {
  type: "text" | "number" | "email";
  validation?: {
    min?: number;
    max?: number;
  };
}

export interface DateField extends BaseField {
  type: "date";
}

export interface SelectField extends BaseField {
  type: "select";
  options: string[];
  dynamicOptions?: {
    dependsOn: string;
    endpoint: string;
    method: string;
  };
}

export interface RadioField extends BaseField {
  type: "radio";
  options: string[];
}

export interface CheckboxField extends BaseField {
  type: "checkbox";
  options: string[];
}

export interface GroupField extends BaseField {
  type: "group";
  fields: FormField[];
}

export interface VisibilityCondition {
  dependsOn: string;
  condition: "equals";
  value: string;
}

export interface ConditionalField extends BaseField {
  visibility?: VisibilityCondition;
}

export type FormField =
  | TextField
  | DateField
  | SelectField
  | RadioField
  | CheckboxField
  | GroupField
  | ConditionalField;
