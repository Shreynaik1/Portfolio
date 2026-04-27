"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    color: "from-blue-500/10 to-cyan-500/10",
    accent: "text-blue-600",
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    color: "from-emerald-500/10 to-green-500/10",
    accent: "text-emerald-600",
  },
  {
    title: "Languages & Tools",
    icon: Code2,
    skills: ["Java (DSA)", "Python", "Git", "Vercel", "Render"],
    color: "from-amber-500/10 to-orange-500/10",
    accent: "text-amber-600",
  },
];




export function Skills() {
  return (
    <section id="skills" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--color-accent)] font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Capability
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">
              Tech Stack<span className="text-[var(--color-accent)]">.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-950">
                  <category.icon size={22} />
                </div>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="group flex items-center justify-between py-3 border-b border-slate-50 transition-colors hover:border-slate-950">
                    <span className="text-lg font-medium text-slate-600 group-hover:text-slate-950 transition-colors">
                      {skill}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-[var(--color-accent)] transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


