import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/ui/footer-section";
import "./globals.css";

export const metadata: Metadata = {
  title: "FILL | Homepage",
  description: "We build digital experiences for ambitious businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body text-body antialiased selection:bg-primary-container selection:text-white">
        
        <div className="relative flex min-h-svh flex-col">
          {/* TopAppBar */}
          <Header />

          <main className="flex-1 flex flex-col">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>

      </body>
    </html>
  );
}
