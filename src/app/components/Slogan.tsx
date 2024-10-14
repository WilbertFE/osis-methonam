"use client";

import Image from "next/image";
import FotoOsis from "/public/img/fotbar-osis.jpeg";
import Icon from "/public/img/icon.png";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Slogan() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const visi = [
    "Solidaritas",
    "Integritas",
    "Kreatifitas",
    "Akhlak",
    "Teknologi",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Image
        src={FotoOsis}
        alt="osis methonam"
        objectFit="cover"
        fill
        priority
        className="opacity-80 rounded-b-xl"
      />
      <div className="z-10 -mt-12 h-full flex flex-col justify-center items-center">
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
        <Link href="#">
          <Button
            variant="shadow"
            color="primary"
            radius="lg"
            size="lg"
            className="tracking-wider font-medium"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme}
          </Button>
        </Link>
      </div>
    </>
  );
}
