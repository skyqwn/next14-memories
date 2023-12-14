"use server";

import client from "@/libs/prismadb";

export const signUp = async (prevState: any, data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const verifyPassword = data.get("verifyPassword") as string;
  const name = data.get("name") as string;

  if (!email || !password || !verifyPassword || !name) {
    return { message: "필수항목을 입력해주세요", type: "error" };
  }

  if (password !== verifyPassword) {
    return { message: "비밀번호를 같게 입력해주세요", type: "error" };
  }

  await client.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return { message: "회원가입 성공", type: "success" };
};
