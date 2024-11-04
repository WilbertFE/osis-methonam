"use client";
import { useEffect, useState } from "react";
import { Slogan, Jurnal, Agenda, TentangOSIS } from "./components";
import { TentangKami } from "@/components/fragments/TentangKami";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Slogan />
      <TentangKami />
      {/* <VisiMisi /> */}
      {/* <ProgramKerja /> */}
      <Jurnal />
      <Agenda />
      <TentangOSIS />
    </>
  );
}
