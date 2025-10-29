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
  title: "Shadow",
  description: "A simple tool to generate shadows for your web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex gap-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/user" className="hover:underline">User Profiles</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/posts" className="hover:underline">Posts</a>

          </div>

        </nav>
        {children}
      </body>
    </html>
  );
}
