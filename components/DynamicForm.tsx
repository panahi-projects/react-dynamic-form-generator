"use client";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "@/providers/FormProvider";
import DynamicFormField from "./DynamicFormField";
import usePost from "@/hooks/usePost";
import { useEffect } from "react";

const DynamicForm: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <FormProvider formSchema={formData}>
      <FormContent formData={formData} />
    </FormProvider>
  );
};

const FormContent: React.FC<{ formData: any }> = ({ formData }) => {
  const router = useRouter();
  const { values, validateForm } = useForm();
  const { data, loading, error, postData } = usePost(
    "/api/insurance/forms/submit"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm(formData.fields);

    if (isValid) {
      await postData(values);
    }
  };
  useEffect(() => {
    if (data) {
      router.push("/submissions");
    }
  }, [data, router]);

  return (
    <form onSubmit={handleSubmit} className="mb-12 relative">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        </div>
      )}
      {formData.fields.map((field: any) => (
        <DynamicFormField key={field.id} {...field} />
      ))}
      <div className="flex justify-end mt-4">
        <div className="bg-gray-200 sm:bg-transparent fixed bottom-0 left-0 right-0 py-4 sm:relative sm:mt-0 sm:bottom-auto sm:left-auto sm:right-auto lg:px-0 px-4">
          <button
            type="submit"
            className="bg-primary rounded-md text-white py-2 px-6 w-full sm:w-auto sm:mx-0"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default DynamicForm;
