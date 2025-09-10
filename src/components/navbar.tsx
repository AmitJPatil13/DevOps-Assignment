"use client";

import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";
import { socials, bio } from "@/data/content";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight text-lg">
          {bio.name.split(" ")[0]}<span className="text-zinc-500">.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#skills" className="hover:opacity-80 transition-opacity">Skills</a>
          <a href="#projects" className="hover:opacity-80 transition-opacity">Projects</a>
          <a href="#timeline" className="hover:opacity-80 transition-opacity">Timeline</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={socials.github} target="_blank" rel="noreferrer" className="glass h-10 w-10 inline-flex items-center justify-center rounded-full">
            <Github className="h-5 w-5" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="glass h-10 w-10 inline-flex items-center justify-center rounded-full">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={socials.leetcode} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 glass px-3 h-10 rounded-full text-sm">
            LC
          </a>
          <a href={socials.resume} className="hidden sm:inline-flex items-center gap-2 glass px-4 h-10 rounded-full text-sm">
            <FileText className="h-4 w-4" /> Resume
          </a>
          {/* ThemeToggle removed for dark-only site */}
        </div>
      </div>
    </header>
  );
}


