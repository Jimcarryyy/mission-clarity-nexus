const Impact = () => {
  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "12", label: "Research Studies" },
    { number: "85%", label: "Treatment Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">
            Making a Real Impact
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Our evidence-based approach has helped hundreds of individuals reclaim their lives 
            from trauma and find pathways to healing and hope.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-2">
                {stat.number}
              </div>
              <div className="text-lg opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-light italic mb-6 leading-relaxed">
              "The Translational Futures Foundation gave me my life back. After years of struggling with PTSD, 
              their innovative treatment approach helped me find peace and purpose again."
            </p>
            <footer className="text-lg opacity-80">
              — Marine Veteran, Program Graduate
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Impact;