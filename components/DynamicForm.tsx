"use client";
import { FormProvider, useForm } from "@/providers/FormProvider";
import DynamicFormField from "./DynamicFormField";

const DynamicForm: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <FormProvider>
      <FormContent formData={formData} />
    </FormProvider>
  );
};

const FormContent: React.FC<{ formData: any }> = ({ formData }) => {
  const { values, validateForm } = useForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm && validateForm()) {
      console.log("Form Submitted:", values);
    } else {
      console.log("Validation Failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12">
      {formData.fields.map((field: any) => (
        <DynamicFormField key={field.id} {...field} />
      ))}
      <div className="flex justify-end mt-4">
        <div className="bg-gray-200 sm:bg-transparent fixed bottom-0 left-0 right-0 py-4 sm:relative sm:mt-0 sm:bottom-auto sm:left-auto sm:right-auto lg:px-0 px-4">
          <button
            type="submit"
            className="bg-primary rounded-md text-white py-2 px-6 w-full sm:w-auto sm:mx-0"
          >
            Submit Application
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicForm;
