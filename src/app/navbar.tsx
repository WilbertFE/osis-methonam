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
} from "@nextui-org/react";
import Image from "next/image";
import IconSIKAT from "/public/img/logo.png";
import { Avatar } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession();

  const menuItems = [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Tentang Kami",
      href: "/about",
    },
    {
      label: "Kontak",
      href: "/contact",
    },
    {
      label: "Jurnal",
      href: "/journal",
    },
    {
      label: "Agenda",
      href: "/agenda",
    },
    {
      label: "Ekstrakulikuler",
      href: "/extracurricular",
    },
    {
      label: "Forum Diskusi",
      href: "/discussion",
    },
    {
      label: "Login",
    },
  ];

  console.log(status);

  const handleClick = () => {
    if (status === "authenticated") {
      signOut();
    } else if (status === "unauthenticated") {
      signIn();
    }
  };

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
          <Avatar
            onClick={() => signIn()}
            isBordered
            color="secondary"
            className="cursor-pointer"
          />
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
            {item.label === "Login" ? (
              <Link
                className="w-full text-blue-600 underline"
                color="foreground"
                href={item.href || ""}
                onClick={() => handleClick()}
              >
                {status === "authenticated" ? "Logout" : "Login"}
              </Link>
            ) : (
              <Link
                className="w-full"
                color="foreground"
                href={item.href || ""}
              >
                {item.label}
              </Link>
            )}

            <Spacer y={2} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
