"use client";
import { Section } from "@/components/section";
import { skills } from "@/data/content";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

export function SkillsSection() {
  const radarData = skills[0].items.map((s) => ({ subject: s.name, A: s.level }));
  return (
    <Section id="skills" className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="grid gap-10 items-start">
        <div className="glass rounded-xl p-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius={90}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#a1a1aa", fontSize: 12 }} />
                <Radar dataKey="A" stroke="#818cf8" fill="#818cf8" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {skills.map((cat) => (
          <div key={cat.category} className="glass rounded-lg p-4">
            <div className="text-sm text-zinc-500 mb-2">{cat.category}</div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((i) => (
                <span key={i.name} className="px-3 py-1 rounded-full text-xs border border-zinc-300/50 dark:border-zinc-700/50 hover:scale-105 transition">
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
