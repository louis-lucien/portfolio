import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { metadata as siteMetadata } from "@/config/portfolio";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased noise`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
