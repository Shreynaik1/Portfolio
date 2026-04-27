"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Section Header (Sticks on scroll for desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="text-[var(--color-accent)] font-bold tracking-[0.3em] uppercase text-xs mb-4">
              The Story
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none mb-8">
              Engineer<span className="text-[var(--color-accent)]">.</span><br />
              Creator<span className="text-[var(--color-accent)]">.</span><br />
              Thinker<span className="text-[var(--color-accent)]">.</span>
            </h2>
            <div className="w-12 h-1 bg-slate-950" />
          </div>

          {/* Main Bio Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="text-slate-600 space-y-8 text-xl leading-relaxed font-medium">
              <p>
                I am a <span className="text-slate-950">MERN Stack Engineer</span> with a deep passion for building high-performance web applications. My expertise lies at the intersection of robust backend logic and pixel-perfect frontend experiences.
              </p>
              <p>
                I don&apos;t just write code; I architect solutions. Whether it&apos;s building a complex notes ecosystem or a high-end brand landing page, my focus is always on <span className="text-slate-950 underline decoration-[var(--color-accent)]/30 underline-offset-8">performance, efficiency, and user experience.</span>
              </p>
              <p>
                Currently, I&apos;m focused on mastering <span className="text-[var(--color-accent)] font-serif italic">Full Stack Development</span> and refining my logical thinking through competitive programming in Java.
              </p>
            </div>

            {/* Quick Facts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
              {[
                { label: "Education", value: "B.Tech Computer Engineering" },
                { label: "Location", value: "Gujarat, India" },
                { label: "Focus", value: "Full Stack Systems" },
                { label: "Core", value: "MERN & Next.js" },
              ].map((fact, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{fact.label}</p>
                  <p className="text-2xl font-black text-slate-950 tracking-tight">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
