import { ChevronRight } from "lucide-react";

const paletas = [
  {
    name: "Carbon Pro",
    shape: "Diamante",
    image: "/images/paleta-negra.png",
  },
  {
    name: "Control",
    shape: "Diamante",
    image: "/images/paleta-blanca.png",
  },
  {
    name: "Motion",
    shape: "Diamante",
    image: "/images/paleta-roja.png",
  },
];

export function Paletas() {
  return (
    <section id="paletas" className="flex w-full flex-col gap-7 bg-[var(--ink)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {paletas.map((item) => (
          <a
            key={item.name}
            href="#"
            className="group flex flex-col rounded-[32px] bg-[var(--paleta-card)] px-6 pb-8 pt-0 transition-transform duration-300 hover:-translate-y-1 sm:px-8"
          >
            <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden sm:h-[500px] lg:h-[560px]">
              <img
                src={item.image}
                alt={`Paleta ${item.name}`}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-2xl font-semibold leading-[1.05] text-[var(--white)]">
                  {item.name}
                </span>
                <span className="font-body text-[13px] leading-[1.3] text-[var(--mist)]">
                  {item.shape}
                </span>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--muted)] text-[var(--muted)] transition-colors group-hover:border-[var(--white)] group-hover:text-[var(--white)]">
                <ChevronRight size={20} strokeWidth={1.5} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
