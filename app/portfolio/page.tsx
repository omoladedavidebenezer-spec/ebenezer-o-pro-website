import Link from "next/link";
import { ArrowUpRight, Globe2, Instagram, Video } from "lucide-react";
import { PageFrame } from "@/components/site-shell";

export const metadata = {
  title: "Portfolio | Ebenezer O Pro",
  description: "Explore website design, social media management and creative video work by Ebenezer O Pro."
};

const websites = [
  { name: "Royalty Braids & Weave", type: "Beauty & Hair", url: "https://www.royaltybraidsandweave.com/", detail: "A beauty business website presenting braiding services, locations and appointment booking." },
  { name: "Real Estate of Florida", type: "Real Estate", url: "https://www.realestateofflorida.com/", detail: "A real estate website with property search, listings and buyer and seller resources." },
  { name: "Liberty Coach", type: "Luxury Motorcoaches", url: "https://libertycoach.com/", detail: "A luxury motorcoach website showcasing featured coaches, inventory and the brand story." },
  { name: "Live Florida Realty", type: "Real Estate", url: "https://www.liveflrealty.com/", detail: "A real estate brokerage website introducing the team and its Central Florida services." },
  { name: "Enhance Braiding Salon", type: "Beauty & Hair", url: "https://enhancebraidingsalon.com/", detail: "A salon website highlighting specialist braiding services, helpful information and appointment booking." }
];

const videos = [
  { title: "Luxury Handbag Product Film", category: "Fashion / Product Commercial", src: "/videos/luxury-handbag-commercial.mp4", description: "A close-up product film highlighting the handbag’s texture, hardware and finish.", layout: "landscape" },
  { title: "Perfume Model Advertisement", category: "Beauty / AI UGC", src: "/videos/perfume-model-commercial.mp4", description: "A model-led fragrance advertisement with an editorial beauty direction.", layout: "portrait" },
  { title: "Pink Handbag Product Showcase", category: "Fashion / Product Commercial", src: "/videos/pink-handbag-showcase.mp4", description: "A clean product showcase featuring a patterned handbag and its design details.", layout: "portrait" }
];

const social = [
  { name: "PT Prunchy", url: "https://www.instagram.com/pt_prunchy/", type: "Fitness & Lifestyle" },
  { name: "Mariolaw EliteFit", url: "https://www.instagram.com/mariolaw_elitefit/", type: "Fitness" },
  { name: "Baeckerei Müsch", url: "https://www.instagram.com/baeckerei_muesch/", type: "Bakery" }
];

function ProjectLink({ url, children }: { url: string; children: React.ReactNode }) {
  return <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold tracking-wide gold-text hover:text-white">{children} <ArrowUpRight size={15}/></a>;
}

export default function PortfolioPage() {
  return <PageFrame><main>
    <section className="hero-grid hero-glow py-24 md:py-32"><div className="container"><p className="eyebrow mb-6">OUR PORTFOLIO</p><h1 className="section-title max-w-4xl text-5xl md:text-7xl">Work that reflects <span className="gold-text">our creativity.</span></h1><p className="mt-7 max-w-2xl leading-8 text-neutral-400">A selection of website projects and social media accounts connected to our work. Explore each live project below.</p></div></section>
    <section className="section"><div className="container">
      <div className="mb-10 flex items-center gap-3"><Globe2 className="gold-text" size={22}/><div><p className="eyebrow">01 / WEBSITE DESIGN & DEVELOPMENT</p><h2 className="mt-2 font-display text-3xl font-bold">Websites</h2></div></div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{websites.map((p, i) => <article key={p.name} className="service-card flex min-h-[245px] flex-col p-7"><div className="flex items-center justify-between"><span className="eyebrow">{p.type}</span><span className="number-outline font-display text-2xl font-extrabold">0{i + 1}</span></div><h3 className="mt-8 font-display text-xl font-bold">{p.name}</h3><p className="mt-3 flex-1 text-sm leading-7 text-neutral-500">{p.detail}</p><div className="mt-6"><ProjectLink url={p.url}>VIEW WEBSITE</ProjectLink></div></article>)}</div>
    </div></section>
    <section className="section bg-[#0e0e0e]"><div className="container">
      <div className="mb-10 flex items-center gap-3"><Instagram className="gold-text" size={22}/><div><p className="eyebrow">02 / SOCIAL MEDIA MANAGEMENT</p><h2 className="mt-2 font-display text-3xl font-bold">Social media</h2></div></div>
      <p className="mb-8 max-w-2xl leading-7 text-neutral-500">Explore these Instagram profiles connected to our social media management work.</p>
      <div className="grid gap-5 md:grid-cols-3">{social.map((p, i) => <article key={p.name} className="service-card p-7"><span className="eyebrow">0{i + 1} / {p.type}</span><h3 className="mt-7 font-display text-xl font-bold">{p.name}</h3><div className="mt-6"><ProjectLink url={p.url}>VIEW INSTAGRAM PROFILE</ProjectLink></div></article>)}</div>
    </div></section>
    <section className="section"><div className="container"><div className="mb-8 flex items-center gap-3"><Video className="gold-text" size={22}/><div><p className="eyebrow">03 / AI VIDEO & CREATIVE ADVERTISING</p><h2 className="mt-2 font-display text-3xl font-bold">Video projects</h2></div></div><div className="border border-white/10 bg-[#111] p-8 md:p-10"><p className="mb-8 max-w-2xl leading-8 text-neutral-400">A selection of original AI-assisted product and promotional video concepts created for fashion and beauty advertising.</p><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{videos.map((v) => <article key={v.src} className="service-card overflow-hidden"><div className={v.layout === "portrait" ? "mx-auto aspect-[9/16] max-h-[430px] bg-black" : "aspect-video bg-black"}><video className="h-full w-full object-contain" controls preload="metadata" playsInline><source src={v.src} type="video/mp4"/>Your browser does not support the video element.</video></div><div className="p-6"><p className="eyebrow">{v.category}</p><h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3><p className="mt-3 text-sm leading-7 text-neutral-500">{v.description}</p></div></article>)}</div></div></div></section>
    <section className="section bg-[#17140c]"><div className="container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow mb-4">HAVE A PROJECT IN MIND?</p><h2 className="section-title text-3xl md:text-4xl">Let’s create something <span className="gold-text">great.</span></h2></div><Link href="/contact" className="gold-button">LET’S TALK <ArrowUpRight size={16}/></Link></div></section>
  </main></PageFrame>;
}
