export function Hero() {
  return (
    <section className="relative flex h-[520px] w-full flex-col justify-end overflow-hidden px-5 sm:h-[580px] sm:px-8 lg:h-[640px] lg:px-12">
      <div
        className="absolute inset-0 bg-[url('/playing-padel.jpg')] bg-cover bg-center"
        role="img"
        aria-label="Jugadores de pádel en cancha"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 flex w-full max-w-[800px] flex-col gap-5 pb-10 sm:pb-12">
        <h1 className="font-heading text-[44px] font-semibold leading-[0.92] text-[var(--white)] sm:text-[72px] lg:text-[104px]">
          Una Nueva Generación
        </h1>
        <p className="font-body max-w-[520px] text-[15px] leading-[1.45] text-[var(--mist)] sm:text-base">
          Paletas de pádel Mugeen 2027. Rendimiento élite para cada juego.
        </p>
      </div>
    </section>
  );
}
