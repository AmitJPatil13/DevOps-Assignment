"use client";
import { FuturisticParticles } from "@/components/particles";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { bio, socials } from "@/data/content";
import { motion } from "framer-motion";
import Link from "next/link";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { TimelineSection } from "@/components/sections/timeline";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative min-h-[90dvh] flex items-center">
        <FuturisticParticles />
        <Section className="pt-28 pb-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for opportunities
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              {bio.name}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
              {bio.tagline} — {bio.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="px-6 h-11 rounded-full glass inline-flex items-center justify-center hover:scale-105 transition">
                Hire Me
              </Link>
              <a href={socials.resume} className="px-6 h-11 rounded-full border border-zinc-300 dark:border-zinc-700 inline-flex items-center justify-center hover:scale-105 transition">
                Download Resume
              </a>
            </div>
          </div>
          
        </Section>
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <TestimonialsSection />
      <ContactSection />

      <footer className="py-12 border-t border-zinc-200/50 dark:border-zinc-800/50">
        <Section className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Ajay Patil</p>
          <a href="#" className="text-sm hover:opacity-80">Back to top ↑</a>
        </Section>
      </footer>
    </div>
  );
}
