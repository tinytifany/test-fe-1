import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Level 1 FE",
  description: "Test Level 1 FE TMA - Tifany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className="p-5 bg-gray-100">
          <h1 className="text-2xl font-bold mb-2">Test Level 1 FE</h1>
          <nav className="space-x-4">
            <a href="/" style={{ marginRight: 10 }}>Home</a>
            <a href="/message">Message</a>
          </nav>
        </header>

        <main className="p-5">
          {children}
        </main>

        <footer className="p-5 bg-gray-100 mt-10 text-sm text-center text-gray-600">
          <p>© 2025 Tifany Avika Rahmah</p>
        </footer>
      </body>
    </html>
  );
}
