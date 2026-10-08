export function Historia() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1920px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
      <div className="relative flex h-[480px] w-full items-stretch overflow-hidden rounded-[32px] sm:h-[540px] lg:h-[600px]">
        <div className="absolute inset-0 bg-[url('/images/generated-8.png')] bg-cover bg-center" />
        <div className="relative z-10 flex h-full w-full max-w-[560px] flex-col justify-center gap-6 bg-gradient-to-r from-black via-black/70 to-transparent px-7 py-12 sm:px-[52px] sm:py-14">
          <div className="flex flex-col gap-2">
            <span className="font-body text-xs font-semibold tracking-[1.6px] text-[var(--white)]">
              DESDE 1980
            </span>
            <h2 className="font-heading text-[32px] font-semibold leading-[1.02] text-[var(--white)] sm:text-[40px] lg:text-[48px]">
              Nuestra Historia
            </h2>
          </div>
          <p className="font-body max-w-[420px] text-base leading-[1.45] text-[var(--white)]">
            Conoce cómo comenzó nuestra historia y qué nos motiva a creer día a
            día.
          </p>
          <a
            href="#"
            className="font-body inline-flex w-fit items-center rounded-md bg-[var(--red)] px-[22px] py-3.5 text-sm font-semibold tracking-[0.4px] text-[var(--white)] transition-opacity hover:opacity-90"
          >
            Conocer más
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
