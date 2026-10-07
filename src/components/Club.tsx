const benefits = [
  {
    title: "Envío rápido y gratuíto",
    body: "En compras superiores a 50 €.\nPenínsula (ES, PT) y Baleares",
  },
  {
    title: "Pago seguro y flexible",
    body: "Métodos de pago fiables con opciones flexibles.",
  },
  {
    title: "Compra con tranquilidad",
    body: "Si no es lo que esperas, tenes 14 días para devolverlo.",
  },
  {
    title: "Garantía oficial",
    body: "Atención y soporte directo de la marca pre y post-venta.",
  },
];

export function Club() {
  return (
    <section className="w-full px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
      <div className="relative flex h-auto min-h-[520px] w-full items-stretch overflow-hidden rounded-[32px] lg:h-[600px]">
        <div className="absolute inset-0 bg-[url('/images/AdobeStock_621800072.jpeg')] bg-cover bg-[center_30%]" />
        <div className="absolute inset-0 bg-[var(--ink)]/30" />
        <div className="relative z-10 ml-auto flex h-full w-full max-w-[560px] flex-col justify-center gap-6 bg-gradient-to-l from-black via-black/80 to-transparent px-7 py-12 sm:px-[52px] sm:py-14">
          <div className="flex flex-col gap-2">
            <span className="font-body text-xs font-semibold tracking-[1.6px] text-[var(--white)]">
              CLUB MUGEEN
            </span>
            <h2 className="font-heading text-[32px] font-semibold leading-[1.02] text-[var(--white)] sm:text-[40px] lg:text-[48px]">
              Hacete miembro
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4">
            {benefits.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <span className="font-body text-base font-bold text-[var(--white)]">
                  {item.title}
                </span>
                <span className="font-body whitespace-pre-line text-xs leading-[1.4] text-[var(--white)]">
                  {item.body}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="font-body inline-flex w-fit items-center rounded-md bg-[var(--red)] px-[22px] py-3.5 text-sm font-semibold tracking-[0.4px] text-[var(--white)] transition-opacity hover:opacity-90"
          >
            Ser miembro
          </a>
        </div>
      </div>
    </section>
  );
}
