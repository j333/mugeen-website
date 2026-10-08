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
    id: "indumentaria-cat",
    title: "Indumentaria",
    kicker: null,
    imageClass: "bg-[url('/images/generated-4.png')]",
    href: "#indumentaria",
    solid: null,
  },
  {
    id: "accesorios-cat",
    title: "Accesorios",
    kicker: "BOLSOS Y MÁS",
    imageClass: null,
    href: "#accesorios",
    solid: "bg-[var(--ink)]",
  },
];

export function Categorias() {
  return (
    <section className="w-full bg-[var(--white)]">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
      <div className="flex max-w-[640px] flex-col gap-2">
        <h2 className="font-heading text-[28px] font-semibold leading-[1.02] text-[var(--ink)] sm:text-[36px] lg:text-[40px]">
          Tu juego con Mugeen comienza hoy
        </h2>
        <p className="font-body text-base leading-[1.45] text-[var(--muted)]">
          Elegí por dónde empezar para hacer tu juego único.
        </p>
      </div>

      <div className="grid h-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[440px] lg:grid-cols-3">
        {categories.map((cat) => (
          <a
            key={cat.id}
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
            <div className="relative z-10 flex h-full flex-col justify-between">
              {cat.kicker ? (
                <span className="font-body text-xs font-semibold tracking-[0.08em] text-[var(--white)]">
                  {cat.kicker}
                </span>
              ) : (
                <span />
              )}
              <span className="font-heading text-2xl font-semibold leading-[1.33] text-[var(--white)]">
                {cat.title}
              </span>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
}
