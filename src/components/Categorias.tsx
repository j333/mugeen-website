const categories = [
  {
    id: "paletas-cat",
    title: "Paletas",
    kicker: null,
    imageClass: "bg-[url('/images/generated-5.png')]",
    href: "#paletas",
    solid: null as string | null,
  },
  {
    id: "ropa-cat",
    title: "Ropa",
    kicker: null,
    imageClass: "bg-[url('/images/generated-4.png')]",
    href: "#ropa",
    solid: null,
  },
  {
    id: "equipamiento-cat",
    title: "Equipo",
    kicker: "BOLSOS Y MÁS",
    imageClass: null,
    href: "#equipo",
    solid: "bg-[var(--ink)]",
  },
  {
    id: "ofertas",
    title: "Ofertas",
    kicker: "TEMPORADA",
    imageClass: null,
    href: "#ofertas",
    solid: "bg-[var(--red)]",
  },
];

export function Categorias() {
  return (
    <section className="flex w-full flex-col gap-7 bg-[var(--white)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
      <div className="flex max-w-[640px] flex-col gap-2">
        <h2 className="font-heading text-[28px] font-semibold leading-[1.02] text-[var(--ink)] sm:text-[36px] lg:text-[40px]">
          Tu juego con Mugeen comienza hoy
        </h2>
        <p className="font-body text-base leading-[1.45] text-[var(--muted)]">
          Elegí por dónde empezar para hacer tu juego único.
        </p>
      </div>

      <div className="grid h-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[440px] lg:grid-cols-4">
        {categories.map((cat) => (
          <a
            key={cat.id}
            id={cat.id === "ofertas" ? "ofertas" : undefined}
            href={cat.href}
            className={`group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[32px] p-6 transition-transform duration-300 hover:-translate-y-1 lg:min-h-0 lg:h-full ${
              cat.solid ?? ""
            }`}
          >
            {cat.imageClass && (
              <>
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${cat.imageClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </>
            )}
            <div className="relative z-10 flex h-full flex-col justify-between gap-2.5">
              {cat.kicker ? (
                <span className="font-body text-xs font-semibold tracking-[0.08em] text-[var(--white)]">
                  {cat.kicker}
                </span>
              ) : (
                <span />
              )}
              <span className="font-heading text-2xl font-semibold text-[var(--white)]">
                {cat.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
