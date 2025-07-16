import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const GallerySection = () => {
  const memories = [
    { image: memory1, caption: "The Queen of Cozy Coffee Moments" },
    { image: memory2, caption: "Lost in a Good Book" },
    { image: memory3, caption: "Cloudy Day Dreamer" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
          Moments in the EsterVerse 📸
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div key={index} className="polaroid mx-auto max-w-sm">
              <img 
                src={memory.image} 
                alt={memory.caption}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-center mt-4 text-foreground font-medium">
                {memory.caption}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Every moment with Ester becomes a treasured memory 💫
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;