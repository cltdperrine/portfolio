import { useState } from "react";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const NAV_LINKS = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [isDark, setIsDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 dark:bg-ink/90 backdrop-blur-sm border-b border-ink/10 dark:border-cream/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Perrine Calatayud
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 dark:text-cream/70 hover:text-clay dark:hover:text-clay transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/CV-Perrine-Calatayud.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 text-sm border border-ink/20 dark:border-cream/20 rounded-full px-4 py-1.5 hover:border-clay hover:text-clay transition-colors"
          >
            <Download size={15} />
            CV
          </a>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Basculer le mode sombre"
            className="p-2 rounded-full hover:bg-ink/5 dark:hover:bg-cream/10 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="md:hidden p-2"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-ink/70 dark:text-cream/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/CV-Perrine-Calatayud.pdf"
            download
            className="py-2 text-sm text-clay"
          >
            Télécharger le CV
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
