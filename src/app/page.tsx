"use client";
import { useEffect, useState } from "react";
import { Slogan, VisiMisi, TentangKami } from "./components";

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
      <VisiMisi />
      {/* <Program />
          <Jurnal />
          <Agenda /> */}
    </>
  );
}
