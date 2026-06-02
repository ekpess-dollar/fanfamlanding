import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

// Self-hosted via next/font (no layout shift, no extra network round-trips)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FAN FAM — Where creators and fans connect",
  description:
    "FAN FAM is the social platform built for creators. Share posts, go live, build subscriptions, gift your favourites, and grow a community that pays you back.",
  openGraph: {
    title: "FAN FAM — Where creators and fans connect",
    description:
      "Share posts, go live, build subscriptions, and grow a community that pays you back.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2599f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
