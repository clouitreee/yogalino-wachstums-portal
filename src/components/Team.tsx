import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Award, Users, Star } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Maria Schmidt",
      role: "Leiterin & Erzieherin",
      qualifications: "Staatl. anerk. Erzieherin, Yoga-Trainerin",
      description: "Mit über 15 Jahren Erfahrung leitet Maria unser Team mit viel Herzblut und bringt die Yoga-Philosophie in unseren Alltag ein.",
      specialties: ["Yoga für Kinder", "Achtsamkeitstraining", "Teamleitung"]
    },
    {
      name: "Jonas Weber", 
      role: "Erzieher & Bewegungsexperte",
      qualifications: "Staatl. anerk. Erzieher, Sport- & Bewegungspädagoge",
      description: "Jonas sorgt für Bewegung und Spaß. Seine kreativen Spiele und Bewegungsangebote begeistern die Kinder jeden Tag aufs Neue.",
      specialties: ["Bewegungserziehung", "Naturpädagogik", "Kreatives Spiel"]
    },
    {
      name: "Sarah Müller",
      role: "Erzieherin & Kunsttherapeutin", 
      qualifications: "Staatl. anerk. Erzieherin, Kunsttherapeutin i.A.",
      description: "Sarah entdeckt mit den Kindern die Welt der Farben und Formen. Ihre künstlerischen Projekte fördern Kreativität und Selbstausdruck.",
      specialties: ["Kunstpädagogik", "Kreativförderung", "Emotionale Entwicklung"]
    },
    {
      name: "Lisa Chen",
      role: "Erzieherin & Musikpädagogin",
      qualifications: "Staatl. anerk. Erzieherin, Elementare Musikpädagogik",
      description: "Lisa bringt Musik und Rhythmus in den Alltag. Ihre musikalischen Angebote fördern die sprachliche und soziale Entwicklung.",
      specialties: ["Musikerziehung", "Sprachförderung", "Rhythmik"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Herzlichkeit",
      description: "Wir begegnen jedem Kind mit Wärme und Verständnis"
    },
    {
      icon: Award,
      title: "Qualifikation",
      description: "Regelmäßige Fortbildungen und hohe fachliche Standards"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Gemeinsam schaffen wir die beste Betreuung für Ihr Kind"
    },
    {
      icon: Star,
      title: "Leidenschaft",
      description: "Wir lieben unseren Beruf und leben ihn mit voller Hingabe"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Unser liebevolles{' '}
            <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lernen Sie die Menschen kennen, die Ihr Kind täglich begleiten. Unser qualifiziertes und 
            herzliches Team sorgt dafür, dass sich Ihr Kind bei uns rundum wohl und geborgen fühlt.
          </p>
        </div>

        {/* Team Photo */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl shadow-warm max-w-4xl mx-auto">
            <img
              src={teamPhoto}
              alt="Das Team der Yogalino Krippe"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
          
          {/* Team Stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
            <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6">
              <div className="grid grid-cols-3 divide-x divide-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-terracotta">4</div>
                  <div className="text-sm text-muted-foreground">Fachkräfte</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Leidenschaft</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="border-0 shadow-card hover:shadow-warm transition-smooth bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.qualifications}</p>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Schwerpunkte:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span 
                        key={i}
                        className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="bg-gradient-warm rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Unsere Werte</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diese Grundwerte prägen unser tägliches Handeln und schaffen eine Atmosphäre des Vertrauens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center space-y-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mx-auto p-4 bg-background rounded-2xl w-fit shadow-card">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-glow shadow-glow">
              Lernen Sie uns persönlich kennen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;