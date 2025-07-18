import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Microscope, Users, ArrowRight, TrendingUp } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Brain,
      title: "PTSD & Trauma Recovery",
      description: "Innovative therapeutic approaches combining neurofeedback, cognitive behavioral therapy, and emerging neuroscience techniques to help veterans and civilians recover from traumatic experiences.",
      stats: "78% success rate",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "Chronic Pain Management",
      description: "Comprehensive pain management solutions that address both the neurological and psychological aspects of chronic pain through evidence-based treatments.",
      stats: "65% pain reduction",
      color: "bg-red-500"
    },
    {
      icon: Microscope,
      title: "TBI Rehabilitation",
      description: "Advanced rehabilitation programs for traumatic brain injury patients, utilizing cutting-edge neuroplasticity research to optimize recovery outcomes.",
      stats: "82% improvement",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Substance Abuse Recovery",
      description: "Integrated treatment programs that address the neurobiological foundations of addiction while providing comprehensive support for sustainable recovery.",
      stats: "71% completion rate",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            🔬 Our Research Programs
          </div>
          <h2 className="section-heading mb-6 text-primary">
            Four Pillars of Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We focus on four critical areas where innovative neuroscience can make the greatest impact 
            on trauma recovery and mental health outcomes, backed by rigorous clinical research.
          </p>
          
          {/* Overall Stats */}
          <div className="flex justify-center mt-8">
            <div className="bg-primary/5 rounded-2xl p-6 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Combined Success Rate: 74%</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <span className="text-sm text-muted-foreground">500+ Patients Treated</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift border-border/50 bg-card group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary mb-2">
                  {program.title}
                </CardTitle>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {program.stats}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {program.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Join Our Research Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of groundbreaking research that's changing lives. Whether you're a patient, researcher, 
              or healthcare provider, there's a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Become a Research Partner
              </Button>
              <Button size="lg" variant="outline">
                View Research Publications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;