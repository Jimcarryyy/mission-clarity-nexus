import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-secondary/50"></div>
      </div>
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-500"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white pt-20">
        <div className="max-w-5xl mx-auto fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              🧠 Pioneering Neuroscience Research
            </span>
          </div>
          <h1 className="hero-heading mb-8 leading-tight">
            Transforming Lives Through 
            <span className="block text-gradient bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Scientific Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed opacity-95 max-w-4xl mx-auto">
            The Translational Futures Foundation bridges cutting-edge neuroscience research with compassionate care, 
            developing breakthrough treatments for PTSD, chronic pain, TBI, and substance abuse that restore hope and heal lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-7 hover-lift group">
              Support Our Mission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-7 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm group">
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light mb-1">500+</div>
              <div className="text-sm opacity-80">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-1">12</div>
              <div className="text-sm opacity-80">Active Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-1">85%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/90 animate-bounce">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-sm mb-3 font-medium">Discover Our Impact</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;