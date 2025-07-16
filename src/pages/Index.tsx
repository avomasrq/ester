import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ReasonsSection from "@/components/ReasonsSection";
import TimelineSection from "@/components/TimelineSection";
import QuoteGenerator from "@/components/QuoteGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ReasonsSection />
      <TimelineSection />
      <QuoteGenerator />
      <Footer />
    </div>
  );
};

export default Index;
