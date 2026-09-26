import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-subtle mt-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 flex flex-col gap-4 md:flex-row justify-between items-center">
        <span className="text-sm text-ink/50 dark:text-cream/50">
          © {new Date().getFullYear()} Perrine Calatayud
        </span>
        <span className="text-sm text-ink/50 dark:text-cream/50">
          Made in Bayonne
        </span>
      </div>
    </motion.footer>
  );
}

export default Footer;
