import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const NAV_LINKS = [
  { label: "accueil", to: "/" },
  { label: "à propos", to: "/about" },
  { label: "expertise", to: "/expertise" },
  { label: "contact", to: "/contact" },
];

function Navigation() {
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
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-clay" : "text-ink/70 dark:text-cream/70 hover:text-clay dark:hover:text-clay"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
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

          <span
            className="font-serif text-lg text-ink dark:text-cream hidden sm:block"
            style={{ writingMode: "vertical-rl" }}
          >
            Perrine
          </span>

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
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-ink/70 dark:text-cream/70"
            >
              {link.label}
            </NavLink>
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

export default Navigation;
