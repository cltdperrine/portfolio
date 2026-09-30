import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-40 pb-24 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-6xl md:text-7xl lg:text-[100px] leading-none tracking-tight mb-16 text-tan"
      >
        Perrine Calatayud
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p className="font-serif text-2xl md:text-3xl lg:text-[34px] leading-snug text-ink dark:text-cream mb-6">
          J'ai passé 17 ans à évoluer dans la vente et le management. Un jour,
          je me suis demandé si j'avais envie de continuer sans jamais explorer
          ma vraie passion pour le développement.
        </p>
        <p className="font-serif text-2xl md:text-3xl lg:text-[34px] leading-snug text-clay">
          La réponse a été non.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
