"use client"

import { useEffect, useState } from "react"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Logo } from "./Logo"

const links = [
  { label: "Paletas", href: "#paletas", accent: false },
  { label: "Ropa", href: "#ropa", accent: false },
  { label: "Equipo", href: "#equipo", accent: false },
  { label: "Ofertas", href: "#ofertas", accent: true },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((open) => !open)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    const media = window.matchMedia("(min-width: 768px)")
    const handleMediaChange = () => {
      if (media.matches) setIsOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    media.addEventListener("change", handleMediaChange)
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      media.removeEventListener("change", handleMediaChange)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header className="nav-bar sticky top-0 z-50 flex w-full items-center justify-between bg-[var(--white)] px-5 sm:px-8 lg:px-12">
      <a href="#" className="shrink-0" aria-label="Mugeen inicio" onClick={handleClose}>
        <Logo className="h-[28px] w-[132px] sm:h-[31px] sm:w-[148px]" />
      </a>

      <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`font-body text-[15px] leading-[1.4] tracking-[0.2px] transition-opacity hover:opacity-70 ${
              link.accent
                ? "font-semibold text-[var(--red)]"
                : "font-medium text-[var(--ink)]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-1 sm:gap-[18px]">
        <button
          type="button"
          aria-label="Buscar"
          className="flex size-11 items-center justify-center text-[var(--ink)] transition-opacity hover:opacity-70"
        >
          <Search size={20} strokeWidth={1.75} />
        </button>
        <button
          type="button"
          aria-label="Cuenta"
          className="hidden size-11 items-center justify-center text-[var(--ink)] transition-opacity hover:opacity-70 sm:flex"
        >
          <User size={20} strokeWidth={1.75} />
        </button>
        <button
          type="button"
          aria-label="Bolsa"
          className="flex size-11 items-center justify-center text-[var(--ink)] transition-opacity hover:opacity-70"
        >
          <ShoppingBag size={20} strokeWidth={1.75} />
        </button>
        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={handleToggle}
          className="flex size-11 items-center justify-center text-[var(--ink)] transition-opacity hover:opacity-70 md:hidden"
        >
          {isOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={handleClose}
            className="fixed inset-0 top-[76px] z-40 bg-black/40 md:hidden"
          />
          <nav
            id="menu-mobile"
            aria-label="Principal"
            className="absolute inset-x-0 top-full z-50 flex flex-col border-t border-[var(--line)] bg-[var(--white)] px-5 py-2 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleClose}
                className={`flex min-h-12 items-center font-body text-lg leading-[1.4] tracking-[0.2px] ${
                  link.accent
                    ? "font-semibold text-[var(--red)]"
                    : "font-medium text-[var(--ink)]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cuenta"
              onClick={handleClose}
              className="flex min-h-12 items-center gap-3 border-t border-[var(--line)] font-body text-base font-medium text-[var(--ink)] sm:hidden"
            >
              <User size={20} strokeWidth={1.75} />
              Cuenta
            </a>
          </nav>
        </>
      ) : null}
    </header>
  )
}
