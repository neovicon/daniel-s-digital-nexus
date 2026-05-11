import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";

const HELP = `available commands:
  about      — who is daniel
  projects   — list shipped things
  skills     — print stack
  social     — links
  whoami     — try it
  clear      — wipe screen
  exit       — close terminal`;

function run(cmd: string): string {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "": return "";
    case "help": return HELP;
    case "about": return "self-taught dev. linux nerd. eternal beginner. building cool stuff on the internet.";
    case "projects": return "→ portfolio · vps panel · anime tracker · sec toolkit · ai dashboard";
    case "skills": return "react · ts · tailwind · node · linux · python · git · networking";
    case "social": return "github.com/danieldanuwar  ·  @danieldanuwar  ·  hi@danuwar.dev";
    case "whoami": return "you are awesome. (for real.)";
    case "sudo rm -rf /": return "nice try ✦";
    case "ls": return "about/  projects/  skills/  fun/  contact/  secret.txt";
    case "cat secret.txt": return "the cake is a lie. also: try the konami code.";
    case "clear": return "__clear__";
    case "exit": return "__exit__";
    default: return `command not found: ${cmd}\ntype 'help' for the list.`;
  }
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>([
    "danuwar.dev terminal — v1.0.0",
    "type 'help' for commands.",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "`" || e.key === "~") { e.preventDefault(); setOpen((o) => !o); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);
  useEffect(() => { bodyRef.current?.scrollTo({ top: 9e9 }); }, [lines]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const out = run(input);
    if (out === "__clear__") { setLines([]); setInput(""); return; }
    if (out === "__exit__") { setOpen(false); setInput(""); return; }
    setLines((p) => [...p, `$ ${input}`, ...(out ? out.split("\n") : [])]);
    setInput("");
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full glass-strong text-neon-cyan glow-blue transition hover:scale-110"
        aria-label="Open terminal"
        data-cursor="hover"
      >
        <TerminalIcon className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-5 right-5 z-50 w-[min(92vw,460px)] overflow-hidden rounded-xl glass-strong shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">~/danuwar — zsh</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>
            </div>
            <div ref={bodyRef} className="max-h-72 overflow-y-auto bg-black/60 p-4 font-mono text-xs leading-relaxed">
              {lines.map((l, i) => (
                <div key={i} className={l.startsWith("$") ? "text-neon-cyan" : "text-foreground/80"}>{l}</div>
              ))}
            </div>
            <form onSubmit={submit} className="flex items-center gap-2 border-t border-white/10 bg-black/60 px-4 py-2 font-mono text-xs">
              <span className="text-neon-purple">$</span>
              <input
                ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/50"
                placeholder="type 'help'…"
                spellCheck={false} autoComplete="off"
              />
              <span className="cursor-blink text-neon-cyan">▍</span>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
