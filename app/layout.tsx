import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABDOMESS 24 | Private Athletic Journal",
  description: "Abderrahmane Messaadiyene's private athletic training journal.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
