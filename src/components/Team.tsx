import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & Director of Research",
      bio: "Neuroscientist with 15+ years in trauma research and clinical neuroscience.",
      initials: "SM"
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Director",
      bio: "Licensed psychologist specializing in PTSD and evidence-based therapeutic interventions.",
      initials: "MC"
    },
    {
      name: "Dr. Rebecca Torres",
      role: "Director of Translation",
      bio: "Biomedical engineer focused on translating research into practical treatment solutions.",
      initials: "RT"
    },
    {
      name: "James Williams",
      role: "Operations Director",
      bio: "Former military officer with extensive experience in veteran care and program management.",
      initials: "JW"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6 text-primary">
            Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our interdisciplinary team brings together leading experts in neuroscience, clinical psychology, 
            biomedical engineering, and veteran care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover-lift text-center bg-card border-border/50">
              <CardContent className="pt-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-primary">
                    {member.initials}
                  </span>
                </div>
                <h3 className="subsection-heading mb-2 text-primary">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;