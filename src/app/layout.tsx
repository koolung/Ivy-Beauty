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
  title: "Ivy Beauty Lash & SPMU | Licensed Beauty Studio in Timberlea, NS",
  description: "Professional eyelash extensions, lash lifts, brow lamination & semi-permanent makeup. Licensed home studio in Timberlea, Nova Scotia. Established 2021.",
  keywords: "eyelash extensions, hybrid lashes, lash lift, brow lamination, semi-permanent makeup, SPMU, Timberlea, Nova Scotia, beauty studio",
  icons: {
    icon: '/images/logo.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
