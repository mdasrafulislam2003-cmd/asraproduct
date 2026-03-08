import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import avatarImg from "@/assets/avatar.jpg";
import bike1Img from "@/assets/bike-1.png";
import bike2Img from "@/assets/bike-2.png";
import bike3Img from "@/assets/bike-3.jpg";
import bike4Img from "@/assets/bike-4.jpg";

const journey = [
  { year: "Feb 2024 - Present", company: "India Index", role: "Sr. Product Designer", description: "Led end-to-end design for an AI-powered B2B procurement platform, driving 3x sales efficiency, 157% higher deal conversion, 322% increased user engagement, and building scalable design systems that reduced inconsistencies by 65%" },
  { year: "Feb 2022 - Mar 2025", company: "WePlay Sports", role: "Founding Product Designer", description: "Owned end-to-end design for a B2B sports and facility management platform and B2C player experience, leading research, building an atomic design system, and implementing AI-driven features that boosted user satisfaction 81% and cut design/dev time by 70%" },
  { year: "Mar 2022 - Oct 2022", company: "Gyaan", role: "Mid-level Product Designer", description: "Designed and shipped 10+ Salesforce-integrated features on an agile team, mentoring juniors, optimizing deal workflows, and driving 200+ customers with $55K+ revenue while ensuring fully responsive, user-friendly experiences." },
  { year: "Aug 2021 - Sep 2021", company: "Altalt", role: "UX Design intern", description: "Collaborated with stakeholders to define goals and constraints, designed the end-to-end UX and UI for CastingConnect and an anonymous QA MVP, built a custom design system, and presented solutions to peers and stakeholders." },
  { year: "Mar 2021 - May 2021", company: "UXDW", role: "UX Design intern", description: "Collaborated with stakeholders to define requirements and roadmap, used research insights across three personas to create user-centered designs, sketches, and prototypes for an internship platform and landing page." },
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
              A desire to make life a little easier for people is what drew me to design....
            </h1>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed font-normal">
              <p>
                I grew up in a place where most people followed traditional paths like engineering, medicine, and similar careers which never really excited me. I've always cared deeply about people like family, friends, and society. Even when I got my first android phone, I'd use it and think about little ways to make it easier for myself and others, like moving an icon so it could be used with one hand, or imagining systems that could help blind people navigate technology with voice.
              </p>
              <p>
                That curiosity and care led me to my first steps as a graphic designer, but I quickly realized something was missing as I wanted to connect with real people and solve real problems. In that time, UX caught my eye because it let me do exactly that which is taking empathy, research, and creativity and turn them into solutions that actually improve peoples lives.
              </p>
              <p>
                Fast forward 6+ years, and I've helped startups and SaaS companies across AI, sports, facility management, procurement, and enterprise B2B, turn complex product problems into measurable outcomes. At India Index, I helped streamline supplier-buyer workflows, improving onboarding speed by 70% and driving $100K+ in revenue in the first few months. At Gyaan, I optimized deal management flows, increasing deal closure efficiency 5x and boosting engagement.
              </p>
              <p>
                My sweet spot? Turning product friction into business impact. I specialize in discovery-led, research-driven design, focusing on strategic problem framing, user research, and cross-functional collaboration.
              </p>
              <p className="font-bold">
                Here's what drives me:
              </p>
              <p>
                <strong>Empathy first</strong> – people over pixels. I work closely with stakeholders and end-users to understand real needs. From shadowing procurement teams to mapping supplier workflows, I design with inclusion and context in mind.
              </p>
              <p>
                <strong>Curious by default</strong> – keep asking until insights emerge. I love to dive deep into workflows, metrics, and competitor research to inform product decisions that drive measurable results.
              </p>
              <p>
                <strong>Happy to challenge assumptions</strong> – data over trends. Whether it's designing AI-driven workflows or rethinking onboarding flows, I always rely on evidence, not trends, to make impactful design decisions.
              </p>
              <p className="font-bold">
                My approach: Innovate, don't imitate. Make products that actually work for users and the business.
              </p>
              <p>
                I'm looking for fully remote senior UX/product strategy roles where discovery, research, and strategic thinking guide product decisions—not just high-fidelity UI work or design systems.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-8">
              <motion.a
                href="https://drive.google.com/file/d/1L921LziVJllUhESb7p149CcbZb-vKPbG/view"
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
                I'm always exploring new tools, frameworks, and design methodologies. Whether it's diving into AI and machine learning concepts, experimenting with the latest prototyping tools, or discovering fresh approaches to problem-solving, staying curious keeps my work innovative, adaptable, and engaging.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h3 className="font-serif text-foreground text-xl mb-3">I am — a bike person.</h3>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                Outside of work, I'm a passionate bike rider. Whether it's cruising through city streets, exploring trails on weekends, or just taking a quiet ride to clear my head, biking helps me stay energized and inspired. I love the sense of freedom, focus, and perspective it brings—kind of like designing a product, where every path has its challenges and rewards.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
            {...fadeUp}
          >
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src={bike1Img} alt="Biking by the river" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src={bike2Img} alt="Night bike ride" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src={bike3Img} alt="Bike adventure" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src={bike4Img} alt="Bike ride" className="w-full h-full object-cover" />
            </div>
          </motion.div>
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
