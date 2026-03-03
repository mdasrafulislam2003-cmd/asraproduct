import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SideProjectsSection from "@/components/SideProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CaseStudiesSection />
      <SideProjectsSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
