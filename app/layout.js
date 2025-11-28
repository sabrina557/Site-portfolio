// app/layout.js
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio - mes projets et contact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 antialiased">

        {/* HEADER */}
        <header className="border-b border-white/60 bg-white/85 backdrop-blur">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpg"
                alt="Profil"
                width={45}
                height={45}
                className="rounded-full"
              />
              <h1 className="text-xl font-semibold tracking-tight text-slate-900">Sabrina Bouzidi</h1>
            </div>

            <nav className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium sm:text-base">
              <div className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2 shadow-sm">
                <a className="px-2 py-1 transition-colors hover:text-sky-600" href="/">Accueil</a>
                <a className="px-2 py-1 transition-colors hover:text-sky-600" href="/about">À propos</a>
                <a className="px-2 py-1 transition-colors hover:text-sky-600" href="/projects">Projets</a>
                <a className="px-2 py-1 transition-colors hover:text-sky-600" href="/contact">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-grow w-full max-w-screen-xl mx-auto px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/70 bg-white/80 py-4 text-center text-xs text-slate-500">
          © 2025 Sabrina Bouzidi — Tous droits réservés
        </footer>

      </body>
    </html>
  );
}
