import Link from "next/link";
import { ArrowRight, Compass, Lightbulb, Target } from "lucide-react";
import { PageFrame } from "@/components/site-shell";

export const metadata = { title: "About Us | Ebenezer O Pro", description: "Learn about Ebenezer O Pro and our approach to creative digital solutions." };

export default function AboutPage() {
  return <PageFrame>
    <section className="hero-grid hero-glow py-24 md:py-32"><div className="container">
      <p className="eyebrow mb-6">ABOUT EBENEZER O PRO</p>
      <h1 className="section-title max-w-4xl text-5xl md:text-7xl">A creative digital partner for <span className="gold-text">business growth.</span></h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400">We bring design, technology and creative marketing together to help businesses build a stronger online presence and work more effectively.</p>
    </div></section>
    <section className="section"><div className="container grid gap-12 lg:grid-cols-2">
      <div><p className="eyebrow mb-5">OUR STORY</p><h2 className="section-title">Good ideas deserve <span className="gold-text">good execution.</span></h2></div>
      <div className="space-y-5 text-sm leading-8 text-neutral-400"><p>Ebenezer O Pro exists to make useful digital solutions more accessible to businesses, creators and growing brands. From a first website to a connected customer journey, our work is shaped around the real needs of each project.</p><p>We combine practical thinking with creative execution across websites, no-code applications, digital marketing, AI-assisted video and business systems.</p><p>Our focus is straightforward: understand the goal, agree on the right solution, and deliver work that is clear, considered and useful.</p></div>
    </div></section>
    <section className="section bg-[#0e0e0e]"><div className="container"><p className="eyebrow mb-5">WHAT GUIDES US</p><h2 className="section-title">The principles behind <span className="gold-text">the work.</span></h2><div className="mt-12 grid gap-5 md:grid-cols-3">
      {[{icon:Target,title:"Purpose first",text:"Every project starts with understanding what the business needs to achieve."},{icon:Lightbulb,title:"Creative thinking",text:"We look for clear, thoughtful ways to make brands and experiences stand out."},{icon:Compass,title:"Practical delivery",text:"We value communication, useful details and solutions that work in the real world."}].map(item=>{const Icon=item.icon;return <article key={item.title} className="service-card p-7"><Icon className="gold-text" size={28}/><h3 className="mt-7 font-display text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-neutral-500">{item.text}</p></article>})}
    </div></div></section>
    <section className="section"><div className="container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow mb-4">LET’S WORK TOGETHER</p><h2 className="section-title">Have an idea to <span className="gold-text">move forward?</span></h2></div><Link href="/contact" className="gold-button">TALK ABOUT YOUR PROJECT <ArrowRight size={16}/></Link></div></section>
  </PageFrame>;
}