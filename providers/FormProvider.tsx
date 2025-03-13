import { useState, createContext, useContext } from "react";

interface FormContextType {
  values: Record<string, any>;
  errors: Record<string, string>;
  setValue: (field: string, value: any) => void;
  validateField: (field: string, value: any) => void;
  validateForm: (formFields: any[]) => boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setValue = (field: string, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const validateField = (field: string, value: any) => {
    let errorMessage = "";

    if (typeof value === "string" && value.trim() === "") {
      errorMessage = "This field is required.";
    } else if (Array.isArray(value) && value.length === 0) {
      errorMessage = "At least one option must be selected.";
    }

    setErrors((prev) => {
      if (errorMessage) {
        return { ...prev, [field]: errorMessage };
      } else {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      }
    });
  };

  const validateForm = (formFields: any[]) => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    const validateFieldRecursive = (fields: any[]) => {
      fields.forEach((field) => {
        if (field.type === "group" && field.fields) {
          validateFieldRecursive(field.fields);
        } else if (
          field.required &&
          (!values[field.id] || values[field.id].length === 0)
        ) {
          newErrors[field.id] = "This field is required.";
          isValid = false;
        }
      });
    };

    validateFieldRecursive(formFields);

    setErrors(newErrors);
    return isValid;
  };

  return (
    <FormContext.Provider
      value={{ values, errors, setValue, validateField, validateForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
