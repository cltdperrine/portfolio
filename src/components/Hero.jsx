function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <p className="font-sans text-sm tracking-wide text-slate dark:text-tan mb-4">
        Bayonne, Pays Basque
      </p>
      <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-3xl">
        Perrine Calatayud, développeuse web junior en reconversion.
      </h1>
      <p className="mt-6 text-lg text-ink/70 dark:text-cream/70 max-w-xl">
        Après 17 ans dans le retail chez Inditex et Balibaris, j'ai transformé
        ma passion pour le développement en métier. Aujourd'hui je construis des
        applications web full-stack avec React et Node.js.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="inline-flex items-center rounded-full bg-ink dark:bg-cream text-cream dark:text-ink px-5 py-2.5 text-sm hover:bg-clay dark:hover:bg-clay dark:hover:text-cream transition-colors"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-ink/20 dark:border-cream/20 px-5 py-2.5 text-sm hover:border-clay hover:text-clay transition-colors"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}

export default Hero;
