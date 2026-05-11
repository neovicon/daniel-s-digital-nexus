import { motion } from "framer-motion";
import { ArrowDownRight, Github, Sparkles } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { RotatingRole } from "./RotatingRole";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden noise">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 [background:var(--gradient-radial)]" />
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-neon-purple/30 animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-neon-blue/25 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 font-mono text-sm"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-neon-cyan to-neon-purple text-background font-bold">D</span>
          <span className="text-foreground/90">danuwar<span className="text-neon-cyan">.dev</span></span>
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden items-center gap-1 rounded-full glass px-2 py-1 text-xs text-muted-foreground md:flex"
        >
          {["about","projects","skills","journey","fun","contact"].map((s) => (
            <a key={s} href={`#${s}`} className="rounded-full px-3 py-1.5 capitalize transition hover:bg-white/5 hover:text-foreground">
              {s}
            </a>
          ))}
        </motion.div>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-full glass px-4 py-2 text-xs font-medium hover:bg-white/10"
        >
          Let's talk →
        </motion.a>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col items-start justify-center px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          Hey, I'm <span className="gradient-text">Daniel.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-3xl text-2xl text-foreground/80 sm:text-3xl md:text-4xl"
        >
          I build cool things on the internet —{" "}
          <RotatingRole />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-background glow-purple transition hover:scale-[1.03]"
          >
            <Sparkles className="h-4 w-4" />
            See my work
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-6 flex items-center gap-2 font-mono text-xs text-muted-foreground"
        >
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDownRight className="h-4 w-4" />
          </motion.span>
          scroll to explore
        </motion.a>
        <div className="absolute bottom-8 right-6 hidden font-mono text-[10px] text-muted-foreground md:block">
          <span className="text-neon-cyan">$</span> press <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">~</kbd> for terminal
        </div>
      </div>
    </section>
  );
}
