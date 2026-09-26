const EXPERIENCE = [
  {
    role: "Stagiaire Développement Web",
    company: "Origins Digital",
    period: "Mars 2026 – Mai 2026",
    location: "Biarritz",
    description:
      "Développement du projet de fin de formation Automne Pâtisserie, une application web full-stack, avec approfondissement des compétences à travers des exercices encadrés par les tuteurs.",
  },
  {
    role: "Responsable de boutique",
    company: "Balibaris",
    period: "2023 – 2025",
    location: "Biarritz",
    description:
      "Management d'équipe et organisation de l'activité quotidienne, suivi des performances commerciales, gestion des priorités et accompagnement des collaborateurs.",
  },
  {
    role: "Zara · Stradivarius · Zara Home",
    company: "Inditex",
    period: "2006 – 2023",
    location: "France",
    description:
      "Évolution à travers plusieurs postes : vendeuse, caissière principale, assistante rayon, directrice adjointe lors de l'ouverture du magasin Stradivarius de Bayonne (2017), puis merchandiser.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-24 scroll-mt-16"
    >
      <h2 className="font-serif text-3xl mb-10">Expérience</h2>
      <div className="space-y-10">
        {EXPERIENCE.map((job) => (
          <div
            key={job.company + job.period}
            className="grid md:grid-cols-4 gap-4 border-t border-ink/10 dark:border-cream/10 pt-6"
          >
            <p className="text-sm text-slate dark:text-tan">{job.period}</p>
            <div className="md:col-span-3">
              <h3 className="font-serif text-xl">{job.role}</h3>
              <p className="text-sm text-ink/60 dark:text-cream/60 mb-2">
                {job.company} · {job.location}
              </p>
              <p className="text-ink/80 dark:text-cream/80 leading-relaxed max-w-2xl">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
