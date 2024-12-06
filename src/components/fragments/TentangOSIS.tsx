"use client";

import { Spacer } from "@nextui-org/spacer";
import { TracingBeamDemo } from "../blocks/tracing-beam-demo";
import { Dummy } from "@/types/Dummy";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TentangOSIS() {
  const dummyContent: Dummy[] = [
    {
      title: "OSIS Periode 2024/2025",
      description: (
        <>
          <p>
            Pada 28 Oktober 2024, OSIS SMAS Methodist-6 Medan dilantik dan resmi
            beroperasi.
          </p>
        </>
      ),
      badge: "Pelantikan - 28 Oktober 2024",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "OSIS Periode 2023/2024",
      description: (
        <>
          <p>Mengwujudkan SIKAT pada SMAS Methodist-6 Medan.</p>
        </>
      ),
      badge: "Harapan 1 tahun ke depan",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col pb-32 pt-12">
      <h1 className="text-3xl tracking-wider font-bold">Tentang OSIS</h1>
      <Spacer y={4} />
      <TracingBeamDemo dummyContent={dummyContent} />
      {pathname !== "/about" && (
        <Link href="/about" className="mx-auto">
          <Button
            size="lg"
            radius="sm"
            className="mx-auto text-white p-4 tracking-wide"
            color="success"
            variant="shadow"
          >
            Kenali
          </Button>
        </Link>
      )}
    </div>
  );
}
