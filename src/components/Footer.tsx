import { Logo } from "./Logo";

const shop = [
  { label: "Paletas", href: "#paletas" },
  { label: "Indumentaria", href: "#indumentaria" },
  { label: "Accesorios", href: "#accesorios" },
];
const help = ["Contacto", "Pedidos", "Nosotros"];
const legal = [
  "Aviso legal",
  "Términos de uso",
  "Condiciones de venta",
  "Privacidad",
  "Cookies",
];

export function Footer() {
  return (
    <footer className="w-full bg-[var(--ink)]">
      <div className="flex w-full flex-col gap-9 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <a href="#" aria-label="Mugeen inicio" className="shrink-0">
            <Logo
              tone="white"
              className="h-[28px] w-[132px] sm:h-[31px] sm:w-[148px]"
            />
          </a>

          <div className="flex gap-16 sm:gap-24">
            <div className="flex flex-col gap-3">
              <span className="font-body text-xs font-semibold text-[var(--muted)]">
                Tienda
              </span>
              {shop.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-body text-sm text-[var(--white)] transition-opacity hover:opacity-70"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-body text-xs font-semibold text-[var(--muted)]">
                Ayuda
              </span>
              {help.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body text-sm text-[var(--white)] transition-opacity hover:opacity-70"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center px-5 py-2.5 sm:px-8 lg:px-12">
        <div className="flex w-full flex-col items-start justify-between gap-2 px-0 sm:flex-row sm:items-center sm:px-3">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {legal.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                <a
                  href="#"
                  className="font-body text-[13px] text-[var(--mist)] transition-opacity hover:opacity-70"
                >
                  {item}
                </a>
                {index < legal.length - 1 && (
                  <span className="font-body text-[13px] text-[var(--mist)]">
                    |
                  </span>
                )}
              </span>
            ))}
          </div>
          <span className="font-body text-[13px] text-[var(--mist)]">
            © 2026 Mugeen
          </span>
        </div>
      </div>
    </footer>
  );
}
