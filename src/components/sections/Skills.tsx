"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB (Atlas)"],
  },
  {
    title: "Programming",
    skills: ["Java (DSA)", "Python"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4 justify-end"
        >
          <div className="h-px bg-slate-200 w-full max-w-xs md:max-w-md"></div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Skills & Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[var(--color-accent)]/50 shadow-sm hover:shadow transition-all group"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-6 group-hover:text-[var(--color-accent)] transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-md border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
