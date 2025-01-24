/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage({ searchParams }: any) {
  const callbackUrl = searchParams.callbackUrl || "/";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Button onClick={() => signIn("google", { callbackUrl })}>
        <FaGoogle /> Login with google
      </Button>
    </div>
  );
}
