"use client";
import { useEffect, useState } from "react";
import { Slogan, KataMereka } from "./components";
import { TentangOSIS, Jurnal, Agenda } from "@/components/fragments";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Slogan />
      <TentangOSIS />
      <Jurnal />
      <Agenda />
      <KataMereka />
    </>
  );
}
