import { Code2, ExternalLink } from "lucide-react";
const PROJECTS = [
  {
    title: "Automne Pâtisserie",
    description:
      "Application e-commerce full-stack : authentification JWT, gestion des produits et des commandes, API REST. Front en React/Tailwind, back en Node.js/Express, base PostgreSQL, déployée sur Vercel.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/cltdperrine/automne-patisserie",
    demo: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-24 scroll-mt-16"
    >
      <h2 className="font-serif text-3xl mb-10">Projets</h2>
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="border-t border-ink/10 dark:border-cream/10 pt-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
              <h3 className="font-serif text-2xl">{project.title}</h3>
              <div className="flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink/70 dark:text-cream/70 hover:text-clay dark:hover:text-clay transition-colors"
                  >
                    <Code2 size={16} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink/70 dark:text-cream/70 hover:text-clay dark:hover:text-clay transition-colors"
                  >
                    <ExternalLink size={16} />
                    Démo
                  </a>
                )}
              </div>
            </div>
            <p className="text-ink/80 dark:text-cream/80 leading-relaxed max-w-2xl">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-sage/15 dark:bg-sage/25 text-ink dark:text-cream"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
