import { useState } from "react";
import { RefreshCw, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuoteGenerator = () => {
  const quotes = [
    "Don't text your ex, text your homework.",
    "Coffee before talkie, please.",
    "I'm not procrastinating, I'm giving my ideas time to marinate.",
    "Life's too short for bad books and cold coffee.",
    "I speak fluent sarcasm and movie quotes.",
    "My brain has too many tabs open.",
    "I'm not weird, I'm a limited edition.",
    "Powered by caffeine and good vibes only.",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const generateQuote = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
      setIsSpinning(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
          What Would Ester Say? 💬
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg mb-8">
            <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
            <blockquote className="text-2xl font-medium text-foreground leading-relaxed italic">
              "{currentQuote}"
            </blockquote>
            <div className="mt-4 text-muted-foreground">
              — Ester ✨
            </div>
          </div>
          
          <Button 
            onClick={generateQuote}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
            Get Another Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuoteGenerator;