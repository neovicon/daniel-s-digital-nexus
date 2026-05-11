import { motion } from "framer-motion";
import { Headphones, Languages, Keyboard, Terminal as TerminalIcon, Heart } from "lucide-react";

export function Fun() {
  return (
    <section id="fun" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">// 05 — off-screen</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-6xl">
          Currently <span className="gradient-text">obsessed</span> with…
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-6">
        {/* Now playing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass group relative overflow-hidden rounded-2xl p-6 md:col-span-3"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex h-2 w-2"><span className="absolute h-2 w-2 animate-ping rounded-full bg-neon-pink/70" /><span className="h-2 w-2 rounded-full bg-neon-pink" /></span>
            <Headphones className="h-3.5 w-3.5" /> now playing
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_0%,transparent_40%)] opacity-30"
                animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="min-w-0">
              <div className="truncate font-semibold">Midnight City</div>
              <div className="truncate text-sm text-muted-foreground">M83 — Hurry Up, We're Dreaming</div>
              <div className="mt-2 h-1 w-full rounded-full bg-white/10">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink"
                  initial={{ width: "0%" }} whileInView={{ width: "62%" }} viewport={{ once: true }} transition={{ duration: 1.6 }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Anime */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          className="glass relative rounded-2xl p-6 md:col-span-3"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><Heart className="h-3.5 w-3.5 text-neon-pink" /> rotation</div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            {[
              { t: "Frieren", s: "fantasy / 9.4" },
              { t: "Vinland Saga", s: "drama / 9.1" },
              { t: "Cyberpunk: ER", s: "scifi / 8.7" },
            ].map((a) => (
              <div key={a.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="font-semibold">{a.t}</div>
                <div className="mt-1 font-mono text-[10px] text-muted-foreground">{a.s}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Distro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="glass relative rounded-2xl p-6 md:col-span-2"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><TerminalIcon className="h-3.5 w-3.5" /> distro of choice</div>
          <div className="mt-4 text-2xl font-bold gradient-text">Arch, btw.</div>
          <div className="mt-1 text-xs text-muted-foreground">…with Hyprland on weekends.</div>
        </motion.div>

        {/* Japanese */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="glass relative rounded-2xl p-6 md:col-span-2"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><Languages className="h-3.5 w-3.5" /> learning</div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold">日本語</span>
            <span className="text-xs text-muted-foreground">N5 → N4</span>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              initial={{ width: 0 }} whileInView={{ width: "38%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
          </div>
          <div className="mt-2 font-mono text-[10px] text-muted-foreground">毎日少しずつ。</div>
        </motion.div>

        {/* Keyboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="glass relative rounded-2xl p-6 md:col-span-2"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><Keyboard className="h-3.5 w-3.5" /> daily driver</div>
          <div className="mt-4 text-lg font-semibold">75% — Holy Pandas</div>
          <div className="mt-1 text-xs text-muted-foreground">Tactile, thocky, slightly too loud at 2am.</div>
          <div className="mt-4 grid grid-cols-10 gap-1">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div key={i}
                className="aspect-square rounded-sm bg-white/[0.06]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2 + (i % 5) * 0.3, repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
