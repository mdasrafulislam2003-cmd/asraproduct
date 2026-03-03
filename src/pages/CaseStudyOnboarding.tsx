import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import coverOnboarding from "@/assets/cover-onboarding.jpg";
import articleOnboarding from "@/assets/article-onboarding.jpg";

const stats = [
  { label: "Activation rate", value: "+19%" },
  { label: "Sign-up rate", value: "+41%" },
  { label: "Time to first value", value: "-32%" },
];

const sections = [
  {
    title: "The Problem",
    body: "Lokalise's onboarding flow had a high drop-off rate — users were signing up but never reaching their first 'aha moment'. The product had powerful features, but new users couldn't discover them fast enough to stay.",
  },
  {
    title: "Research & Discovery",
    body: "I ran 12 user interviews and analysed funnel data across 3 months of cohorts. Key findings: 68% of users dropped off before completing the project setup, and the biggest confusion point was the blank-state empty project view — users didn't know what to do next.",
  },
  {
    title: "Design Process",
    body: "Using a Jobs-to-be-Done framework, I mapped user goals and designed a guided onboarding checklist that adapted based on team size and use case. I collaborated with Growth, Engineering, and Marketing to align on activation metrics before moving to high-fidelity designs.",
  },
  {
    title: "Solution",
    body: "We redesigned the first-run experience with a contextual checklist, sample project templates, and an inline tooltip coach. The new flow reduced steps to first value from 11 to 5, and introduced progressive disclosure so power features didn't overwhelm new users.",
  },
  {
    title: "Results",
    body: "After shipping to 100% of new signups, activation rate (users completing core setup) increased by 19% and sign-up-to-paid conversion rate grew by 41% over the following quarter. The redesign became the baseline for Lokalise's PLG strategy.",
  },
];

export default function CaseStudyOnboarding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <div className="w-full max-w-[940px] mx-auto px-5 pt-8 pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to portfolio
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        className="w-full max-w-[940px] mx-auto px-5 pb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Tags */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">#Growth design</span>
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">Lokalise · 2024</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-foreground text-4xl md:text-6xl leading-tight mb-4">
          Redesigning onboarding
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mb-10 font-normal">
          An onboarding redesign that increased activation rate by 19% and sign-up rate by 41% — turning Lokalise's biggest drop-off point into its strongest growth lever.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-2xl p-5 text-center">
              <div className="font-serif text-3xl md:text-4xl text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cover image */}
        <div className="rounded-2xl overflow-hidden border border-border mb-14 shadow-sm">
          <img src={coverOnboarding} alt="Onboarding redesign cover" className="w-full object-cover" />
        </div>

        {/* Content sections */}
        <div className="space-y-12 max-w-2xl">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <h2 className="font-serif text-foreground text-2xl mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed font-normal">{section.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Article image */}
        <motion.div
          className="mt-14 rounded-2xl overflow-hidden border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={articleOnboarding} alt="Onboarding design details" className="w-full object-cover" />
        </motion.div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to portfolio
          </Link>
          <a
            href="mailto:asra@example.com"
            className="text-sm font-medium text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Get in touch →
          </a>
        </div>
      </motion.div>
    </div>
  );
}
