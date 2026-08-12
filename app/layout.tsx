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
  title: "Ghost — a private AI layer for your desktop",
  description:
    "Summon an assistant with a keystroke. It hears the call, reads your screen, and answers in an overlay that screen sharing does not capture. Local-first, no telemetry.",
  applicationName: "Ghost",
  openGraph: {
    title: "Ghost — a private AI layer for your desktop",
    description:
      "Summon an assistant with a keystroke. It hears the call, reads your screen, and answers in an overlay that screen sharing does not capture.",
    type: "website",
  },
  // The page is dark-only by design; telling the browser avoids a white flash
  // on first paint and gets form controls rendered to match.
  other: { "color-scheme": "dark" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
