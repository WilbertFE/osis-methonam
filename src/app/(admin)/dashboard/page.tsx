"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session, status);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  return <div>admin dashboard</div>;
}
