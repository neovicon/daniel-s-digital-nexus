import { motion } from "framer-motion";

const STORY = [
  { year: "2018", title: "The spark", text: "Right-clicked a webpage. Saw the source. Lost my mind. Started writing HTML on a borrowed laptop." },
  { year: "2020", title: "Going deeper", text: "JavaScript clicked. Built way too many to-do apps. Discovered Linux and never went back to vanilla setups." },
  { year: "2022", title: "Building for real", text: "First real projects shipped — internet-facing, broken, fixed, learned. Fell in love with React and the terminal." },
  { year: "2024", title: "Curiosity unlocked", text: "Cybersecurity, networking, AI tools, Japanese — turning curiosity into side projects whenever I can." },
  { year: "Now", title: "Shipping with intent", text: "Building things that feel alive. Treating every project like a tiny love letter to the web." },
];

export function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">// 04 — journey</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-6xl">
          From <span className="gradient-text">curiosity</span> to craft.
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-purple/40 to-transparent md:left-1/2" />
        <div className="space-y-12">
          {STORY.map((s, i) => (
            <motion.div
              key={s.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-4 top-3 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-neon-cyan glow-blue md:left-1/2" />
              <div className="hidden md:block md:w-1/2" />
              <div className="ml-10 flex-1 md:ml-0 md:w-1/2 md:px-10">
                <div className="glass relative rounded-2xl p-6">
                  <div className="font-mono text-xs text-neon-purple">{s.year}</div>
                  <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
