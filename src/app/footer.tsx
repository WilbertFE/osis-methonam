import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Link from "next/link";
import LogoSikat from "@/../public/img/logo.png";
import { Spacer } from "@nextui-org/spacer";
import { Chip } from "@nextui-org/react";

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

  const footerSubMenus = [
    {
      label: "@roadmap.sh",
      href: "/",
    },
    {
      label: "Terms",
      href: "/",
    },
    {
      label: "Privacy",
      href: "/",
    },
    {
      label: "Advertise",
      href: "/",
    },
  ];

  return (
    <footer className="flex flex-wrap bg-slate-800 p-4">
      <div className="w-full">
        {footerNav.map((nav, i) => (
          <>
            <Link className="block py-1" key={i} href={nav.href}>
              {nav.label}
            </Link>
            <Divider />
          </>
        ))}
      </div>
      <Spacer y={4} />
      <div className="w-full">
        <div className="flex items-center gap-x-1">
          <Image src={LogoSikat} alt="Logo Sikat" width={64} height={64} />
          <h1 className="font-bold tracking-wide text-lg">sikat.com</h1>
          <span className="text-foreground text-sm">by</span>
          <Chip radius="sm" size="lg" color="primary">
            @wilbert_fe
          </Chip>
        </div>
        <Spacer y={2} />
        <div>
          <p className="text-foreground-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            distinctio sed provident illum alias odio.
          </p>
          <Spacer y={2} />
          <div className="flex flex-wrap items-center">
            {footerSubMenus.map((menu, i) => (
              <>
                <Link className="block" key={i} href={menu.href}>
                  {menu.label}
                </Link>
                {i + 1 !== footerSubMenus.length && (
                  <>
                    <Spacer x={1.5} />
                    <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                    <Spacer x={1.5} />
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
