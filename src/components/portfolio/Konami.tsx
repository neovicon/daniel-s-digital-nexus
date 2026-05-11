import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CODE = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export function Konami() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    let buf: string[] = [];
    const h = (e: KeyboardEvent) => {
      buf = [...buf, e.key].slice(-CODE.length);
      if (buf.join(",").toLowerCase() === CODE.join(",").toLowerCase()) {
        setActive(true);
        setTimeout(() => setActive(false), 5000);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-[100] grid place-items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-cyan/10 to-neon-pink/20 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.5 }}
            className="relative text-center"
          >
            <div className="text-6xl font-bold gradient-text sm:text-8xl">✦ UNLOCKED ✦</div>
            <div className="mt-4 font-mono text-sm text-foreground/80">+30 lives. you found the easter egg.</div>
          </motion.div>
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div key={i}
              initial={{ x: "50vw", y: "50vh", opacity: 0 }}
              animate={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh`, opacity: [0, 1, 0] }}
              transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
              className="absolute h-2 w-2 rounded-full bg-neon-cyan glow-blue"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
