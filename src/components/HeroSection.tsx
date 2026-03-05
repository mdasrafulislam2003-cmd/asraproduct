import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import shibaImg from "@/assets/shiba.png";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background min-h-screen flex flex-col items-center justify-start pt-24 pb-16">
      {/* Decorative coral circle top right */}
      <motion.div
        style={{ y, position: "absolute", background: "hsl(var(--coral))", borderRadius: "50%", width: "140px", height: "140px", top: "80px", right: "-20px", pointerEvents: "none", zIndex: 0 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }} />

      {/* Decorative green circle left */}
      <motion.div
        style={{ position: "absolute", background: "hsl(var(--green-blob))", borderRadius: "50%", width: "80px", height: "80px", left: "-20px", top: "40%" }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }} />


      {/* Main hero card with dotted bg */}
      <motion.div
        className="relative z-10 w-full max-w-[940px] mx-auto px-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}>

        {/* Hero Card */}
        <div className="dotted-bg rounded-3xl bg-card border border-border overflow-hidden px-8 py-12 md:px-12 relative text-center">
          {/* Tag */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}>

            <span className="bg-background border border-border text-foreground text-sm px-4 py-2 rounded-full font-medium">
              Data × AI × Design
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-serif text-teal-dark text-5xl md:text-7xl leading-tight mb-2 flex items-center gap-3 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}>
            <span className="text-teal-800">Hey, this is Asra.</span>
          </motion.h1>
          <motion.div
            className="font-serif text-teal-dark text-5xl md:text-7xl leading-tight mb-8 flex items-center gap-3 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}>
            <span className="text-teal-800">A Product Designer.</span>
            <motion.img
              src={shibaImg}
              alt="Shiba Inu"
              className="w-14 h-14 md:w-18 md:h-18 inline-block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}>

            Sr. Product Designer with 6 years of experience building SaaS and AI products for startups. Currently leading Design{" "}
            <a href="https://indiaindex.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-foreground hover:opacity-70 transition-opacity">
              @IndiaIndex.com
            </a>
          </motion.p>

          <motion.p
            className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto font-normal underline underline-offset-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}>Industry Contributed: E-commerce, Procurement, Sales, Sports Management, Facility, Fintech, Blockchain etc

          </motion.p>

          {/* CTA row */}
          <motion.div
            className="flex items-center justify-center gap-8 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}>

            <a
              href="#case-study-section"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md">

              Explore my projects
            </a>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <svg width="24" height="44" viewBox="0 0 24 44" fill="none">
                <path d="M12 2 C20 6, 4 12, 14 18 C22 22, 4 28, 12 34 C14 36, 12 38, 12 40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M6 36 L12 44 L18 36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="italic text-sm leading-snug">(In case you are tired of<br />reading portfolio...)</span>
            </div>
          </motion.div>
        </div>

        {/* Video/mockup browser window */}
        <motion.div
          className="mt-4 rounded-3xl overflow-hidden border border-border bg-card shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}>

          {/* Browser chrome */}
          <div className="bg-secondary/60 px-4 py-3 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 bg-background/60 rounded-full h-5 mx-4 border border-border" />
          </div>
          <div className="relative overflow-hidden" style={{ background: "#1B1F3B" }}>
            <svg viewBox="0 0 800 420" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="420" fill="#1B1F3B" />
              <rect x="80" y="60" width="60" height="60" fill="#E8445A" rx="4" />
              <rect x="200" y="40" width="50" height="50" fill="#F5C842" rx="4" transform="rotate(15,225,65)" />
              <circle cx="350" cy="90" r="38" fill="#3B82F6" />
              <polygon points="500,30 548,95 452,95" fill="#EC4899" />
              <rect x="610" y="50" width="70" height="70" fill="#A78BFA" rx="8" transform="rotate(-8,645,85)" />
              <circle cx="160" cy="340" r="30" fill="#6EE7B7" />
              <rect x="120" y="200" width="75" height="75" fill="#F97316" rx="4" transform="rotate(15,157,237)" />
              <circle cx="280" cy="300" r="50" fill="#34D399" fillOpacity="0.6" />
              <rect x="400" y="230" width="95" height="95" fill="#FCD34D" rx="4" transform="rotate(-10,447,277)" />
              <circle cx="590" cy="280" r="38" fill="#67E8F9" />
              <polygon points="700,180 750,270 650,270" fill="#F472B6" />
              <rect x="50" y="310" width="55" height="55" fill="#818CF8" rx="4" transform="rotate(20,77,337)" />
              <circle cx="720" cy="350" r="28" fill="#FB923C" />
              {/* Center video */}
              <circle cx="400" cy="210" r="75" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              <circle cx="400" cy="210" r="64" fill="rgba(27,31,59,0.9)" />
              <polygon points="388,192 426,210 388,228" fill="white" />
              {/* Speed overlay */}
              <rect x="330" y="275" width="140" height="34" rx="17" fill="rgba(0,0,0,0.7)" />
              <text x="350" y="297" fill="white" fontSize="11" fontFamily="sans-serif">⚡ 1.2x · 42 sec</text>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>);

}