"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface InputProps {
  name: string;
  type?: "text" | "password";
  placeholder: string;
}

const Input = ({ name, type = "text", placeholder }: InputProps) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <input
        name={name}
        className={`px-4 border border-slate-400  transition ${
          pending ? "bg-slate-500 cursor-not-allowed" : "bg-slate-50"
        }`}
        type={type}
        placeholder={placeholder}
        disabled={pending}
      />
    </div>
  );
};

export default Input;
