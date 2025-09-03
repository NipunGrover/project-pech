import "./globals.css";
import { Geist } from "next/font/google";
import { Header } from "@/components/index-page/sections/Header";
import { Footer } from "@/components/index-page/sections/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} dark antialiased`}>
      <head>
        {/* Ensure proper responsive behavior on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Header />
        {/* Offset main content for fixed header height (h-16) */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
