import type { Metadata } from "next";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Website",
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
        <Header />
        <MobileMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
