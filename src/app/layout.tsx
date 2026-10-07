import type { Metadata } from "next";
import { IBM_Plex_Sans, Michroma } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Mugeen — Una Nueva Generación",
  description:
    "Paletas de pádel Mugeen 2027. Rendimiento élite para cada juego.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${michroma.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-[var(--white)] text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}
