"use client";

import Image from "next/image";
import Icon from "/public/img/logo.png";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Slogan() {
  const visi = [
    "Solidaritas",
    "Integritas",
    "Kreatifitas",
    "Akhlak",
    "Teknologi",
  ];

  return (
    <div className="w-full flex flex-col min-h-screen rounded-b-md bg-cover bg-center bg-[url('/img/fotbar.jpeg')]">
      <div className="z-10 -mb-8 h-full flex flex-col justify-center items-center">
        <Highlight className="text-3xl font-bold tracking-wider bg-gradient-to-r from-biruMuda1 to-ungu px-1 rounded-lg">
          SIKAT
        </Highlight>
        <Spacer y={1} />
        <h2 className="text-xl font-bold">
          Semua Misi, <Highlight>OSIS</Highlight> Siap Beraksi!!
        </h2>
        <Spacer y={2} />
        <Image src={Icon} priority alt="Logo SIKAT" width={256} height={256} />
        <Spacer y={2} />
        <div className="flex gap-2 tracking-wide flex-wrap justify-center">
          {visi.map((item, i) => (
            <Chip
              key={i}
              variant="dot"
              color="primary"
              className="text-white border-biruMuda1"
            >
              {item}
            </Chip>
          ))}
        </div>
        <Spacer y={6} />
        <Link href="/contact">
          <Button
            variant="shadow"
            color="primary"
            radius="lg"
            size="lg"
            className="tracking-wider font-medium"
          >
            Hubungi
          </Button>
        </Link>
      </div>
    </div>
  );
}
