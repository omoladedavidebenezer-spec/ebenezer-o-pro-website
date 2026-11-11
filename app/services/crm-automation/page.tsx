import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageFrame } from "@/components/site-shell";

export const metadata = { title: "CRM, Automation & Business Systems | Ebenezer O Pro", description: "Bring leads, conversations and everyday processes into a clearer system so your business can follow up consistently and work with less manual repetition." };

export default function ServicePage() {
  return <PageFrame>
    <section className="hero-grid hero-glow py-24 md:py-32"><div className="container">
      <p className="eyebrow mb-6">CONNECT YOUR CUSTOMER JOURNEY</p>
      <h1 className="section-title max-w-4xl text-5xl md:text-7xl">CRM, Automation &amp; Business Systems</h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400">Bring leads, conversations and everyday processes into a clearer system so your business can follow up consistently and work with less manual repetition.</p>
      <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="gold-button">DISCUSS YOUR PROJECT <ArrowRight size={16}/></Link><Link href="/services" className="outline-button">ALL SERVICES</Link></div>
    </div></section>
    <section className="section"><div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
      <div><p className="eyebrow mb-5">WHAT’S INCLUDED</p><h2 className="section-title">The right pieces for <span className="gold-text">your next step.</span></h2><p className="mt-6 text-sm leading-7 text-neutral-500">Every project is scoped around your goals, audience and requirements. We’ll agree on the right deliverables before work begins.</p></div>
      <div className="service-card p-7 md:p-10"><ul className="space-y-5"><li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>GoHighLevel setup and configuration</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>CRM pipelines and contact management</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Funnels and lead-capture pages</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Email and SMS follow-up automation</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Odoo ERP and CRM configuration</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Workflow and process automation</li></ul><p className="mt-8 border-t border-white/10 pt-6 text-xs tracking-widest text-neutral-500">PLATFORMS: GoHighLevel · Odoo</p></div>
    </div></section>
    <section className="section bg-[#0e0e0e]"><div className="container max-w-4xl text-center"><p className="eyebrow mb-5">THE AIM</p><h2 className="section-title"><span className="gold-text">Useful work.</span> A clearer way forward.</h2><p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">A connected business system that helps organise enquiries, customer follow-up and operational workflows.</p><Link href="/contact" className="gold-button mt-9">LET’S TALK <ArrowRight size={16}/></Link></div></section>
  </PageFrame>;
}