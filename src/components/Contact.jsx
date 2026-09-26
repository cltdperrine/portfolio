import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const CONTACTS = [
  {
    icon: <Mail className="w-5 h-5" />,
    text: "cltd.perrine@gmail.com",
    href: "mailto:cltd.perrine@gmail.com",
    external: false,
  },
  {
    icon: <LinkedinIcon />,
    text: "linkedin.com/in/perrine-calatayud",
    href: "https://linkedin.com/in/perrine-calatayud",
    external: true,
  },
  {
    icon: <GithubIcon />,
    text: "github.com/cltdperrine",
    href: "https://github.com/cltdperrine",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-container">
      <p className="section-header text-tan">contact</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-serif text-2xl text-ink dark:text-cream mb-8">
            Me contacter
          </h4>
          <div className="flex flex-col gap-2">
            {CONTACTS.map((contact) => (
              <a
                key={contact.text}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 py-3 group border-b border-subtle"
              >
                <span className="text-clay">{contact.icon}</span>
                <span className="text-base text-ink/60 dark:text-cream/60 group-hover:text-clay dark:group-hover:text-clay transition-colors duration-200">
                  {contact.text}
                </span>
                {contact.external && (
                  <ArrowUpRight className="w-4 h-4 text-clay opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-serif text-2xl text-ink dark:text-cream mb-8">
            Localisation
          </h4>
          <div className="flex items-center gap-4 py-3 border-b border-subtle">
            <MapPin className="w-5 h-5 text-clay" />
            <span className="text-base text-ink/60 dark:text-cream/60">
              Bayonne, France
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
