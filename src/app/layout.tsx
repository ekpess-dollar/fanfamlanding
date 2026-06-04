import type { Metadata, Viewport } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
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

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Fanation — Where creators and fans connect",
  description:
    "Fanation is the social platform built for creators. Share posts, go live, build subscriptions, gift your favourites, and grow a community that pays you back.",
  openGraph: {
    title: "Fanation — Where creators and fans connect",
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
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* No-FOUC theme init: runs before paint, sets .dark from saved choice
            or system preference. Keep in sync with ThemeToggle. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var q=new URLSearchParams(location.search).get('theme');if(q==='dark'||q==='light'){localStorage.setItem('theme',q);}var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
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
