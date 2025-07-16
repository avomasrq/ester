import { Star, Heart, Sparkles, Coffee } from "lucide-react";

const TimelineSection = () => {
  const memories = [
    { 
      icon: Star, 
      title: "First Meeting", 
      description: "Met in a joint group project",
      color: "text-primary"
    },
    { 
      icon: Coffee, 
      title: "Coffee Chronicles", 
      description: "Discovered our shared addiction to overpriced lattes",
      color: "text-secondary"
    },
    { 
      icon: Heart, 
      title: "Late Night Talks", 
      description: "Solved the mysteries of the universe at 2 AM",
      color: "text-accent"
    },
    { 
      icon: Sparkles, 
      title: "Adventure Begins", 
      description: "Turned ordinary Tuesday into an epic adventure",
      color: "text-sunshine-foreground"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
          Memory Timeline 🕰️
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-12">
              {memories.map((memory, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline marker */}
                  <div className={`relative z-10 p-3 rounded-full bg-card shadow-lg ${memory.color} glow-soft`}>
                    <memory.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gradient-card p-6 rounded-3xl shadow-lg card-hover">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {memory.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;