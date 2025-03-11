"use client";
import React, { createContext, useContext, useState } from "react";

// Define type for field values
type FormValues = Record<string, any>;

// Define type for context
interface FormContextType {
  values: FormValues;
  setValue: (fieldId: string, value: any) => void;
  validateField?: (fieldId: string) => boolean;
  validateForm?: () => boolean;
}

// Create Context
const FormContext = createContext<FormContextType | undefined>(undefined);

// FormProvider Component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [values, setValues] = useState<FormValues>({});

  // Function to update field values
  const setValue = (fieldId: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  // Basic validation (example: checking required fields)
  const validateField = (fieldId: string): boolean => {
    if (values[fieldId] === undefined || values[fieldId] === "") {
      return false;
    }
    return true;
  };

  const validateForm = (): boolean => {
    return Object.keys(values).every((key) => validateField(key));
  };

  return (
    <FormContext.Provider
      value={{ values, setValue, validateField, validateForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom Hook for accessing the Form Context
export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
