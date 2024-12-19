"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button
        onPress={() => signIn("google", { callbackUrl: "", redirect: false })}
      >
        Login with google
      </Button>
    </div>
  );
}
