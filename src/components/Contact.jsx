import { Mail, Link2, Code2 } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "cltd.perrine@gmail.com",
    href: "mailto:cltd.perrine@gmail.com",
    icon: Mail,
  },
  {
    label: "linkedin.com/in/perrine-calatayud",
    href: "https://linkedin.com/in/perrine-calatayud",
    icon: Link2,
  },
  {
    label: "github.com/cltdperrine",
    href: "https://github.com/cltdperrine",
    icon: Code2,
  },
];

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-16">
      <h2 className="font-serif text-3xl mb-4">Contact</h2>
      <p className="text-ink/70 dark:text-cream/70 max-w-lg mb-10">
        En recherche d'une alternance CDA — n'hésitez pas à me contacter, je
        serais ravie d'échanger.
      </p>
      <div className="space-y-4">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-ink/80 dark:text-cream/80 hover:text-clay dark:hover:text-clay transition-colors border-t border-ink/10 dark:border-cream/10 pt-4"
          >
            <link.icon size={18} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
