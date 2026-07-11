import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Linear – The system for product development",
  description:
    "Linear is a purpose-built tool for planning and building products. Streamline your product development workflow with a system that scales with your team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#08090a] text-[#f5f5f7] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
