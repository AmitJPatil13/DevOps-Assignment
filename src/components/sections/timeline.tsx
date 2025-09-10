import { Section } from "@/components/section";
import { timeline } from "@/data/content";
import { motion } from "framer-motion";

export function TimelineSection() {
  return (
    <Section id="timeline" className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Experience & Education</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-zinc-300/60 dark:bg-zinc-700/60" />
        <div className="space-y-8">
          {timeline.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-0 md:left-2 top-1.5 h-3 w-3 rounded-full bg-emerald-400" />
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-zinc-500">{t.period}</div>
                <div className="font-medium">{t.title} · {t.org}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-300">{t.details}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
