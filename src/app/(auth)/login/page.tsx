/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage({ searchParams }: any) {
  const callbackUrl = searchParams.callbackUrl || "/";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Button
        type="button"
        variant="flat"
        className="w-full"
        color="success"
        onPress={() => signIn("google", { callbackUrl })}
      >
        <FaGoogle /> Login with google
      </Button>
    </div>
  );
}
