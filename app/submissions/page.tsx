import { DataGrid } from "@/components/DataGrid";

const data = {
  columns: ["Full Name", "Age", "Gender", "Insurance Type", "City"],
  data: [
    {
      id: "1",
      "Full Name": "John Doe",
      Age: 28,
      Gender: "Male",
      "Insurance Type": "Health",
      City: "New York",
    },
    {
      id: "2",
      "Full Name": "Jane Smith",
      Age: 32,
      Gender: "Female",
      "Insurance Type": "Home",
      City: "Los Angeles",
    },
    {
      id: "3",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "4",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "5",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "6",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "7",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "8",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "9",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "10",
      "Full Name": "Alice Brown",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "11",
      "Full Name": "Naghi",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
    {
      id: "12",
      "Full Name": "Ali gholi",
      Age: 40,
      Gender: "Female",
      "Insurance Type": "Car",
      City: "Chicago",
    },
  ],
};
const SubmissionsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <DataGrid columns={data.columns} data={data.data} />
    </div>
  );
};

export default SubmissionsPage;
