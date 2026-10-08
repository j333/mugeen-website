const news = [
  {
    title: "Mugeen redefine la potencia y el estilo con las nuevas PowerPro 2027",
    category: "Category",
    image: "/images/head.com/f9b89c352ab95538.webp",
  },
  {
    title: "Mugeen apoya la expansión del pádel australiano",
    category: "Category",
    image: "/images/head.com/8406d34a6ebded89.webp",
  },
  {
    title:
      "Mugeen se convierte en el patrocinador oficial de accesorios del Premier Padel",
    category: "Category",
    image: "/images/head.com/409b0637cbd8b611.webp",
  },
  {
    title: "Mugeen renueva con la Federación Aragonesa de Pádel",
    category: "Category",
    image: "/images/head.com/f447492b0a005366.webp",
  },
];

export function Noticias() {
  return (
    <section className="w-full bg-[var(--white)]">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
      <div className="flex max-w-[640px] flex-col gap-2">
        <h2 className="font-heading text-[28px] font-semibold leading-[1.02] text-[var(--ink)] sm:text-[36px] lg:text-[40px]">
          Noticias e historias
        </h2>
        <p className="font-body text-base leading-[1.45] text-[var(--muted)]">
          Elegí por dónde empezar: la pala, la ropa o lo que va en el bolso.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {news.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="h-[220px] overflow-hidden rounded-[32px] sm:h-[270px]">
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-0 pb-4">
              <span className="font-body text-[13px] leading-[1.5] text-[var(--muted)]">
                {item.category}
              </span>
              <p className="font-body text-[15px] font-normal leading-[1.4] text-[var(--ink)]">
                {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
}
