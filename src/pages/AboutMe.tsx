import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import avatarImg from "@/assets/avatar.jpg";


const journey = [
  { year: "24 ~", company: "India Index", role: "Sr. Product Designer", description: "Leading design for AI-driven e-commerce sourcing experiences, rebranding, and growth initiatives." },
  { year: "22-24", company: "Freelance / Startups", role: "Product Designer", description: "Designed and shipped products from 0 to 1 across SaaS, fintech, and AI domains." },
  { year: "20-22", company: "Various Startups", role: "UX/UI Designer", description: "Built user-centered design systems and led research-driven design across multiple product verticals." },
];

const skills = [
  { num: "01", title: "AI Product Design", description: "Designing intuitive AI-driven interfaces that simplify complex workflows and enhance decision-making for users." },
  { num: "02", title: "Design Systems", description: "Building scalable, consistent component libraries and design tokens that accelerate team velocity and ensure brand coherence." },
  { num: "03", title: "User Research", description: "Conducting qualitative and quantitative research to uncover user pain points, validate hypotheses, and drive data-informed design." },
  { num: "04", title: "Product-Led Growth", description: "Leveraging design to drive activation, retention, and engagement — bridging business goals with delightful user experiences." },
  { num: "05", title: "Prototyping & Testing", description: "Rapidly iterating on high-fidelity prototypes and running usability tests to de-risk product decisions early." },
  { num: "06", title: "Cross-Functional Collaboration", description: "Partnering closely with engineers, PMs, and stakeholders to ship polished products on time and with impact." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-5">
        <div className="max-w-[940px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
          <motion.div {...fadeUp}>
            <h1 className="font-serif text-foreground text-4xl md:text-6xl leading-tight mb-8">
              A desire to make life a little easier for people is what drew me to design.
            </h1>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed font-normal">
              <p>
                I grew up in a place where most people followed traditional paths like engineering, medicine, and similar careers. That never really excited me. I've always cared deeply about people like family, friends, and society at large. Even as a kid, I would use my phone and think about little ways to make it easier for myself and others, like moving an icon so it could be used with one hand, or imagining systems that could help blind people navigate technology with voice.
              </p>
              <p>
                That curiosity and care led me to my first steps as a graphic designer, but I quickly realized something was missing as I wanted to connect with real people and solve real problems. UX caught my eye because it let me do exactly that: take empathy, research, and creativity and turn them into solutions that genuinely improve lives.
              </p>
              <p>
                Fast forward 6+ years, and I've helped startups and SaaS companies across AI, sports, facility management, procurement, and enterprise B2B, turn complex product problems into measurable outcomes. At India Index, I helped streamline supplier-buyer workflows, improving onboarding speed by 70% and driving $100K+ in revenue in the first months. At Gyaan, I optimized deal management flows, increasing deal closure efficiency 5x and boosting engagement.
              </p>
              <p>
                My sweet spot? Turning product friction into business impact. I specialize in discovery-led, research-driven design, focusing on strategic problem framing, user research, and cross-functional collaboration.
              </p>
              <p>
                Here's what drives me:
              </p>
              <p>
                <strong>Empathy first</strong> – people over pixels. I work closely with stakeholders and end-users to understand real needs. From shadowing procurement teams to mapping supplier workflows, I design with inclusion and context in mind.
              </p>
              <p>
                <strong>Curious by default</strong> – keep asking until insights emerge. I dive deep into workflows, metrics, and competitor research to inform product decisions that drive measurable results.
              </p>
              <p>
                <strong>Happy to challenge assumptions</strong> – data over trends. Whether it's designing AI-driven workflows or rethinking onboarding flows, I rely on evidence, not trends, to make impactful design decisions.
              </p>
              <p>
                My approach: Innovate, don't imitate. Make products that actually work for users and the business.
              </p>
              <p>
                I'm looking for fully remote senior UX/product strategy roles where discovery, research, and strategic thinking guide product decisions—not just high-fidelity UI work or design systems.
              </p>
              <p className="italic text-foreground">
                I believe that great design is a result of collaboration and a series of experimentation.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-8">
              <motion.a
                href="https://drive.google.com/file/d/1w1gzvID9LRlNR1bk3LkTIkj3w_ujaWTN/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download resume
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/asra2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-7 py-3 rounded-full font-medium hover:bg-secondary transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Linkedin profile
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-border mx-auto">
              <img src={avatarImg} alt="Asra" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Journey */}
      <section className="px-5 py-16">
        <div className="max-w-[940px] mx-auto">
          <motion.h2
            className="font-serif text-foreground text-3xl md:text-4xl mb-12"
            {...fadeUp}
          >
            My journey
          </motion.h2>

          <div className="space-y-0">
            {journey.map((j, i) => (
              <motion.div
                key={j.company}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_200px_1fr] gap-4 md:gap-6 py-6 border-t border-border items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <span className="text-muted-foreground text-sm font-normal">{j.year}</span>
                <div>
                  <p className="font-serif text-foreground text-xl md:text-2xl">{j.company}</p>
                  <p className="text-muted-foreground text-sm font-normal">{j.role}</p>
                </div>
                <p className="text-muted-foreground text-sm font-normal leading-relaxed hidden md:block">
                  {j.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-5 py-16 bg-card border-y border-border">
        <div className="max-w-[940px] mx-auto">
          <motion.div className="mb-12" {...fadeUp}>
            <h2 className="font-serif text-foreground text-3xl md:text-4xl mb-3">What Asra is good at</h2>
            <p className="text-muted-foreground font-normal text-base">Not sure what I can help you with? Well... here are a few things</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.num}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <span className="text-muted-foreground/40 text-2xl font-serif flex-shrink-0 w-8">{s.num}</span>
                <div>
                  <h3 className="font-serif text-foreground text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm font-normal leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside work */}
      <section className="px-5 py-16">
        <div className="max-w-[940px] mx-auto">
          <motion.h2
            className="font-serif text-foreground text-3xl md:text-4xl mb-10"
            {...fadeUp}
          >
            What Asra does outside of work?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div {...fadeUp}>
              <h3 className="font-serif text-foreground text-xl mb-3">I am — a lifelong learner.</h3>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                I'm always exploring new tools, frameworks, and design methodologies. Whether it's diving into AI/ML concepts or picking up a new prototyping tool, staying curious keeps my work fresh and innovative.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h3 className="font-serif text-foreground text-xl mb-3">I am — a community person.</h3>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                Meeting people and sharing knowledge is what gives me energy. I enjoy mentoring aspiring designers and contributing to design communities wherever I can.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-dark px-5 py-24">
        <div className="max-w-[940px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-primary-foreground text-4xl md:text-5xl leading-tight mb-6">
              I love designing for AI-driven products or any that make the world a bit better.
            </h2>
            <p className="text-primary-foreground text-lg mb-8 font-normal leading-relaxed max-w-2xl mx-auto">
              Great products don't happen by accident. If you feel the same, I'd love to talk.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.a
                href="https://www.linkedin.com/in/asra2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground text-primary px-7 py-3 rounded-full font-medium hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find me on Linkedin
              </motion.a>
              <motion.a
                href="mailto:Asrauxdesign@gmail.com"
                className="border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                👀 Curious? Let's Connect
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
