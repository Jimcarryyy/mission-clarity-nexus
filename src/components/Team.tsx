import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award } from "lucide-react";
import teamImage from "@/assets/team-working.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & Director of Research",
      bio: "Neuroscientist with 15+ years in trauma research and clinical neuroscience. Published 50+ peer-reviewed papers.",
      initials: "SM",
      credentials: "PhD, MD",
      specialization: "Neuroscience & PTSD Research"
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Director",
      bio: "Licensed psychologist specializing in PTSD and evidence-based therapeutic interventions with veterans.",
      initials: "MC",
      credentials: "PhD, PsyD",
      specialization: "Clinical Psychology"
    },
    {
      name: "Dr. Rebecca Torres",
      role: "Director of Translation",
      bio: "Biomedical engineer focused on translating research into practical treatment solutions and medical devices.",
      initials: "RT",
      credentials: "PhD, PE",
      specialization: "Biomedical Engineering"
    },
    {
      name: "James Williams",
      role: "Operations Director",
      bio: "Former military officer with extensive experience in veteran care and program management across multiple states.",
      initials: "JW",
      credentials: "MBA, Retired Colonel",
      specialization: "Operations & Veteran Affairs"
    }
  ];

  return (
    <section id="team" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Team Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              👥 Meet Our Team
            </div>
            <h2 className="section-heading mb-6 text-primary">
              World-Class Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our interdisciplinary team brings together leading experts in neuroscience, clinical psychology, 
              biomedical engineering, and veteran care. Together, we're pioneering the future of trauma recovery.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>200+ Combined Publications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>50+ Years Experience</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={teamImage} 
              alt="TFF research team working together in modern laboratory"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                Collaborative Research Environment
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover-lift text-center bg-card border-border/50 group">
              <CardContent className="pt-8">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-semibold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {member.credentials}
                    </span>
                  </div>
                </div>
                <h3 className="subsection-heading mb-1 text-primary">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-primary/70 mb-4 font-medium">
                  {member.specialization}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;