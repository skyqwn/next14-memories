"use client";

import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    await signIn("credentials", { email, password });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="이메일"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호"
        type="password"
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Signin;
