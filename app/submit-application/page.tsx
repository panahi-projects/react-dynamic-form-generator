import DynamicForm from "@/components/DynamicForm";
import formData from "@/data/formData.json";

const ApplicationsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <DynamicForm formData={formData[0]} />
    </div>
  );
};

export default ApplicationsPage;
