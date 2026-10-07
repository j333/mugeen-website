import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Paletas } from "../components/Paletas";
import { Categorias } from "../components/Categorias";
import { ProductSection } from "../components/ProductSection";
import { Historia } from "../components/Historia";
import { Noticias } from "../components/Noticias";
import { Club } from "../components/Club";
import { Footer } from "../components/Footer";

const ropa = [
  {
    name: "Chomba",
    note: "Piqué técnico, logo pecho",
    price: "$ 64,990",
    image: "/images/generated-4.webp",
    imageContain: true,
    imageScale: 2.3,
  },
  {
    name: "Remera",
    note: "Jersey performance",
    price: "$ 42,990",
    image: "/images/generated-7.webp",
    imageContain: true,
  },
  {
    name: "Short",
    note: "Short stretch, bolsillo",
    price: "$ 78,990",
    image: "/images/generated-6.webp",
    imageContain: true,
  },
  {
    name: "Medias",
    note: "Tobilleras técnicas x2",
    price: "$ 18,990",
    image: "/images/generated-5.webp",
    imageContain: true,
    imageScale: 2.45,
  },
];

const equipamiento = [
  {
    name: "Paleteros",
    note: "Una o dos palas",
    price: "$ 52,990",
    image: "/images/generated-7.png",
    imageContain: true,
  },
  {
    name: "Pelotas",
    note: "Tubo de partido",
    price: "$ 52,990",
    image: "/images/generated-10.png",
    imageContain: true,
  },
  {
    name: "Overgrips",
    note: "Agarre y muñeca",
    price: "$ 52,990",
    image: "/images/generated-9.png",
    imageContain: true,
  },
  {
    name: "Remera",
    note: "Tela liviana",
    price: "$ 52,990",
    image: "/images/generated-11.png",
    imageContain: true,
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <Nav />
      <main className="flex w-full flex-col">
        <Hero />
        <Paletas />
        <Categorias />
        <ProductSection
          id="ropa"
          title="Ropa"
          description="Prendas técnicas de pádel: corte atlético, logo sutil y tela que acompaña el juego."
          products={ropa}
        />
        <ProductSection
          id="equipamiento"
          title="Equipamiento"
          description="Elegí por dónde empezar: la pala, la ropa o lo que va en el bolso."
          products={equipamiento}
        />
        <Historia />
        <Noticias />
        <Club />
      </main>
      <Footer />
    </div>
  );
}
