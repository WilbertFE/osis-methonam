"use client";

import { ExpandableCardDemo } from "@/components/blocks/expandable-card-demo";
import { ExpandableCardData } from "@/types/ExpandableCardData";
import { Spacer } from "@nextui-org/spacer";

export default function ProgramKerja() {
  return (
    <div className="w-full flex flex-col pt-36 pb-32">
      <h1 className="text-center font-bold tracking-wide text-3xl">
        Program Kerja
      </h1>
      <Spacer y={8} />
      <div className="flex justify-center">
        <ExpandableCardDemo cards={cards} />
      </div>
    </div>
  );
}

const cards: ExpandableCardData[] = [
  {
    description: "Digitalisasi",
    title: "Website OSIS",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>OSIS akan membuat website OSIS untuk kepentingan siswa.</p>;
    },
  },
  {
    description: "Transparansi",
    title: "Program 'BAPER'",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          BAPER atau baca curhatan pelajar merupakan program di mana siswa
          diberi akses untuk memberikan keluh kesah mengenai permasalahan di
          sekolah, untuk diproses.
        </p>
      );
    },
  },

  {
    description: "Transparansi",
    title: "Komunikasi OSIS",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          OSIS akan membuat akun sosmed dan nomor WA khusus yang bisa diakses
          oleh siswa
        </p>
      );
    },
  },
];
