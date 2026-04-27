"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
         

          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.9]">
            Shrey <br />
            Naik<span className="text-[var(--color-accent)]">.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Computer Engineering Student & <span className="text-slate-900">MERN Stack Developer</span> building scalable digital products with a focus on minimalist design and robust architecture.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="w-full sm:w-auto px-12 py-5 bg-slate-950 text-white font-bold rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="group w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-950 font-bold rounded-full hover:border-slate-950 transition-all flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-transparent" />
      </motion.div>
    </section>
  );
}




