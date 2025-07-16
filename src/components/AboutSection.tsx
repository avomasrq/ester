import { Coffee, BookOpen, Smile, Heart } from "lucide-react";

const AboutSection = () => {
  const facts = [
    { icon: Coffee, text: "Loves matcha and sunny days", color: "text-primary" },
    { icon: BookOpen, text: "Can read a whole book in one sitting", color: "text-secondary" },
    { icon: Smile, text: "Has the best laugh in the galaxy", color: "text-accent" },
    { icon: Heart, text: "Spreads joy wherever she goes", color: "text-sunshine-foreground" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
          Who is Ester? 🌼
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="bg-gradient-card p-8 rounded-3xl shadow-lg card-hover">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-white/50 ${fact.color}`}>
                    <fact.icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground italic">
              "In a world full of ordinary, Ester chose to be extraordinary ✨"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;