import DynamicForm from "@/components/DynamicForm";
import formData from "@/data/formData.json";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form</h1>
      <DynamicForm fields={formData[0]?.fields} />
    </div>
  );
}
