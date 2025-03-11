"use client";
import React from "react";
import FieldWrapper from "../FieldWrapper";
import { TextField } from "@/interfaces";
import { useForm } from "@/providers/FormProvider";

const InputField: React.FC<TextField> = ({ id, label, type, required }) => {
  const { values, setValue } = useForm();
  return (
    <FieldWrapper id={id} label={label} required={required}>
      <input
        id={id}
        type={type}
        required={required}
        value={values[id] || ""}
        onChange={(e) => setValue(id, e.target.value)}
        className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      />
    </FieldWrapper>
  );
};

export default InputField;
