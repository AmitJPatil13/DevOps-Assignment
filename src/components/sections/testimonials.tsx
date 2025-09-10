import { Section } from "@/components/section";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  if (!testimonials.length) return null;
  return (
    <Section className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="glass rounded-xl p-6">
            <blockquote className="text-lg">“{t.quote}”</blockquote>
            <div className="mt-3 text-sm text-zinc-500">— {t.by}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
