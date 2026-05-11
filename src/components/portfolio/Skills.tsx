import { motion } from "framer-motion";

const SKILLS = [
  { name: "React", size: 1.2, color: "from-neon-cyan to-neon-blue" },
  { name: "TypeScript", size: 1.1, color: "from-neon-blue to-neon-purple" },
  { name: "Tailwind", size: 1.05, color: "from-neon-cyan to-neon-purple" },
  { name: "JavaScript", size: 1.15, color: "from-neon-purple to-neon-pink" },
  { name: "Node.js", size: 1, color: "from-neon-blue to-neon-cyan" },
  { name: "Linux", size: 1.1, color: "from-neon-purple to-neon-blue" },
  { name: "Python", size: 1, color: "from-neon-cyan to-neon-purple" },
  { name: "Git", size: 0.95, color: "from-neon-pink to-neon-purple" },
  { name: "HTML", size: 0.9, color: "from-neon-blue to-neon-cyan" },
  { name: "CSS", size: 0.9, color: "from-neon-purple to-neon-pink" },
  { name: "Networking", size: 0.95, color: "from-neon-cyan to-neon-blue" },
  { name: "Bash", size: 0.85, color: "from-neon-blue to-neon-purple" },
  { name: "Docker", size: 0.9, color: "from-neon-cyan to-neon-blue" },
  { name: "Vite", size: 0.85, color: "from-neon-purple to-neon-pink" },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">// 03 — stack</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-6xl">
          Tools in my <span className="gradient-text">arsenal.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A constellation of things I've broken, fixed, and grown to love. Click anywhere — they wobble.
        </p>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10 blur-3xl" />
        <div className="glass relative flex flex-wrap items-center justify-center gap-3 rounded-3xl p-10 sm:gap-4 sm:p-16">
          {SKILLS.map((s, i) => (
            <motion.button
              key={s.name}
              type="button"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.12, rotate: [-2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
              style={{ fontSize: `${s.size}rem` }}
              className={`group relative rounded-full border border-white/10 bg-gradient-to-br ${s.color} bg-clip-text px-5 py-2.5 font-mono font-semibold text-transparent transition`}
              data-cursor="hover"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.03] backdrop-blur" />
              <span className="absolute inset-0 -z-10 rounded-full opacity-0 transition group-hover:opacity-100" style={{ boxShadow: "0 0 30px oklch(0.7 0.22 265 / 50%)" }} />
              {s.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
