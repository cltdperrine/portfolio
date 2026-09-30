import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const NAV_LINKS = [
  { label: "à propos", href: "#top" },
  { label: "projets", href: "#projects" },
  { label: "parcours", href: "#parcours" },
  { label: "contact", href: "#contact" },
];
function Header() {
  const [isDark, setIsDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 dark:bg-ink/90 backdrop-blur-sm border-b border-ink/10 dark:border-cream/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-6 text-sm tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink/70 dark:text-cream/70 hover:text-clay dark:hover:text-clay transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="/Perrine Calatayud Support.pdf"
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

          <a
            href="#top"
            aria-label="Retour en haut de page"
            className="p-2 hover:opacity-60 transition-opacity"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="8"
                y1="8"
                x2="32"
                y2="32"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="32"
                y1="8"
                x2="8"
                y2="32"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </a>

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
    </motion.header>
  );
}

export default Header;
