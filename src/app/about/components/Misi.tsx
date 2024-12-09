import { FeaturesSectionDemo } from "@/components/blocks/features-section-demo-2";
import {
  IconCloud,
  IconEaseInOut,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function Misi() {
  const misi = [
    {
      title: "Kebersihan",
      description:
        "Mewujudkan kebersihan di lingkungan sekolah, khususnya kelas dan kamar mandi.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Digitalisasi",
      description:
        "Membuat produk digital OSIS, seperti website ini untuk kepentingan siswa.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparansi",
      description:
        "Mewujudkan komunikasi yang transparan, di mana terapat akun dan nomor khusus OSIS.",
      icon: <IconCloud />,
    },
    {
      title: "Kompetisi",
      description:
        "Mengadakan kompetisi-kompetisi untuk kemampuan intelektual dan fisik.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Literasi",
      description:
        "Mengadakan kompetisi-kompetisi atau membuat produk untuk kemampuan literasi dan kognitif siswa.",
      icon: <IconRouteAltLeft />,
    },
  ];
  return (
    <div className="w-full flex flex-col pt-36 pb-32">
      <h1 className="text-3xl font-bold text-center tracking-wider">Misi</h1>
      <FeaturesSectionDemo features={misi} />
    </div>
  );
}
