"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import IconSIKAT from "/public/img/logo.png";
import { Avatar } from "@nextui-org/avatar";
import { Spacer } from "@nextui-org/spacer";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Tentang Kami",
      to: "/about",
    },
    {
      label: "Jurnal",
      to: "/journal",
    },
    {
      label: "Agenda",
      to: "/agenda",
    },
    {
      label: "Forum Diskusi",
      to: "/discussion",
    },
    {
      label: "Kontak",
      to: "/contact",
    },
    {
      label: "Ekstrakulikuler",
      to: "/extracurricular",
    },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      className="dark:bg-transparent z-[999]"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Avatar isBordered color="secondary" />
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Mobile */}
      <NavbarContent className="sm:hidden pr-3 -mr-8" justify="center">
        <NavbarBrand>
          <Image src={IconSIKAT} alt="icon" height={128} width={128} />
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Tablet - Laptop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src={IconSIKAT} alt="icon" height={32} width={32} />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="dark:bg-transparent z-[999]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.to}
              size="lg"
            >
              {item.label}
            </Link>
            <Spacer y={2} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
