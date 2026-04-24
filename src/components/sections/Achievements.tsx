"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Code2 } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4 justify-center"
        >
          <div className="h-px bg-slate-200 w-16 md:w-32"></div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Learning & Achievements</h2>
          <div className="h-px bg-slate-200 w-16 md:w-32"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 text-[var(--color-accent)]">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Expanding Horizons</h3>
            <p className="text-slate-600 leading-relaxed">
              Currently diving deep into <span className="text-slate-900 font-medium">Next.js</span> to master full-stack routing, server-side rendering, and building production-ready scalable apps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 text-[var(--color-accent)]">
              <Code2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Problem Solving</h3>
            <p className="text-slate-600 leading-relaxed">
              Actively practicing Data Structures and Algorithms in <span className="text-slate-900 font-medium">Java</span>, refining my logical thinking and writing optimized code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 text-[var(--color-accent)]">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">NPTEL Certified</h3>
            <p className="text-slate-600 leading-relaxed">
              Earned a certification in <span className="text-slate-900 font-medium">Python for Data Science</span>, strengthening my core analytical capabilities and Python proficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
