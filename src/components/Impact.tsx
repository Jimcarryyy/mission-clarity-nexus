import { Button } from "@/components/ui/button";
import { Star, Users, TrendingUp, Heart } from "lucide-react";
import veteranImage from "@/assets/veteran-recovery.jpg";

const Impact = () => {
  const stats = [
    { 
      number: "500+", 
      label: "Lives Transformed",
      icon: Users,
      description: "Patients who have successfully completed our programs"
    },
    { 
      number: "12", 
      label: "Active Research Studies",
      icon: TrendingUp,
      description: "Ongoing clinical trials and research projects"
    },
    { 
      number: "85%", 
      label: "Treatment Success Rate",
      icon: Star,
      description: "Patients showing significant improvement"
    },
    { 
      number: "24/7", 
      label: "Support Available",
      icon: Heart,
      description: "Round-the-clock care and emergency support"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-4">
            📊 Our Impact
          </div>
          <h2 className="section-heading mb-6">
            Transforming Lives Through Science
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Our evidence-based approach has helped hundreds of individuals reclaim their lives 
            from trauma and find pathways to healing, hope, and renewed purpose.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-light mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-sm opacity-80 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-light mb-6">Real Stories, Real Recovery</h3>
            <blockquote className="mb-8">
              <p className="text-xl font-light italic mb-6 leading-relaxed">
                "The Translational Futures Foundation gave me my life back. After years of struggling with PTSD and chronic pain, 
                their innovative treatment approach helped me find peace, purpose, and hope for the future again."
              </p>
              <footer className="text-lg opacity-80">
                — Marine Veteran, Program Graduate
              </footer>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Read More Stories
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
                View Research Results
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={veteranImage} 
              alt="Veteran in supportive therapy session showing progress and hope"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                Hope Through Healing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;