import { Heart, Coffee, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg text-foreground">Made with</span>
          <Heart className="w-5 h-5 text-primary fill-current sparkle" />
          <span className="text-lg text-foreground">&</span>
          <Coffee className="w-5 h-5 text-secondary" />
          <span className="text-lg text-foreground">for my favorite human, Ester</span>
          <Sparkles className="w-5 h-5 text-accent sparkle" />
        </div>
        
        <p className="text-muted-foreground mb-6">
          Forever grateful for your friendship and all the laughter you bring to this world.
        </p>
        
        <div className="border-t border-border/30 pt-6">
          <p className="text-sm text-muted-foreground">
            The EsterVerse © {new Date().getFullYear()} — A universe where friendship shines brightest ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;