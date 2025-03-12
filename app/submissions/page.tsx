"use client";
import { DataGrid } from "@/components/DataGrid";
import useFetch from "@/hooks/useFetch";

// const data = {
//   columns: ["Full Name", "Age", "Gender", "Insurance Type", "City"],
//   data: [],
// };

interface SubmissionsData {
  columns: string[];
  data: any[];
}

const SubmissionsPage = () => {
  const {
    data: submissions,
    loading,
    error,
  } = useFetch<SubmissionsData>("/api/insurance/forms/submissions");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {/* {error && <p className="text-red-500">{error}</p>} */}
      <div className="container mx-auto p-4">
        {submissions && (
          <DataGrid columns={submissions.columns} data={submissions.data} />
        )}
      </div>
    </div>
  );
};

export default SubmissionsPage;
