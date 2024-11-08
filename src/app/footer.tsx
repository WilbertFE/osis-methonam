import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";
import LogoSikat from "@/../public/img/logo.png";
import { Spacer } from "@nextui-org/spacer";
import { Chip } from "@nextui-org/chip";

export function Footer() {
  const footerNav = [
    {
      label: "Roadmaps",
      href: "/",
    },
    {
      label: "Best Practices",
      href: "/",
    },
    {
      label: "Guides",
      href: "/",
    },
    {
      label: "FAQs",
      href: "/",
    },
    {
      label: "Youtube",
      href: "/",
    },
  ];
  return (
    <div className="flex flex-wrap bg-slate-800 p-4 pb-32">
      <div className="w-full flex flex-col">
        {footerNav.map((nav, i) => (
          <>
            <Link className="p-1" key={i} href={nav.href}>
              {nav.label}
            </Link>
            <Divider />
          </>
        ))}
      </div>
      <Spacer y={4} />
      <div className="w-full flex flex-col">
        <div className="flex items-center gap-x-1">
          <Image src={LogoSikat} alt="Logo Sikat" width={64} height={64} />
          <h1 className="font-bold tracking-wide text-lg">sikat.com</h1>
          <span className="text-foreground text-sm">by</span>

          <Chip radius="sm" size="lg" color="primary">
            Wilbert
          </Chip>
        </div>
      </div>
    </div>
  );
}
