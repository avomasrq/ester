import { Sparkles } from "lucide-react";

const StarField = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating stars */}
      <Sparkles className="absolute top-20 left-10 text-primary/30 w-4 h-4 sparkle" />
      <Sparkles className="absolute top-40 right-20 text-secondary/40 w-3 h-3 sparkle" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute top-60 left-1/4 text-accent/35 w-5 h-5 sparkle" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute bottom-40 right-1/3 text-sunshine/40 w-4 h-4 sparkle" style={{ animationDelay: '1.5s' }} />
      <Sparkles className="absolute bottom-60 left-1/2 text-primary/25 w-3 h-3 sparkle" style={{ animationDelay: '2s' }} />
      <Sparkles className="absolute top-1/3 right-10 text-secondary/30 w-4 h-4 sparkle" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};

export default StarField;