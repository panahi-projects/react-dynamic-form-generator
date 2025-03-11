import React from "react";
import FieldWrapper from "../FieldWrapper";
import { TextField } from "@/interfaces";

const InputField: React.FC<TextField> = ({ id, label, type, required }) => {
  return (
    <FieldWrapper id={id} label={label} required={required}>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      />
    </FieldWrapper>
  );
};

export default InputField;
