import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageFrame } from "@/components/site-shell";

export const metadata = { title: "Social Media Management & Digital Marketing | Ebenezer O Pro", description: "Build a more consistent brand presence with thoughtful content, practical planning and campaigns designed to reach the right audience." };

export default function ServicePage() {
  return <PageFrame>
    <section className="hero-grid hero-glow py-24 md:py-32"><div className="container">
      <p className="eyebrow mb-6">SHOW UP WITH PURPOSE AND CONSISTENCY</p>
      <h1 className="section-title max-w-4xl text-5xl md:text-7xl">Social Media Management &amp; Digital Marketing</h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400">Build a more consistent brand presence with thoughtful content, practical planning and campaigns designed to reach the right audience.</p>
      <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="gold-button">DISCUSS YOUR PROJECT <ArrowRight size={16}/></Link><Link href="/services" className="outline-button">ALL SERVICES</Link></div>
    </div></section>
    <section className="section"><div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
      <div><p className="eyebrow mb-5">WHAT’S INCLUDED</p><h2 className="section-title">The right pieces for <span className="gold-text">your next step.</span></h2><p className="mt-6 text-sm leading-7 text-neutral-500">Every project is scoped around your goals, audience and requirements. We’ll agree on the right deliverables before work begins.</p></div>
      <div className="service-card p-7 md:p-10"><ul className="space-y-5"><li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Social media management and content planning</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Social post design and captions</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Short-form video editing</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Facebook and Instagram advertising</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Profile optimisation and local SEO</li>
<li className="flex gap-3 text-sm leading-6 text-neutral-300"><CheckCircle2 className="mt-0.5 shrink-0 gold-text" size={18}/>Google Business Profile management</li></ul></div>
    </div></section>
    <section className="section bg-[#0e0e0e]"><div className="container max-w-4xl text-center"><p className="eyebrow mb-5">THE AIM</p><h2 className="section-title"><span className="gold-text">Useful work.</span> A clearer way forward.</h2><p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">A clearer, more consistent digital presence with content and campaigns connected to your business goals.</p><Link href="/contact" className="gold-button mt-9">LET’S TALK <ArrowRight size={16}/></Link></div></section>
  </PageFrame>;
}