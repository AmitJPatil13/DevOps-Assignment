"use client";
import { Section } from "@/components/section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { socials } from "@/data/content";
import { Mail, Github, Linkedin, Copy } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Please enter at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [copied, setCopied] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // placeholder: integrate with API/email service
    await new Promise((r) => setTimeout(r, 800));
    reset();
  };

  return (
    <Section id="contact" className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-xl p-6 space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input className="mt-1 w-full rounded-md bg-transparent border border-zinc-300/50 dark:border-zinc-700/50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" {...register("name")} />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input type="email" className="mt-1 w-full rounded-md bg-transparent border border-zinc-300/50 dark:border-zinc-700/50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@example.com" {...register("email")} />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-md bg-transparent border border-zinc-300/50 dark:border-zinc-700/50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="How can I help?" {...register("message")} />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
          </div>
          <button disabled={isSubmitting} className="px-5 h-11 rounded-full glass hover:scale-105 transition disabled:opacity-50" type="submit">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="space-y-4">
          <a href={socials.email} className="flex items-center gap-3 glass rounded-xl p-4">
            <Mail className="h-5 w-5" /> {socials.emailAddress}
          </a>
          <div className="flex items-center gap-3">
            <a href={socials.github} target="_blank" className="glass rounded-xl p-4 inline-flex items-center gap-3"><Github className="h-5 w-5" /> Github</a>
            <a href={socials.linkedin} target="_blank" className="glass rounded-xl p-4 inline-flex items-center gap-3"><Linkedin className="h-5 w-5" /> LinkedIn</a>
            <button onClick={() => { navigator.clipboard.writeText(socials.emailAddress); setCopied(true); setTimeout(()=>setCopied(false), 1200); }} className="glass rounded-xl p-4 inline-flex items-center gap-3">
              <Copy className="h-5 w-5" /> {copied ? "Copied" : "Copy Email"}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
