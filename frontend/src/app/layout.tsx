import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precision Technology Group | Homepage",
  description: "We build digital experiences for ambitious businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body text-body antialiased selection:bg-primary-container selection:text-white">
        
        {/* TopAppBar */}
        <Header />

        {children}

        {/* Footer */}
        <footer className="bg-on-surface dark:bg-surface-container-lowest w-full border-t border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-xl flex flex-col md:flex-row justify-between gap-lg">
            <div className="flex flex-col gap-md">
              <span className="font-h3 text-h3 text-surface-bright tracking-tighter font-extrabold">PRECISION</span>
              <span className="font-label text-label uppercase tracking-widest text-surface dark:text-on-surface">© 2024 PRECISION TECHNOLOGY GROUP. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="flex flex-wrap gap-md md:gap-xl">
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/services">Strategy</Link>
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/services">Design</Link>
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/services">Development</Link>
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/services">AI</Link>
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/work">Work</Link>
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/insights">Insights</Link>
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/privacy">Privacy</Link>
              <Link className="font-label text-label uppercase tracking-widest text-outline-variant hover:text-surface-bright transition-colors hover:text-primary-fixed-dim" href="/terms">Terms</Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
