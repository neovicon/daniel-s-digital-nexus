import { motion } from "framer-motion";
import { Github, MessageCircle, Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const SOCIALS = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Discord", href: "#", icon: MessageCircle },
  { name: "Email", href: "mailto:hi@danuwar.dev", icon: Mail },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">// 06 — contact</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-6xl">
          Let's <span className="gradient-text">build something</span> weird.
        </h2>
        <p className="mt-4 text-muted-foreground">DMs open. Cool ideas welcome. Spam politely declined.</p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-5">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong neon-border relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-xs text-muted-foreground">name</span>
              <input required type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20" placeholder="Ada Lovelace" />
            </label>
            <label className="block">
              <span className="font-mono text-xs text-muted-foreground">email</span>
              <input required type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-neon-purple/60 focus:ring-2 focus:ring-neon-purple/20" placeholder="ada@analytical.engine" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="font-mono text-xs text-muted-foreground">message</span>
            <textarea required rows={5} className="mt-1 w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20" placeholder="Hey Daniel, I have an idea about…" />
          </label>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">end-to-end encrypted vibes</span>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-background glow-purple"
              data-cursor="hover"
            >
              {sent ? "Sent ✦" : <>Send message <Send className="h-4 w-4 transition group-hover:translate-x-0.5" /></>}
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="grid gap-4 lg:col-span-2"
        >
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
              className="glass group flex items-center justify-between rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-white/20"
              data-cursor="hover"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.05] transition group-hover:bg-gradient-to-br group-hover:from-neon-blue group-hover:to-neon-purple">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="font-mono text-[10px] text-muted-foreground">@danieldanuwar</div>
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground transition group-hover:text-foreground">→</span>
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row">
        <div className="font-mono">© {new Date().getFullYear()} Daniel Danuwar — built with caffeine &amp; curiosity.</div>
        <div className="font-mono">try the <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">↑ ↑ ↓ ↓ ← → ← → B A</kbd></div>
      </footer>
    </section>
  );
}
