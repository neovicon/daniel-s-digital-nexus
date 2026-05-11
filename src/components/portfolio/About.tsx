import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Coffee, GitCommit, Layers, Rocket } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { icon: Rocket, label: "Projects built", value: 27 },
  { icon: Layers, label: "Technologies explored", value: 42 },
  { icon: GitCommit, label: "GitHub commits", value: 1840 },
  { icon: Coffee, label: "Cups of coffee", value: 9999, suffix: "+" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">// 01 — about</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-6xl">
          A self-taught dev with <span className="gradient-text">an internet obsession.</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-2xl p-8 lg:col-span-7"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon-purple/20 blur-3xl" />
          <p className="text-lg leading-relaxed text-foreground/85">
            I'm a <span className="text-neon-cyan">self-taught developer</span> who fell in love with how the internet works — and never stopped pulling on the thread. I spend my days breaking things on Linux, shipping side projects, poking at <span className="text-neon-purple">cybersecurity</span> tools, and obsessing over clean code and great UI.
          </p>
          <p className="mt-4 text-foreground/70">
            When I'm not in the terminal, I'm grinding kanji, watching anime, or sketching out the next dumb-but-fun web experiment. I build because I'm <span className="italic text-foreground">curious</span> — and because the web still feels like magic.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
            {["self-taught","linux","webdev","sec","creative"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-muted-foreground">
                #{t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
              data-cursor="hover"
            >
              <s.icon className="h-5 w-5 text-neon-cyan transition group-hover:scale-110" />
              <div className="mt-4 text-3xl font-bold tracking-tight">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
