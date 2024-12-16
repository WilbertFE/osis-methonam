"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/app/footer";
import MainNavbar from "./navbar";
import Loading from "./loading";
import { SessionProvider } from "next-auth/react";

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [displayFooter, setDisplayFooter] = useState(false);

  useEffect(() => {
    setIsContentLoaded(true);
    setTimeout(() => {
      setDisplayFooter(true);
    }, 100);
  }, []);

  return (
    <SessionProvider>
      {!isContentLoaded && <Loading />}
      {isContentLoaded && (
        <>
          <MainNavbar />
          <main>
            <div className="container">
              <div className="flex flex-wrap justify-center">{children}</div>
            </div>
          </main>
          {displayFooter && <Footer />}
        </>
      )}
    </SessionProvider>
  );
}
