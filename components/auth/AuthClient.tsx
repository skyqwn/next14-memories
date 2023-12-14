import React from "react";
import Input from "../inputs/Input";
import { signUp } from "@/actions/signUp";
import Form from "../Form";
const AuthClient = () => {
  return (
    <Form action={signUp} label="회원가입">
      <Input name="email" placeholder="이메일" />
      <Input name="password" type="password" placeholder="비밀번호" />
      <Input
        name="verifyPassword"
        type="password"
        placeholder="비밀번호 확인"
      />
      <Input name="name" placeholder="이름" />
    </Form>
  );
};

export default AuthClient;
