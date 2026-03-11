import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ProductsSection from "@/components/ProductsSection";
import ServiceSection from "@/components/ServiceSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import InquirySection from "@/components/InquirySection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <FloatingButtons />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProductsSection />
      <ServiceSection />
      <ProjectsSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsSection />
      <PartnersSection />
      <InquirySection />
      <FooterSection />
    </div>
  );
};

export default Index;
