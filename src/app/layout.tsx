import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import TawkWidget from "@/components/TawkWidget";

//import Navbar from "@/components/layout/Navbar";
//import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const SITE_TITLE = "MamaSure — Plan for Motherhood Before the Journey Begins";
const SITE_DESCRIPTION =
  "Africa's maternal healthcare planning platform. Prepare financially for pregnancy, delivery and maternal care through trusted hospital partnerships and smart savings planning.";

export const metadata: Metadata = {
  // Resolves relative URLs (Open Graph images, canonicals) against the live domain
  metadataBase: new URL("https://www.mamasure.com"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "MamaSure",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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

        {/* Tawk.to live chat */}
        <TawkWidget />
      </body>
    </html>
  );
}