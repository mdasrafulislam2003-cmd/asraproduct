import { motion } from "framer-motion";
import coverOnboarding from "@/assets/cover-onboarding.jpg";
import coverRecap from "@/assets/cover-recap.jpg";
import coverDatascience from "@/assets/cover-datascience.jpg";
import coverOrganai from "@/assets/cover-organai.jpg";

const caseStudies = [
  {
    tag: "#Growth design",
    company: "Lokalise (2024)",
    title: "Redesigning onboarding",
    description: "An onboarding redesign that increased activation rate by 19% and sign-up rate by 41%",
    cta: "Read case study",
    image: coverOnboarding,
    href: "#",
    locked: false,
  },
  {
    tag: "#Growth design",
    company: "Miro (2024)",
    title: "Miro end-of-year recap",
    description: "An end-of-year campaign that engaged more than 13M users globally.",
    cta: "🔑 Reach out for access",
    image: coverRecap,
    href: "#",
    locked: true,
  },
  {
    tag: "#0 to 1",
    company: "Infuseai (2022)",
    title: "A Github for Data Scientists",
    description: "We built a platform that enables Data Scientists to track their machine learning models and all changes made by the team.",
    cta: "🔑 Reach out for access",
    image: coverDatascience,
    href: "#",
    locked: true,
  },
  {
    tag: "#0 to 1",
    company: "organaise (2021)",
    title: "App for managing meetings",
    description: "I co-founded and developed the OrganAI.se app, which uses AI to simplify scheduling meetings between people (prior to the release of ChatGPT).",
    cta: "🔑 Reach out for access",
    image: coverOrganai,
    href: "#",
    locked: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function CaseStudiesSection() {
  return (
    <section id="case-study-section" className="bg-background px-5 py-20 max-w-[940px] mx-auto">
      {/* Section Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Selected work</span>
        <h2 className="font-serif text-teal-dark text-3xl md:text-4xl mt-2 mb-3">Case study</h2>
        <p className="text-muted-foreground max-w-lg">
          Here are some examples of how I combine workshop, data and a growth mindset to design products.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study, i) => (
          <motion.a
            key={study.title}
            href={study.href}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group block bg-card rounded-2xl border border-border overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Arrow */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {/* Content */}
            <div className="p-6">
              <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">{study.tag}</span>
              <p className="text-sm font-semibold text-muted-foreground mt-3 mb-1">{study.company}</p>
              <h3 className="font-serif text-foreground text-xl mb-2">{study.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{study.description}</p>
              <span className="text-sm font-medium text-foreground underline underline-offset-2 group-hover:opacity-70 transition-opacity">
                {study.cta} →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
