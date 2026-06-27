import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ren Hutton — Software Engineer",
  description:
    "Final-year software engineering student in Wellington, focused on computer vision and machine learning. Currently building gesture-based interaction software for WellOral.",
  metadataBase: new URL("https://renhutton.dev"),
  openGraph: {
    title: "Ren Hutton — Software Engineer",
    description:
      "Final-year software engineering student in Wellington, focused on computer vision and machine learning.",
    url: "https://renhutton.dev",
    siteName: "renhutton.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
