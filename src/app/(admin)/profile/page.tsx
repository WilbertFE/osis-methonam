/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: any = useSession();

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{session?.user?.fullname}</h2>
    </div>
  );
}
