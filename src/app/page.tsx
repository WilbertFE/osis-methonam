"use client";
import { useEffect, useState } from "react";
import { Slogan, TentangOSIS } from "./components";
import { TentangKami, Jurnal, Agenda } from "@/components/fragments";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Slogan />
      <TentangKami />
      <Jurnal />
      <Agenda />
      <TentangOSIS />
    </>
  );
}
