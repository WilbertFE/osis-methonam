import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import MainNavbar from "@/components/ui/navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import Footer from "@/components/ui/footer";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.woff2",
});

export const metadata: Metadata = {
  title: "OSIS Methonam",
  description: "Website OSIS SMAS Methodist-6 Medan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased min-h-screen`}>
        <NextUIProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            themes={["light", "dark"]}
            enableSystem={false}
          >
            <main>
              <MainNavbar />
              <div className="container">
                <div className="flex flex-wrap justify-center pb-32">
                  {children}
                </div>
              </div>
              {/* <Footer /> */}
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
