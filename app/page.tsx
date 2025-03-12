import DynamicForm from "@/components/DynamicForm";
import formData from "@/data/formData.json";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form</h1>
      <DynamicForm formData={formData[1]} />
    </div>
  );
}
