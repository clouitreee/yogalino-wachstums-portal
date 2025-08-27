import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Play, ArrowRight, Home, Utensils, Palette, BookOpen, Music, Heart } from 'lucide-react';

const Explore = () => {
  const rooms = [
    {
      name: "Bewegungsraum",
      description: "Hier können sich die Kinder austoben und ihre motorischen Fähigkeiten entwickeln. Mit weichen Matten und kindersicheren Kletterelementen.",
      icon: Heart,
      features: ["Yogamatten für Kinder", "Kletterwand", "Balancierbalken", "Entspannungsecke"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Kreativraum", 
      description: "Ein Raum voller Farben und Materialien, wo kleine Künstler ihrer Fantasie freien Lauf lassen können.",
      icon: Palette,
      features: ["Ungiftige Farben", "Bastelmaterialien", "Staffeleien", "Trockenbereich"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Kuschelecke",
      description: "Ruhezone mit gemütlichen Polstern und Büchern für entspannte Momente und Vorlesezeit.",
      icon: BookOpen,
      features: ["Weiche Kissen", "Kinderbücher", "Gedämpftes Licht", "Ruhe-Atmosphäre"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Küche & Essbereich",
      description: "Wo täglich frische, biologische Mahlzeiten zubereitet und gemeinsam eingenommen werden.",
      icon: Utensils,
      features: ["Bio-Küche", "Kinderfreundliche Tische", "Lernküche", "Allergiker-geeignet"],
      image: "/api/placeholder/400/300"
    }
  ];

  const groups = [
    {
      name: "Sonnengruppe",
      ageRange: "0-3 Jahre",
      description: "Der Gruppenraum zeichnet sich über seine erdigen Farben und organischen Materialien aus",
      color: "bg-gradient-to-br from-primary/20 to-primary/10",
      maxChildren: 15,
      caregivers: "Qualifizierte Fachkräfte"
    },
    {
      name: "Mondgruppe",
      ageRange: "0-3 Jahre", 
      description: "Der Gruppenraum II ist sehr lebendig und vielfältig",
      color: "bg-gradient-to-br from-terracotta/20 to-terracotta/10",
      maxChildren: 15,
      caregivers: "Qualifizierte Fachkräfte"
    }
  ];

  return (
    <section id="explore" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Entdecke die <span className="text-primary">Krippe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Erleben Sie unsere liebevoll gestalteten Räume und kleinen Gruppen, 
            in denen sich jedes Kind geborgen und willkommen fühlt.
          </p>
        </div>

        {/* Virtual Tour CTA */}
        <Card className="border-0 shadow-warm bg-gradient-nature mb-16 overflow-hidden">
          <CardContent className="p-8 text-center text-primary-foreground">
            <div className="max-w-2xl mx-auto">
              <Camera className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">Virtueller 360° Rundgang</h3>
              <p className="text-lg mb-8 opacity-90">
                Erkunden Sie unsere Krippe bequem von zu Hause aus. 
                Verschaffen Sie sich einen realistischen Eindruck unserer Räumlichkeiten.
              </p>
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Play className="mr-2 h-5 w-5" />
                Rundgang starten
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Rooms Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Unsere Räume - Liebevoll gestaltet für kleine Entdecker
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <Card key={room.name} className="border-0 shadow-card hover:shadow-warm transition-all duration-300 bg-card" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Room Image Placeholder */}
                <div className="aspect-video bg-gradient-soft rounded-t-lg flex items-center justify-center border border-border/30">
                  <div className="text-center text-muted-foreground">
                    <room.icon className="h-16 w-16 mx-auto mb-2 opacity-50" />
                    <span className="text-sm">Bild kommt bald</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <room.icon className="h-5 w-5 text-primary mr-2" />
                    {room.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Besonderheiten:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {room.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Groups Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Unsere Gruppen - Klein, familiär und liebevoll betreut
          </h3>
                 <div className="grid md:grid-cols-2 gap-8">
            {groups.map((group, index) => (
              <Card key={group.name} className="border-0 shadow-card hover:shadow-warm transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className={`${group.color} rounded-t-lg`}>
                  <CardTitle className="text-2xl font-bold text-foreground text-center">
                    {group.name}
                  </CardTitle>
                  <p className="text-center text-lg font-semibold text-muted-foreground">
                    {group.ageRange}
                  </p>
                </CardHeader>
                
                <CardContent className="p-6 bg-card">
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {group.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Max. Kinder:</span>
                      <span className="font-semibold text-foreground">{group.maxChildren}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Betreuer:</span>
                      <span className="font-semibold text-foreground">{group.caregivers}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-card bg-gradient-warm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Home className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Besuchen Sie uns persönlich
              </h3>
              <p className="text-muted-foreground mb-6">
                Nichts ersetzt den persönlichen Eindruck. Vereinbaren Sie einen 
                unverbindlichen Kennenlerntermin und erleben Sie die Yogalino-Atmosphäre selbst.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow shadow-glow"
                onClick={() => {
                  const element = document.querySelector('#parents');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Termin vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Explore;