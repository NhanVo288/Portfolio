import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Engineering Portfolio',
	description: 'A professional portfolio website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="shortcut icon" href="https://cdn-icons-png.freepik.com/256/12539/12539811.png" type="image/x-icon" />
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
					<div className="relative min-h-screen flex flex-col">
						<Navbar />
						<main className="flex-grow pt-16">{children}</main>
						<Footer />
						<Toaster richColors position="top-right" />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}