import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold gradient-text"
            >
              danuwar.dev
            </motion.div>
            <div className="mt-6 h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }} animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
              />
            </div>
            <div className="mt-4 font-mono text-[10px] text-muted-foreground">booting up the matrix…</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
