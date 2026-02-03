import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Ganti ke Poppins
import "./globals.css";

// Konfigurasi font Poppins sesuai desain asli
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Buryam Janda - Sarapan Bubur Ayam Jawa Sunda",
  description:
    "Buryam Janda - Bubur Ayam perpaduan khas Jawa dan Sunda di Citeureup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
