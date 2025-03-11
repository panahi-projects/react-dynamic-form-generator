"use client";
import { FormProvider, useForm } from "@/providers/FormProvider";
import DynamicFormField from "./DynamicFormField";

const DynamicForm: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <FormProvider>
      {" "}
      {/* ✅ Wrap everything in FormProvider */}
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
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
