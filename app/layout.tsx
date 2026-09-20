import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site, structuredData } from "./site";

const title = `${site.shortName} · ${site.tagline}`;
const robots = {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { ...robots, googleBot: robots },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    creator: site.twitter,
  },
  other: { "format-detection": "telephone=no" },
};

export const viewport: Viewport = { themeColor: site.themeColor };

// cmd/ctrl + d toggles dark mode for the session, never persisted
const darkModeShortcut = `document.addEventListener("keydown", (e) => {
  if (e.key !== "d" || !(e.metaKey || e.ctrlKey)) return;
  e.preventDefault();
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
})`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased lg:h-dvh">
      <body className="font-sans lg:h-full">
        <script dangerouslySetInnerHTML={{ __html: darkModeShortcut }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
        {children}
      </body>
    </html>
  );
}
