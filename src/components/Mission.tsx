import brainScanImage from "@/assets/brain-scan-hope.jpg";

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-heading mb-8 text-primary">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              We bridge the gap between cutting-edge neuroscience research and real-world healing solutions. 
              Our foundation translates scientific breakthroughs into accessible treatments that restore hope 
              and transform lives affected by trauma.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Evidence-Based Research</h3>
                  <p className="text-muted-foreground">Conducting rigorous clinical trials and neuroscience studies to advance trauma treatment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-secondary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Compassionate Care</h3>
                  <p className="text-muted-foreground">Providing personalized, trauma-informed treatment approaches for every individual.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
              <img 
                src={brainScanImage} 
                alt="Medical professional reviewing brain scan results with hope and precision"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  Advanced Neuroimaging Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <div className="w-10 h-10 bg-primary rounded-xl"></div>
            </div>
            <h3 className="subsection-heading mb-3 text-primary">Innovation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pioneering breakthrough treatments through cutting-edge neuroscience and technology.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <div className="w-10 h-10 bg-secondary rounded-xl"></div>
            </div>
            <h3 className="subsection-heading mb-3 text-secondary">Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building partnerships across institutions to accelerate scientific discovery and impact.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-accent/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <div className="w-10 h-10 bg-primary rounded-xl"></div>
            </div>
            <h3 className="subsection-heading mb-3 text-primary">Hope</h3>
            <p className="text-muted-foreground leading-relaxed">
              Restoring hope and dignity to those whose lives have been affected by trauma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;