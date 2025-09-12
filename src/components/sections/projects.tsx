"use client";
import { Section } from "@/components/section";
import { projects } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <Section id="projects" className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div key={p.title} whileHover={{ y: -6 }} className="group glass rounded-2xl overflow-hidden">
            <div className="relative aspect-video">
              <Image src={p.image || "/window.svg"} alt={p.title} fill className="object-contain p-8" />
            </div>
            <div className="p-5">
              <div className="font-medium mb-1">{p.title}</div>
              <div className="text-sm text-zinc-500 mb-3">{p.description}</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full border border-zinc-300/50 dark:border-zinc-700/50">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {p.live && (
                  <Link href={p.live} className="text-sm underline">View Live</Link>
                )}
                {p.code && (
                  <Link href={p.code} className="text-sm underline">View Code</Link>
                )}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(129,140,248,0.25)] opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
