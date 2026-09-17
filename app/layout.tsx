import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milind Mishra — Product Engineer",
  description:
    "Product engineer at Merlin AI by Foyer. 20M+ users reached, 4 talks at React meetups, 5 products taken 0 to 1, shipped across web, extension, desktop, and mobile.",
};

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
        {children}
      </body>
    </html>
  );
}
