import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A demo portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MobileMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
