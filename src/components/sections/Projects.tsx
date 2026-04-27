"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/icons";

const projects = [
  {
    title: "Notes App",
    description:
      "A full-stack notes management app with authentication, search, and dark mode. Engineered for speed and intuitive organization.",
    techStack: ["MongoDB", "Express", "React", "Node", "Tailwind CSS"],
    liveUrl: "https://notes-31ls.vercel.app/",
    githubUrl: "https://github.com/shreynaik1",
    image: "/projects/notes.png",
    isFeatured: true,
    category: "Full Stack",
    color: "from-indigo-600/20 to-blue-600/20",
  },
  {
    title: "CodeFlow",
    description:
      "A developer-focused project for improving workflow and productivity. Features a sleek interface and intelligent task management.",
    techStack: ["React", "Tailwind CSS"],
    liveUrl: "https://code-flow-jet.vercel.app/",
    githubUrl: "https://github.com/shreynaik1",
    image: "/projects/code-flow.png",
    isFeatured: true,
    category: "Productivity",
    color: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "DietCoke Website",
    description:
      "A creative frontend UI project with modern design and animations. A masterclass in modern frontend storytelling.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://diet-coke-nu.vercel.app/",
    githubUrl: "https://github.com/shreynaik1",
    image: "/projects/diet-coke.png",
    isFeatured: false,
    category: "Creative Dev",
    color: "from-rose-600/20 to-red-600/20",
  },
  {
    title: "Cyber Password Analyzer",
    description:
      "A tool that analyzes password strength and provides security insights. Implements real-time entropy calculation and vulnerability detection.",
    techStack: ["HTML5", "CSS3", "Vanilla JS"],
    liveUrl: "https://cyber-password-analyzer.vercel.app/",
    githubUrl: "https://github.com/shreynaik1",
    image: "/projects/password-analyzer.png",
    isFeatured: false,
    category: "Security Tool",
    color: "from-slate-800/20 to-emerald-900/20",
  },
];


export function Projects() {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between"
          >
            <div>
              <p className="text-[var(--color-accent)] font-bold tracking-[0.3em] uppercase text-xs mb-4">
                Case Studies
              </p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">
                Featured Projects<span className="text-[var(--color-accent)]">.</span>
              </h2>
            </div>
            <div className="hidden md:block text-slate-400 font-medium max-w-xs text-right">
              A selection of digital products built with focus on user experience and performance.
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/10] p-4 bg-slate-50 border border-slate-100 rounded-[2rem] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200">
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white/50 border border-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized={true}
                    className="object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[0px] group-hover:backdrop-blur-[2px]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
                  >
                    Live Preview
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="absolute bottom-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">
                    {project.liveUrl.replace('https://', '').replace('/', '')}
                  </p>
                </div>
                
                <div className="absolute top-6 right-6 z-20 flex gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 backdrop-blur-md transition-all shadow-xl border border-white/20"
                  >
                    <GithubIcon size={22} />
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {project.category}
                  </span>
                  <div className="h-px w-8 bg-slate-200" />
                  <div className="flex gap-2">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[10px] font-bold text-slate-950">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-black text-slate-950 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-slate-950 font-bold text-sm tracking-widest uppercase group/link"
                  >
                    <span className="relative">
                      Explore Project
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-950 transition-all group-hover/link:w-full" />
                    </span>
                    <ExternalLink size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-slate-100 border border-slate-200">
            <a 
              href="https://github.com/shreynaik1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-3"
            >
              Explore All Projects
              <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white">
                <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


