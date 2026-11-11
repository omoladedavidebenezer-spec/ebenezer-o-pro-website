import Link from "next/link";
import { ArrowUpRight, Globe2, Layers3, Megaphone, Play, Workflow } from "lucide-react";
import { PageFrame } from "@/components/site-shell";

export const metadata = { title: "Services | Ebenezer O Pro", description: "Explore website design, no-code apps, digital marketing, AI video and CRM automation services." };

const services = [
  {slug:"website-design",icon:Globe2,title:"Website Design & Development",desc:"Business websites, e-commerce stores, Shopify and WordPress builds, booking websites, landing pages and redesigns.",tools:"Shopify · WordPress · Wix"},
  {slug:"no-code-apps",icon:Layers3,title:"No-Code App Development",desc:"Business apps, client portals, internal tools and custom applications designed around your workflow.",tools:"Bubble · Adalo · Base44"},
  {slug:"digital-marketing",icon:Megaphone,title:"Social Media Management & Digital Marketing",desc:"Content planning, social media management, video editing, Meta ads, profile optimisation and local SEO.",tools:"Content · Meta Ads · Local SEO"},
  {slug:"ai-video",icon:Play,title:"AI Video & Creative Advertising",desc:"AI-assisted UGC concepts, product commercials, promotional videos and short-form creative advertising.",tools:"AI UGC · Product Ads · Video"},
  {slug:"crm-automation",icon:Workflow,title:"CRM, Automation & Business Systems",desc:"CRM setup, sales funnels, lead capture, email and SMS automation, Odoo systems and workflow improvements.",tools:"GoHighLevel · Odoo · Automation"}
];

export default function ServicesPage() {
 return <PageFrame>
  <section className="hero-grid hero-glow py-24 md:py-32"><div className="container"><p className="eyebrow mb-6">OUR SERVICES</p><h1 className="section-title max-w-4xl text-5xl md:text-7xl">Digital solutions that <span className="gold-text">work together.</span></h1><p className="mt-7 max-w-2xl leading-8 text-neutral-400">Choose the support that fits your next step. Each service can stand alone or work as part of a wider digital strategy.</p></div></section>
  <section className="section"><div className="container grid gap-5 md:grid-cols-2">{services.map((s,i)=>{const Icon=s.icon;return <article key={s.slug} className="service-card p-7 md:p-9"><div className="flex items-center justify-between"><Icon className="gold-text" size={30}/><span className="number-outline font-display text-3xl font-extrabold">0{i+1}</span></div><h2 className="mt-8 font-display text-2xl font-bold">{s.title}</h2><p className="mt-4 min-h-[84px] text-sm leading-7 text-neutral-400">{s.desc}</p><p className="mt-5 text-xs tracking-wide text-neutral-500">{s.tools}</p><Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold gold-text" href={`/services/${s.slug}`}>EXPLORE SERVICE <ArrowUpRight size={16}/></Link></article>})}</div></section>
 </PageFrame>;
}