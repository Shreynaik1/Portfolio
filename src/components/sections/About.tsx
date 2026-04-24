"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">About Me</h2>
          <div className="h-px bg-slate-200 w-full max-w-xs md:max-w-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 space-y-6 text-lg leading-relaxed"
          >
            <p>
              I am a passionate <span className="text-[var(--color-accent)] font-medium">MERN stack developer</span> currently in my 3rd year of engineering. I specialize in building modern, performant web applications using React and Node.js.
            </p>
            <p>
              My journey in software development is driven by an eagerness to build intuitive and seamless user experiences. Currently, I am expanding my horizons by learning <span className="text-slate-900 font-medium">Next.js</span> to construct production-ready, full-stack applications with optimal SEO and performance.
            </p>
            <p>
              Beyond web development, I am deeply focused on strengthening my analytical and logical thinking. I actively practice Problem Solving through <span className="text-slate-900 font-medium">Data Structures and Algorithms in Java</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 blur-[64px]" />
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Quick Facts</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[var(--color-accent)] mr-3">▹</span>
                <span className="text-slate-700">Degree: B.Tech in Engineering (3rd Year)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-accent)] mr-3">▹</span>
                <span className="text-slate-700">Location: Gujarat, India</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-accent)] mr-3">▹</span>
                <span className="text-slate-700">Focus: Full Stack Web Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-accent)] mr-3">▹</span>
                <span className="text-slate-700">Core: React, Node.js, Next.js</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
