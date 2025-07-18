import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Microscope, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Brain,
      title: "PTSD & Trauma Recovery",
      description: "Innovative therapeutic approaches combining neurofeedback, cognitive behavioral therapy, and emerging neuroscience techniques to help veterans and civilians recover from traumatic experiences."
    },
    {
      icon: Heart,
      title: "Chronic Pain Management",
      description: "Comprehensive pain management solutions that address both the neurological and psychological aspects of chronic pain through evidence-based treatments."
    },
    {
      icon: Microscope,
      title: "TBI Rehabilitation",
      description: "Advanced rehabilitation programs for traumatic brain injury patients, utilizing cutting-edge neuroplasticity research to optimize recovery outcomes."
    },
    {
      icon: Users,
      title: "Substance Abuse Recovery",
      description: "Integrated treatment programs that address the neurobiological foundations of addiction while providing comprehensive support for sustainable recovery."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6 text-primary">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We focus on four critical areas where innovative neuroscience can make the greatest impact 
            on trauma recovery and mental health outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift border-border/50 bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;