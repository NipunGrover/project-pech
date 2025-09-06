import { Geist } from "next/font/google";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

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
		<html
			lang="en"
			className={`${geist.variable} antialiased`}
		>
			<Head>
				<link rel="icon" href="/logomark.png" />
			</Head>
			<body className="antialiased">
				<Header />
				<main className="pt-16">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
