import { Crown, Zap, Heart, Star, Sparkles, Coffee } from "lucide-react";

const ReasonsSection = () => {
  const reasons = [
    { icon: Crown, text: "Can win arguments using just eyecontact", color: "text-primary" },
    { icon: Zap, text: "Turns ordinary moments into adventures", color: "text-secondary" },
    { icon: Heart, text: "Has a heart bigger than the universe", color: "text-accent" },
    { icon: Star, text: "Makes everyone feel like they're the main character", color: "text-sunshine-foreground" },
    { icon: Sparkles, text: "Laughs at her own jokes (and they're actually funny)", color: "text-primary" },
    { icon: Coffee, text: "Can solve world problems before her morning coffee", color: "text-secondary" },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
          6 Reasons Why Ester is the Best 💌
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg card-hover flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-white/50 flex items-center justify-center ${reason.color}`}>
                    <span className="text-2xl font-bold text-foreground">#{index + 1}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-white/50 ${reason.color} flex-shrink-0`}>
                  <reason.icon className="w-6 h-6" />
                </div>
                <p className="text-lg font-medium text-foreground flex-1">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;