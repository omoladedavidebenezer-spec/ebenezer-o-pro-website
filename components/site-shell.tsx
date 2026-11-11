"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container flex min-h-[78px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Ebenezer O Pro home" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center border border-[#d4af37] font-display text-sm font-extrabold tracking-tight text-[#d4af37]">EO<span className="text-white">P</span></span>
          <span className="font-display text-sm font-extrabold tracking-wide">EBENEZER <span className="gold-text">O PRO</span><span className="block text-[9px] font-medium tracking-[.25em] text-neutral-500">DIGITAL CREATIVE STUDIO</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(link => <Link key={link.href} className="nav-link" href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="gold-button hidden !px-5 !py-3 sm:inline-flex">LET’S TALK <ArrowUpRight size={15}/></Link>
          <button type="button" className="rounded border border-white/15 p-2 text-[#d4af37] lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#090909] px-6 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="container flex flex-col gap-1">
          {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/5 py-3 text-sm text-neutral-200 hover:text-[#d4af37]">{link.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)} className="gold-button mt-4">START A PROJECT <ArrowUpRight size={15}/></Link>
        </div>
      </nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-[#d4af37] font-display text-sm font-extrabold text-[#d4af37]">EO<span className="text-white">P</span></span>
            <span className="font-display text-sm font-extrabold">EBENEZER <span className="gold-text">O PRO</span></span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">We build, create and help businesses grow with thoughtful digital solutions.</p>
          <a className="mt-3 inline-block text-sm text-neutral-300 hover:text-[#d4af37]" href="mailto:omoladedavidebenezer@gmail.com">omoladedavidebenezer@gmail.com</a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-neutral-400">
          {links.slice(1).map(link => <Link key={link.href} href={link.href} className="hover:text-[#d4af37]">{link.label}</Link>)}
          <Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-xs text-neutral-600">© {new Date().getFullYear()} Ebenezer O Pro. All rights reserved.</div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader/><main>{children}</main><SiteFooter/></>;
}