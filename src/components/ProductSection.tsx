type Product = {
  name: string;
  note: string;
  price: string;
  image: string;
  imageContain?: boolean;
  imageScale?: number;
};

type ProductSectionProps = {
  id: string;
  title: string;
  description: string;
  products: Product[];
};

export function ProductSection({
  id,
  title,
  description,
  products,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      className="flex w-full flex-col gap-7 bg-[var(--white)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]"
    >
      <div className="flex w-full items-end justify-between gap-6">
        <div className="flex max-w-[640px] flex-col gap-2">
          <h2 className="font-heading text-[28px] font-semibold leading-[1.02] text-[var(--ink)] sm:text-[36px] lg:text-[40px]">
            {title}
          </h2>
          <p className="font-body text-base leading-[1.45] text-[var(--muted)]">
            {description}
          </p>
        </div>
        <a
          href="#"
          className="font-body hidden shrink-0 text-[13px] font-medium text-[var(--muted)] transition-opacity hover:opacity-70 sm:block"
        >
          Ver todo
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <a
            key={product.name}
            href="#"
            className="group flex flex-col transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-[320px] items-center justify-center overflow-hidden rounded-[32px] bg-[var(--product-bg)] p-10 sm:h-[360px]">
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ transform: `scale(${product.imageScale ?? 1})` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.04] ${
                    product.imageContain ? "object-contain" : "object-cover"
                  }`}
                />
              </div>
            </div>
            <span className="font-heading mt-3 text-[15px] font-medium leading-[1.5] text-[var(--ink)]">
              {product.name}
            </span>
            <span className="font-body mt-1 text-[13px] leading-[1.5] text-[var(--muted)]">
              {product.note}
            </span>
            <span className="font-body mt-3 text-base font-semibold leading-[1.5] text-[var(--ink)]">
              {product.price}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
