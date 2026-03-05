import { motion } from "framer-motion";
import { useState } from "react";
import avatarWarwick from "@/assets/avatar-warwick.jpg";
import avatarSaurabh from "@/assets/avatar-saurabh.jpg";
import avatarSamir from "@/assets/avatar-samir.jpg";

function TestimonialQuote({ quote, noExpand }: {quote: string;noExpand?: boolean;}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col gap-1 flex-1 -mt-4">
      <p className={`text-foreground text-sm leading-relaxed font-normal ${!noExpand && !expanded ? "line-clamp-5" : ""}`}>
        {quote}
      </p>
      {!noExpand &&
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left text-muted-foreground hover:text-foreground transition-colors text-xs font-medium underline underline-offset-2 w-fit">
          {expanded ? "Collapse" : "Expand"}
        </button>
      }
    </div>);

}

const testimonials = [
{
  quote: "Asra is extremely dedicated and diligent in his work. His professionalism is impeccable. Asra is extremely goal oriented and efficient in his work,. Asra doesn't miss a deadline and often exceeds expectations when given a clear picture of things. He is also very socially aware and a fun coworker that is an absolute pleasure to work with. Asra enunciates his ideas clearly and confidently, and is a valuable asset to any product team. On our goal of rebranding through new blog pages, Asra took ownership of the complete UX journey and identified gaps in the existing flow. He was able to clearly document all the use cases for the dev team. He was able to not only design the solution but also make all the stakeholders understand it clearly. He worked overtime to get the solution working with the developers, and meticulously combed through the data to suggest additional improvements. I'm sure Asra will be a great asset to any organisation that takes product improvements seriously. I am confident in recommending him to his future clients.",
  name: "Saurabh Swami",
  title: "Chief of Design, India Index",
  initials: "SS",
  color: "#D4A090",
  avatar: avatarSaurabh
},
{
  quote: "Grateful to have worked with Asra during a key phase of India Index's product development.\nHe played a pivotal role in reimagining our visual identity—turning complex sourcing workflows into intuitive, high-impact design. A talented designer with real product instincts.",
  name: "Samir N. Kapadia",
  title: "CEO, India Index",
  initials: "SK",
  color: "#F5C842",
  avatar: avatarSamir,
  noExpand: true
},
{
  quote: "With design, active learning is a sign of potential for success. You learn from what customers / users want and how they need to work. You need to run experiments and learn what works over time for different types of users and user groups. You need to learn what makes products a success and you need to learn from those around you because things are constantly changing. During the UX Design Wizard project, Asraful demonstrated he is an active learner and quiet achiever. With design, active learning is a sign of potential for success. You learn from what customers / users want and how they need to work. You need to run experiments and learn what works over time for different types of users and user groups. You need to learn what makes products a success and you need to learn from those around you because things are constantly changing. During the UX Design Wizard project, Asraful demonstrated he is an active learner and quiet achiever.",
  name: "Warwick Molloy",
  title: "Full Stack Infrastructure Engineer, AFCA",
  initials: "WM",
  color: "#A8C5B5",
  avatar: avatarWarwick
},
{
  quote: "I collaborated with Asraful on the same project and I can honestly say that he's one of the most passionate, knowledgeable, dedicated, respectful and kind-hearted colleagues I have ever met. He's a young man with a bright mind that can solve any business problem. Asraful is proficient in being able to use the observations with an innovative approach to solve business problems and structure UX Research utilising a mix of design research methods. If you are exploring a young bright-minded designer for your next design problem, then I highly recommend Asraful!",
  name: "Sahil Samani",
  title: "UX Intern, UXDW",
  initials: "SS",
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
          Beyond the work, I care about the people I build with, as the best work happens when relationships come first.
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
            <TestimonialQuote quote={t.quote} noExpand={t.noExpand} />
            <div className="flex items-center gap-3 mt-2">
              {t.avatar ?
            <img
              src={t.avatar}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0" /> :


            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] flex-shrink-0"
              style={{ background: t.color }}>
                  {t.initials}
                </div>
            }
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-foreground font-normal">{t.title}</p>
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