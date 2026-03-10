import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import InquirySection from "@/components/InquirySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProjectsSection />
      <NewsSection />
      <PartnersSection />
      <InquirySection />
      <FooterSection />
    </div>
  );
};

export default Index;
