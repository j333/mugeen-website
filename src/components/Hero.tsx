export function Hero() {
  return (
    <section className="relative flex h-[520px] w-full flex-col items-center justify-end overflow-hidden px-5 sm:h-[580px] sm:px-8 lg:h-[640px] lg:px-12">
      <div
        className="absolute inset-0 bg-[url('/playing-padel.jpg')] bg-cover bg-center"
        role="img"
        aria-label="Jugadores de pádel en cancha"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
      <div className="relative z-10 flex w-full max-w-[800px] flex-col items-center gap-10 text-center">
        <h1 className="font-heading w-full text-[44px] font-semibold leading-[0.92] text-[var(--white)] sm:text-[72px] lg:text-[104px]">
          Una Nueva Generación
        </h1>
        <p className="font-body w-full text-[15px] leading-[1.45] text-[var(--mist)] sm:text-base">
          Rendimiento premium para sacar tu mejor juego en la cancha.
        </p>
      </div>
    </section>
  );
}
