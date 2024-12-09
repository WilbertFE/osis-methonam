"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/app/footer";
import MainNavbar from "./navbar";

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  return (
    <>
      <MainNavbar />
      <main>
        <div className="container">
          <div className="flex flex-wrap justify-center">{children}</div>
        </div>
      </main>
      {isContentLoaded && <Footer />}
    </>
  );
}
