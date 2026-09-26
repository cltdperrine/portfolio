const SKILL_GROUPS = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "API REST", "PostgreSQL", "MySQL"],
  },
  {
    category: "Outils",
    items: ["Git", "GitHub", "Figma"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-16">
      <h2 className="font-serif text-3xl mb-10">Compétences</h2>
      <div className="grid sm:grid-cols-3 gap-10">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm text-slate dark:text-tan mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-ink/80 dark:text-cream/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
