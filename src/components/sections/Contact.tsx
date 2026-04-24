"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <footer id="contact" className="relative py-24 border-t border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[var(--color-accent)] font-mono text-sm uppercase tracking-widest mb-4">
            What&apos;s Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h3>
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to easily connect, my inbox is always open. I&apos;ll try my best to get back to you!
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shreynaik315@gmail.com&su=Hiring%20Inquiry&body=Hello%20Shrey%20Naik,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-md font-medium text-lg transition-all"
          >
            Say Hello <ArrowRight size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-slate-200 flex flex-col items-center"
        >
          <div className="flex justify-center gap-6 md:gap-12 mb-16">
            <a
              href="https://github.com/shreynaik1"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex flex-col items-center gap-3"
            >
              <div className="text-slate-500 group-hover/btn:text-[var(--color-accent)] group-hover/btn:-translate-y-1 transition-all p-4 bg-white rounded-xl border border-slate-200 group-hover/btn:border-[var(--color-accent)]/50 shadow-sm hover:shadow-md">
                <GithubIcon width={24} height={24} />
              </div>
              <span className="text-slate-600 font-mono text-sm tracking-wider uppercase group-hover/btn:text-slate-900 transition-colors">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shreynaik1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex flex-col items-center gap-3"
            >
              <div className="text-slate-500 group-hover/btn:text-[var(--color-accent)] group-hover/btn:-translate-y-1 transition-all p-4 bg-white rounded-xl border border-slate-200 group-hover/btn:border-[var(--color-accent)]/50 shadow-sm hover:shadow-md">
                <LinkedinIcon width={24} height={24} />
              </div>
              <span className="text-slate-600 font-mono text-sm tracking-wider uppercase group-hover/btn:text-slate-900 transition-colors">LinkedIn</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shreynaik315@gmail.com&su=Hiring%20Inquiry&body=Hello%20Shrey%20Naik,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              className="group/btn flex flex-col items-center gap-3"
            >
              <div className="text-slate-500 group-hover/btn:text-[var(--color-accent)] group-hover/btn:-translate-y-1 transition-all p-4 bg-white rounded-xl border border-slate-200 group-hover/btn:border-[var(--color-accent)]/50 shadow-sm hover:shadow-md">
                <Mail size={24} />
              </div>
              <span className="text-slate-600 font-mono text-sm tracking-wider uppercase group-hover/btn:text-slate-900 transition-colors">Email</span>
            </a>
          </div>

          <div className="group flex flex-col items-center gap-2">
            <p className="text-slate-500 text-sm font-medium tracking-wide">
              Designed & Built by <span className="text-slate-900 group-hover:text-[var(--color-accent)] transition-colors">Shrey Naik</span>
            </p>
            <p className="text-slate-400 font-mono text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
