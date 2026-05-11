import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Server, BookOpen, Shield, Brain } from "lucide-react";

const PROJECTS = [
  {
    title: "Portfolio Website",
    blurb: "This very site — cinematic, animated, hand-crafted with React + Tailwind + Framer Motion.",
    tags: ["React","Tailwind","Framer"],
    icon: Globe,
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    title: "VPS Hosting Platform",
    blurb: "A control-panel style dashboard to spin up, monitor and SSH into Linux servers in seconds.",
    tags: ["Next.js","Node","Linux","Docker"],
    icon: Server,
    accent: "from-neon-blue to-neon-purple",
  },
  {
    title: "Anime / Manga Tracker",
    blurb: "Track what you're watching and reading, with a beautiful library and weekly stats.",
    tags: ["React","API","TypeScript"],
    icon: BookOpen,
    accent: "from-neon-purple to-neon-pink",
  },
  {
    title: "Cybersecurity Toolkit",
    blurb: "A friendly UI over recon, hashing and vuln-scan tools — for learning, not for chaos.",
    tags: ["Python","Linux","CLI"],
    icon: Shield,
    accent: "from-neon-pink to-neon-purple",
  },
  {
    title: "AI Tools Dashboard",
    blurb: "One place for all my favorite LLM workflows — chat, generate, summarize, automate.",
    tags: ["AI","React","Edge"],
    icon: Brain,
    accent: "from-neon-cyan to-neon-purple",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14 flex items-end justify-between gap-6"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">// 02 — projects</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-6xl">
            Things I've <span className="gradient-text">shipped</span> &amp; broken.
          </h2>
        </div>
        <a href="#contact" className="hidden font-mono text-sm text-muted-foreground hover:text-foreground md:inline-flex">
          got an idea? →
        </a>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className={`group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
              i === 0 ? "lg:col-span-4" : i === 1 ? "lg:col-span-2" : i === 2 ? "lg:col-span-2" : i === 3 ? "lg:col-span-2" : "lg:col-span-2"
            }`}
            data-cursor="hover"
          >
            <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition duration-500 group-hover:opacity-30`} />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${p.accent} text-background shadow-lg`}>
                  <p.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </div>

              {/* mock preview */}
              <div className="mt-6 h-32 overflow-hidden rounded-xl border border-white/5 bg-black/30 p-3 font-mono text-[10px] text-muted-foreground">
                <div className="mb-2 flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-green-500/70" />
                </div>
                <div><span className="text-neon-cyan">$</span> running <span className="text-neon-purple">{p.title.toLowerCase().replace(/ /g,"-")}</span></div>
                <div className="opacity-60">› build complete in 1.24s</div>
                <div className="opacity-60">› ready on http://localhost:3000</div>
                <motion.div
                  className="mt-2 h-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: i * 0.1 }}
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
