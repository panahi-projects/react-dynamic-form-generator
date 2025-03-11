import DynamicForm from "@/components/DynamicForm";

const fields = [
  {
    id: "first_name",
    label: "First Name",
    type: "text",
    required: true,
    placeholder: "Enter your first name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "Enter your email",
  },
  {
    id: "age",
    label: "Age",
    type: "number",
    required: false,
    placeholder: "Enter your age",
  },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form</h1>
      <DynamicForm fields={fields} />
    </div>
  );
}
