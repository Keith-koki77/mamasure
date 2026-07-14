import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

//import Navbar from "@/components/layout/Navbar";
//import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MamaSure — Plan for Motherhood Before Pregnancy Begins",
  description:
    "Kenya's maternal healthcare planning platform. Prepare financially for pregnancy, delivery and maternal care through trusted hospital partnerships and smart savings planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Global Navigation */}
          {/*<Navbar />*/}

          {/* Page Content */}
          <main className="flex-1">{children}</main>

          {/* Global Footer */}
          {/*<Footer />*/}
        </div>
      </body>
    </html>
  );
}