"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./buttons/SubmitButton";
import toast from "react-hot-toast";

interface FormProps {
  action: any;
  children: React.ReactNode;
  label: string;
}

const Form = ({ action, children, label }: FormProps) => {
  const [state, serverAction] = useFormState(action, { type: "", message: "" });

  useEffect(() => {
    if (state.type === "error") {
      toast.error(state.message);
    }
    if (state.type === "success") {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form action={serverAction} className="flex flex-col gpa-4 max-w-[200px]">
      {children}
      <SubmitButton label={label} />
    </form>
  );
};

export default Form;
