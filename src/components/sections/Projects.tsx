"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const projects = [
  {
    title: "CodeFlow",
    description: "A modern frontend project focused on delivering exceptional UI/UX. Features a highly responsive design with interactive elements and smooth animations.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://code-flow-jet.vercel.app/",
    githubUrl: "#",
    isFeatured: true,
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive full-stack application for managing personal finances. Includes secure user authentication, add/delete expense functionality, and seamless history tracking.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
          <div className="h-px bg-slate-200 w-full max-w-xs md:max-w-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-200 hover:border-[var(--color-accent)]/50 flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-[var(--color-accent)]">
                  <FolderGit2 size={40} strokeWidth={1} />
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-[var(--color-accent)] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon width={22} height={22} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-[var(--color-accent)] transition-colors"
                      aria-label="Live Project"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                <a href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 font-mono font-medium">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
