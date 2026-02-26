import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SideProjectsSection from "@/components/SideProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CaseStudiesSection />
      <SideProjectsSection />
      <ArticlesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
