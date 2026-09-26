function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-cream/10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-2 text-sm text-ink/50 dark:text-cream/50">
        <p>© {new Date().getFullYear()} Perrine Calatayud</p>
        <p>Construit avec React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
