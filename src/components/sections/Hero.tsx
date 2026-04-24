"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Subtle Background decoration */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-4">
                Hi, my name is
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                Shrey Naik.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-500 tracking-tight leading-tight mb-6">
                I build scalable web applications.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                I am a passionate <span className="text-[var(--color-accent)] font-semibold">MERN Stack Developer</span> currently in my 3rd year of engineering. I specialize in building modern, production-ready full-stack applications with an emphasis on seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex-shrink-0"
              >
                View Projects
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-[var(--color-accent)] text-base font-bold rounded-lg text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)]/5 hover:-translate-y-1 transition-all flex-shrink-0"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 sm:w-80 lg:w-[380px] aspect-[4/5]">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-4 border-[var(--color-accent)] rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform duration-300 hover:translate-x-2 hover:translate-y-2"></div>
              
              {/* Profile Image Container */}
              <div className="absolute inset-0 bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/profile.jpg"
                  alt="Shrey Naik Profile"
                  fill
                  unoptimized={true}
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover object-center hover:scale-105 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
