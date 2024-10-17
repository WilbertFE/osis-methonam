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
    "Home",
    "Visi Misi",
    "Program Kerja",
    "Jurnal",
    "Agenda",
    "Tentang Kami",
    "Tim SIKAT",
    "Kontak",
    "Tim Anti-Korupsi",
  ];

  return (
    <Navbar
      className="dark:bg-transparent"
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
      <NavbarContent className="sm:hidden pr-3 -mr-9" justify="center">
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

      <NavbarMenu className="dark:bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
            <Spacer y={2} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
