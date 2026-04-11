import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Navodayans@IITB — From Villages to Vanguard",
  description:
    "Official community of Jawahar Navodaya Vidyalaya alumni at IIT Bombay. Connecting rural roots with global excellence.",
  keywords: ["Navodaya", "IITB", "JNV", "IIT Bombay", "Navodayan community"],
  openGraph: {
    title: "Navodayans@IITB",
    description: "Where rural roots meet global excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-navy text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
