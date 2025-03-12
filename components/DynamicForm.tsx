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
    <form onSubmit={handleSubmit}>
      {formData.fields.map((field: any) => (
        <DynamicFormField key={field.id} {...field} />
      ))}
      {/* <ButtonField title="Submit Application" type="button" /> */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary rounded-md text-white py-2 px-6 mt-4"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default DynamicForm;
