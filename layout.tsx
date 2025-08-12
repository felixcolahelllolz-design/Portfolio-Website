import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felix R. Collazo Helgeson — Portfolio",
  description: "Bilingual writer, archaeologist, GIS specialist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">{children}</body>
    </html>
  );
}
