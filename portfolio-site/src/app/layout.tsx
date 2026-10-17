import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteSettings } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteSettings.title,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.description,
  keywords: [
    siteSettings.name,
    "full-stack developer",
    "AI enthusiast",
    "Punjab Engineering College",
    "PEC Chandigarh",
    "web developer",
    "software engineer",
    "portfolio",
    "Next.js",
    "TypeScript",
    "React",
    "machine learning",
  ],
  authors: [{ name: siteSettings.name }],
  creator: siteSettings.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteSettings.url,
    title: siteSettings.title,
    description: siteSettings.description,
    siteName: siteSettings.name,
    images: siteSettings.ogImage
      ? [{ url: siteSettings.ogImage, width: 1200, height: 630, alt: siteSettings.name }]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.title,
    description: siteSettings.description,
    creator: siteSettings.twitterHandle,
    images: siteSettings.ogImage ? [siteSettings.ogImage] : [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(siteSettings.url),
};

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[var(--bg-base)] text-[var(--text-primary)] selection:bg-[var(--accent-blue)] selection:text-white min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent-blue)] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white font-mono text-xs"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
