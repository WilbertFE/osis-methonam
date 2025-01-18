"use client";

import { useEffect, useState } from "react";
import { Hero, Testimoni } from "./components";
import { TentangOSIS } from "@/components/fragments";
import { Journals } from "@/app/components";
import { Agendas } from "./components";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Hero />
      <TentangOSIS />
      <Journals />
      <Agendas />
      <Testimoni />
    </>
  );
}
