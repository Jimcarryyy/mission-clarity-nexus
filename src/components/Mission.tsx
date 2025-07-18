const Mission = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-8 text-primary">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
            We bridge the gap between cutting-edge neuroscience research and real-world healing solutions. 
            Our foundation translates scientific breakthroughs into accessible treatments that restore hope 
            and transform lives affected by trauma.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="subsection-heading mb-3 text-primary">Research</h3>
              <p className="text-muted-foreground">
                Advancing the frontiers of neuroscience and trauma recovery through rigorous research.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="subsection-heading mb-3 text-secondary">Translation</h3>
              <p className="text-muted-foreground">
                Converting scientific discoveries into practical, accessible treatment solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="subsection-heading mb-3 text-primary">Healing</h3>
              <p className="text-muted-foreground">
                Providing compassionate care and support to those on their journey to recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;