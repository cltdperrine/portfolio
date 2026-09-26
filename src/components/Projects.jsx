import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Automne Pâtisserie",
    period: "2026",
    role: "Projet de fin de formation",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    demo: "https://automnepatisseriefrontend.vercel.app/",
  },
];

function ProjectRow({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-t border-subtle"
    >
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-between gap-6 -mx-6 px-6 py-8 rounded transition-colors duration-200 hover:bg-ink/5 dark:hover:bg-cream/10"
      >
        <div>
          <h3 className="font-serif text-4xl md:text-5xl mb-2">
            {project.title}
          </h3>
          <p className="text-ink/50 dark:text-cream/50">
            {project.period} · {project.role}
          </p>
          <p className="text-sm text-ink/40 dark:text-cream/40 mt-1">
            {project.tech.join("  ·  ")}
          </p>
        </div>
        <ArrowUpRight className="w-6 h-6 text-clay absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-container">
      <p className="section-header text-tan">projets</p>
      <div>
        {PROJECTS.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
