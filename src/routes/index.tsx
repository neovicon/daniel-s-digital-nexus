import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Fun } from "@/components/portfolio/Fun";
import { Contact } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Terminal } from "@/components/portfolio/Terminal";
import { Konami } from "@/components/portfolio/Konami";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniel Danuwar — Developer, Linux nerd, internet builder" },
      { name: "description", content: "Cinematic portfolio of Daniel Danuwar — self-taught developer building cool things on the internet. Web, Linux, cybersecurity, AI, and a little Japanese on the side." },
      { property: "og:title", content: "Daniel Danuwar — Developer Portfolio" },
      { property: "og:description", content: "Self-taught developer. Linux nerd. Cyber-curious. Building cool things on the internet." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground noise dark">
      <Loader />
      <CustomCursor />
      <Konami />
      <Terminal />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Fun />
        <Contact />
      </main>
    </div>
  );
}
