import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Palette, Music, Users, Leaf } from 'lucide-react';

const Concept = () => {
  const concepts = [
    {
      icon: Heart,
      title: "Yoga & Achtsamkeit",
      description: "Sanfte Yoga-Übungen und Atemtechniken fördern die körperliche und emotionale Entwicklung Ihres Kindes.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Individuelle Förderung", 
      description: "Jedes Kind wird entsprechend seiner Persönlichkeit und seinem Entwicklungsstand begleitet und gefördert.",
      color: "text-terracotta"
    },
    {
      icon: Palette,
      title: "Kreativität & Kunst",
      description: "Durch künstlerische Aktivitäten entdecken Kinder ihre Kreativität und entwickeln ihre Feinmotorik.",
      color: "text-primary"
    },
    {
      icon: Music,
      title: "Musik & Bewegung",
      description: "Singen, Tanzen und Musizieren stärken das Rhythmusgefühl und die sozialen Kompetenzen.",
      color: "text-terracotta"
    },
    {
      icon: Users,
      title: "Kleine Gruppen",
      description: "In überschaubaren Gruppen von maximal 8 Kindern kann sich jedes Kind optimal entfalten.",
      color: "text-primary"
    },
    {
      icon: Leaf,
      title: "Natur erleben",
      description: "Regelmäßige Ausflüge und Naturerfahrungen erweitern den Horizont und stärken die Verbindung zur Umwelt.",
      color: "text-terracotta"
    }
  ];

  const schedule = [
    { time: "7:30 - 8:30", activity: "Ankommen & freies Spiel", description: "Sanfter Start in den Tag" },
    { time: "8:30 - 9:00", activity: "Gemeinsames Frühstück", description: "Stärkung in der Gemeinschaft" },
    { time: "9:00 - 10:00", activity: "Yoga & Achtsamkeit", description: "Bewegung und Entspannung" },
    { time: "10:00 - 11:30", activity: "Kreative Aktivitäten", description: "Entdecken und Gestalten" },
    { time: "11:30 - 12:30", activity: "Mittagessen & Ruhezeit", description: "Kraft tanken" },
    { time: "12:30 - 15:30", activity: "Freispiel & Projekte", description: "Individuelles Lernen" },
    { time: "15:30 - 16:00", activity: "Abschlusskreis", description: "Gemeinsamer Tagesausklang" }
  ];

  return (
    <section id="concept" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Unser pädagogisches{' '}
            <span className="text-primary">Konzept</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Die Arbeit in unserer Einrichtung orientiert sich an dem situationsorientierten Ansatz und dem 
            „Niedersächsischen Kindertagesstättengesetz" (NKiTaG) sowie dem Niedersächsischen Bildungsplan. 
            Durch einen liebevollen, zugewandten und zuverlässigen Umgang können wir Freiraum geben.
          </p>
        </div>

        {/* Concept Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {concepts.map((concept, index) => (
            <Card 
              key={concept.title} 
              className="border-0 shadow-card hover:shadow-warm transition-smooth hover:-translate-y-2 bg-gradient-warm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-background rounded-2xl w-fit shadow-card">
                  <concept.icon className={`h-8 w-8 ${concept.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {concept.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {concept.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Daily Schedule */}
        <div className="bg-gradient-nature rounded-3xl p-8 lg:p-12 text-primary-foreground">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Unser liebevoller Tagesablauf</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Struktur gibt Sicherheit. Unser Tagesablauf bietet einen verlässlichen Rahmen, 
              in dem Ihr Kind sich frei entfalten kann.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-smooth"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 text-sm font-semibold px-3 py-1 rounded-full">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.activity}</h4>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-card"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://yogalino-krippe.de/wp-content/uploads/2023/12/Yogalino_Kinderbalance.pdf';
                link.download = 'Yogalino_Kinderbalance.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Detailliertes Konzept herunterladen (8MB)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;