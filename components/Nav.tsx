"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = ({ session }: { session: Session | null }) => {
  return (
    <div className="h-16  border-b-2">
      <div className="flex h-full items-center justify-between px-20">
        <Link href={"/"}>
          <Image src={"/memories.png"} width={40} height={40} alt="Logo" />
        </Link>
        <div className="flex gap-4 items-center justify-center">
          {session?.user ? (
            <>
              <div
                onClick={() => {
                  signOut();
                }}
              >
                로그아웃
              </div>
              <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
            </>
          ) : (
            <>
              <Link href={"/signup"}>
                <div>회원가입</div>
              </Link>
              <Link href={"/signin"}>
                <div>로그인</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
