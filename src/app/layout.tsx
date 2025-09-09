import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Ivy Beauty | Premium Eyelash Extensions & Beauty Services",
  description: "Transform your look with premium eyelash extensions, brow services, and beauty treatments at Ivy Beauty. Expert technicians, luxury experience.",
  keywords: "eyelash extensions, lash extensions, beauty salon, brow services, makeup, beauty treatments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-neutral-50`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
