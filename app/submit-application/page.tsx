"use client";
import DynamicForm from "@/components/DynamicForm";
import formData from "@/data/formData.json";
import useFetch from "@/hooks/useFetch";
import * as framerMotion from "framer-motion";
import { useState } from "react";

const ApplicationsPage = () => {
  const { data: formsData, loading } = useFetch("/api/insurance/forms");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { motion } = framerMotion;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Select an Insurance Type</h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl">
        {loading && <p>Loading...</p>}
        {formsData &&
          (formsData as any).map((item: any) => (
            <motion.div
              key={item.formId}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(item.formId)}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all ${
                selectedId === item.formId
                  ? "w-full sm:w-3/4 bg-blue-100"
                  : selectedId
                  ? "w-1/3 bg-gray-200"
                  : "w-full sm:w-1/3 bg-white hover:bg-blue-50"
              }`}
            >
              <h2 className="text-lg font-semibold text-center">
                {item.title}
              </h2>
            </motion.div>
          ))}
      </div>

      {selectedId && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-3xl"
        >
          {(formsData as any).find((item: any) => item.formId === selectedId)
            ?.fields ? (
            <div className="container mx-auto p-4">
              <h2 className="text-xl font-semibold mb-4 text-center text-red-900">
                {
                  (formsData as any).find(
                    (item: any) => item.formId === selectedId
                  ).title
                }
              </h2>
              <div className="flex justify-end items-end">
                <button
                  onClick={() => setSelectedId(null)}
                  className="mt-4 px-4 py-2 bg-red-500 mb-4 text-xs text-white rounded hover:bg-red-600 transition"
                >
                  Back
                </button>
              </div>

              <DynamicForm
                formData={(formsData as any).find(
                  (item: any) => item.formId === selectedId
                )}
              />
            </div>
          ) : null}
        </motion.div>
      )}
    </div>
  );
};

export default ApplicationsPage;
