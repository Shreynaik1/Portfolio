"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export function Contact() {
  const contactMethods = [
    { 
      label: "Email", 
      value: "shreynaik315@gmail.com", 
    },
    { 
      label: "LinkedIn", 
      value: "linkedin.com/in/shreynaik1", 
      href: "https://www.linkedin.com/in/shreynaik1/"
    },
    { 
      label: "GitHub", 
      value: "github.com/shreynaik1", 
      href: "https://github.com/shreynaik1"
    },
  ];

  return (
    <footer id="contact" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          
          {/* Section Header */}
          <div>
            <p className="text-[var(--color-accent)] font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Get in Touch
            </p>
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-12">
              Let&apos;s Build <br />
              Something <br />
              Great<span className="text-[var(--color-accent)]">.</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-md leading-relaxed font-medium">
              I&apos;m currently open to new opportunities and interesting projects. 
              Let&apos;s turn your vision into a high-performance reality.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="grid grid-cols-1 gap-8">
              {contactMethods.map((item, i) => {
                const isEmail = item.label === "Email";
                const content = (
                  <>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-slate-950 transition-colors">
                      {item.label}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                        {item.value}
                      </p>
                      {!isEmail && (
                        <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-accent)]" />
                      )}
                    </div>
                  </>
                );

                if (isEmail) {
                  return (
                    <div
                      key={i}
                      className="group flex flex-col space-y-2 pb-8 border-b border-slate-50 transition-colors"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col space-y-2 pb-8 border-b border-slate-50 hover:border-slate-950 transition-colors"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-white font-black text-sm">
              S
            </div>
            <span className="text-slate-950 font-black tracking-tight uppercase text-sm">Shrey Naik</span>
          </div>

          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} Shrey Naik • Gujarat, India
          </p>


        </div>
      </div>
    </footer>
  );
}



