import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ez3",
  description: "PORTFOLIO 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-cyan-950 text-cyan-50">{children}</body>
    </html>
  );
}
