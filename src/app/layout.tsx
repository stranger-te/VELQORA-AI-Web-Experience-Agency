import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexusAI — Next-Gen AI Solutions & Automation Agency",
  description:
    "We build intelligent websites, autonomous AI agents, conversational chatbots, and custom automations for modern enterprises.",
  keywords: [
    "AI Agency",
    "AI Agents",
    "Next.js AI",
    "Automation",
    "Chatbots",
    "NexusAI",
  ],
  authors: [{ name: "NexusAI Studio" }],
  openGraph: {
    title: "NexusAI — Next-Gen AI Solutions & Automation",
    description:
      "Transforming business workflows with intelligent agents and premium design.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-secondary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
