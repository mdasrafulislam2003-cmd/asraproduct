import { motion } from "framer-motion";

const testimonials = [
{
  quote: "Asra is one of the most talented designers I've had the pleasure of working with. Her ability to combine data-driven thinking with beautiful design is rare and incredibly valuable.",
  name: "Sarah Chen",
  title: "Head of Product, Lokalise",
  initials: "SC",
  color: "#D4A090"
},
{
  quote: "Working with Asra on our onboarding redesign was a game changer. She brought structure, creativity, and clear metrics that drove real business results.",
  name: "James Okafor",
  title: "CPO, Miro",
  initials: "JO",
  color: "#F5C842"
},
{
  quote: "Asra has a unique ability to deeply understand user pain points and translate them into elegant, intuitive solutions. A truly exceptional product designer.",
  name: "Priya Menon",
  title: "CEO, InfuseAI",
  initials: "PM",
  color: "#A8C5B5"
},
{
  quote: "Her growth mindset and workshop facilitation skills made our team align faster and ship better products. I'd work with Asra again in a heartbeat.",
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
          What the people I've worked with say about collaborating with me.
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
            <p className="text-foreground text-sm leading-relaxed font-normal flex-1 -mt-4">
              {t.quote}
            </p>
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
    </section>);

}