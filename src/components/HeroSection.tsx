import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ester.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="float-gentle mb-8">
          <img 
            src={heroImage} 
            alt="Ester in the EsterVerse" 
            className="w-48 h-48 mx-auto rounded-full object-cover glow-soft"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
          Welcome to the{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EsterVerse
          </span>{" "}
          <Sparkles className="inline-block w-12 h-12 text-primary sparkle" />
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A universe full of smiles, stories, and stardust — all about Ester.
        </p>
        
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Made with cosmic love</span>
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;