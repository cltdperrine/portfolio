import { motion } from "framer-motion";

const TIMELINE = [
  {
    title: "Stagiaire Développement Web",
    place: "Origins Digital · Biarritz",
    period: "Mars 2026 – Mai 2026",
  },
  {
    title: "Développement Web et Web Mobile — Bac+2",
    place: "AFEC Bayonne · Félicitations du jury",
    period: "2025 – 2026",
  },
  {
    title: "Responsable de boutique",
    place: "Balibaris · Biarritz",
    period: "2023 – 2025",
  },
  {
    title: "Zara · Stradivarius · Zara Home",
    place: "Inditex · France",
    period: "2006 – 2023",
  },
  {
    title: "Bac Littéraire, option Histoire de l'Art",
    place: "Lycée Michel de Montaigne · Mulhouse",
    period: "2005",
  },
];

function Experience() {
  return (
    <section id="parcours" className="section-container">
      <p className="section-header text-tan">parcours</p>

      <div className="flex flex-col gap-10">
        {TIMELINE.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-subtle pb-6"
          >
            <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
              <span className="font-serif text-xl md:text-2xl text-ink dark:text-cream">
                {item.title}
              </span>
              <span className="text-sm text-ink/50 dark:text-cream/50">
                {item.period}
              </span>
            </div>
            <span className="text-sm text-ink/50 dark:text-cream/50">
              {item.place}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
