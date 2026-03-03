import { motion } from "framer-motion";
import { useState } from "react";

function TestimonialQuote({ quote }: { quote: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col gap-1 flex-1 -mt-4">
      <p className={`text-foreground text-sm leading-relaxed font-normal ${!expanded ? "line-clamp-5" : ""}`}>
        {quote}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left text-muted-foreground hover:text-foreground transition-colors text-xs font-medium underline underline-offset-2 w-fit">
        {expanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}

const testimonials = [
{
  quote: "Asra is one of the most talented designers I've had the pleasure of working with. Her ability to combine data-driven thinking with beautiful design is rare and incredibly valuable. She consistently brings a thoughtful, user-first perspective that elevates every project she touches — I couldn't recommend her more highly.",
  name: "Sarah Chen",
  title: "Head of Product, Lokalise",
  initials: "SC",
  color: "#D4A090"
},
{
  quote: "Working with Asra on our onboarding redesign was a game changer. She brought structure, creativity, and clear metrics that drove real business results. Her ability to balance aesthetic sensibility with strategic thinking is something I rarely see in a designer — she made the entire process seamless and the outcome spoke for itself.",
  name: "James Okafor",
  title: "CPO, Miro",
  initials: "JO",
  color: "#F5C842"
},
{
  quote: "Asra has a unique ability to deeply understand user pain points and translate them into elegant, intuitive solutions. A truly exceptional product designer. She led workshops, synthesised research, and delivered a design system that our whole team now relies on every single day.",
  name: "Priya Menon",
  title: "CEO, InfuseAI",
  initials: "PM",
  color: "#A8C5B5"
},
{
  quote: "Her growth mindset and workshop facilitation skills made our team align faster and ship better products. I'd work with Asra again in a heartbeat. She brought clarity to ambiguous problems, gave the team confidence, and delivered work that was both beautiful and grounded in real user needs.",
  name: "Lucas Berg",
  title: "VP Design, OrganAI",
  initials: "LB",
  color: "#B8C4E0"
}];


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background px-5 py-20 max-w-[940px] mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        
        <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Kind words</span>
        <h2 className="font-serif text-teal-dark text-3xl md:text-4xl mt-2 mb-3">How’s it like to 
work with Asra?</h2>
        <p className="text-foreground max-w-lg font-normal not-italic">
          Beyond the work, I care about the people I build with — the best work happens when relationships come first.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="bg-card rounded-2xl border border-border p-7 flex flex-col gap-5">
          
            {/* Quote mark */}
            <span className="text-4xl leading-none font-serif text-muted-foreground/30 select-none">"</span>
            <TestimonialQuote quote={t.quote} />
            <div className="flex items-center gap-3 mt-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] flex-shrink-0"
                style={{ background: t.color }}>
              
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <a
          href="https://www.linkedin.com/in/asra2003/details/recommendations/?detailScreenTabIndex=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-border text-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-800 hover:text-white hover:border-green-800 transition-colors">
          View on LinkedIn →
        </a>
      </motion.div>
    </section>);

}