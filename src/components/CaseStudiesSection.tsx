import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import coverOnboarding from "@/assets/cover-onboarding.jpg";
import coverRecap from "@/assets/cover-recap.jpg";
import coverDatascience from "@/assets/cover-datascience.jpg";
import coverOrganai from "@/assets/cover-organai.jpg";

const caseStudies = [
{
  tag: "#Growth design",
  company: "LOKALISE (2024)",
  title: "Redesigning onboarding v1",
  description: "An onboarding redesign that increased activation rate by 19% and sign-up rate by 41%",
  cta: "READ CASE STUDY",
  image: coverOnboarding,
  href: "/case-study/onboarding",
  locked: false,
  bg: "#D4A090"
},
{
  tag: "#Growth design",
  company: "MIRO (2024)",
  title: "Miro end-of-year recap",
  description: "An end-of-year campaign that engaged more than 13M users globally.",
  cta: "🔑 Reach out for access",
  image: coverRecap,
  href: "#",
  locked: true,
  bg: "#F5C842"
},
{
  tag: "#0 to 1",
  company: "INFUSEAI (2022)",
  title: "A Github for Data Scientists",
  description: "We built a platform that enables Data Scientists to track their machine learning models and all changes made by the team.",
  cta: "🔑 Reach out for access",
  image: coverDatascience,
  href: "#",
  locked: true,
  bg: "#A8C5B5"
}];



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 }
  })
};

export default function CaseStudiesSection() {
  return (
    <section id="case-study-section" className="bg-background px-5 py-20 max-w-[940px] mx-auto">
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        
        <span className="inline-block text-white text-sm font-semibold px-5 py-2 rounded-xl mb-5 bg-teal-800" style={{ rotate: "355deg" }}>
          Selected work
        </span>
        <h2 className="font-serif text-teal-dark text-5xl md:text-6xl mt-2 mb-5">Case studies</h2>
        <p className="text-foreground/70 max-w-xl mx-auto text-lg font-normal leading-relaxed">Here are some examples of how I combine user research, AI-assisted design, and a growth-driven mindset to craft impactful SaaS products. 

        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-5">
        {caseStudies.map((study, i) => {
          const inner =
          <div className="flex flex-col md:flex-row min-h-[280px] rounded-2xl overflow-hidden">
              {/* Left: text content on colored bg */}
              <div
              className="flex flex-col justify-between p-8 md:w-[45%] flex-shrink-0"
              style={{ background: study.bg }}>
              
                <div>
                  <div className="flex items-center gap-2 mb-6 flex-wrap">
                    <span className="text-xs font-medium bg-white/40 text-[#1a1a1a] px-3 py-1 rounded-full">
                      {study.tag}
                    </span>
                    <span className="text-xs font-bold tracking-widest text-[#1a1a1a]/70 uppercase">
                      {study.company}
                    </span>
                  </div>
                  <h3 className="font-serif text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-4">
                    {study.title}
                  </h3>
                  <p className="text-[#1a1a1a]/70 text-sm leading-relaxed mb-6 font-normal">
                    {study.description}
                  </p>
                </div>
                {!study.locked &&
              <span className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a] flex items-center gap-1 group-hover:gap-2 transition-all">
                    {study.cta} →
                  </span>
              }
                {study.locked &&
              <span className="text-xs font-medium text-[#1a1a1a]/60">
                    {study.cta}
                  </span>
              }
              </div>

              {/* Right: mockup image */}
              <div
              className="flex-1 flex items-end justify-end overflow-hidden relative"
              style={{ background: study.bg }}>
              
                <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ borderRadius: "12px 12px 12px 0", marginRight: "0", marginBottom: "0", maxHeight: "320px", objectFit: "cover" }} />
              
              </div>
            </div>;


          return (
            <motion.div
              key={study.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={!study.locked ? { y: -4, transition: { duration: 0.2 } } : {}}
              className="group">
              
              {!study.locked ?
              <Link to={study.href} className="block rounded-2xl overflow-hidden shadow-sm">
                  {inner}
                </Link> :

              <div className="block rounded-2xl overflow-hidden shadow-sm opacity-90 cursor-default">
                  {inner}
                </div>
              }
            </motion.div>);

        })}
      </div>
    </section>);

}