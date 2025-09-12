"use client";
import { Section } from "@/components/section";
import { bio, strengths, quickFacts } from "@/data/content";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <Section id="about" className="py-20">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl">
            {bio.summary}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {strengths.map((s) => (
              <motion.div key={s.title} whileHover={{ y: -4 }} className="glass rounded-xl p-4">
                <div className="font-medium mb-1">{s.title}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{s.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {quickFacts.map((f) => (
            <div key={f.label} className="glass rounded-lg p-4 flex items-center justify-between">
              <span className="text-sm text-zinc-500">{f.label}</span>
              <span className="font-semibold">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
