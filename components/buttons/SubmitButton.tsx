"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`px-4 border border-slate-200 transition ${
        pending ? "bg-slate-500 cursor-not-allowed" : "bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
