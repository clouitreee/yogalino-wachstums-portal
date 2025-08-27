import { Button } from '@/components/ui/button';
import { Heart, Star, Users, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-nursery.jpg';

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-soft overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-terracotta/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Liebevolle Betreuung in Hannover List</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Yogalino Krippe - Die erste{' '}
                <span className="text-primary">Yoga-Krippe</span>{' '}
                in{' '}
                <span className="text-terracotta">Hannover</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong>Unser Mantra:</strong> Yoga ist kein Ziel, Yoga ist eine Begleitung fürs Leben – von Anfang an. 
                Mit Zeit und Geduld begleiten wir die Kinder und sind der sichere Hafen.
              </p>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Kleine Gruppen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-terracotta" />
                <span>Qualifiziertes Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span>Yoga & Achtsamkeit</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow shadow-glow text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-bounce hover:scale-105"
                onClick={() => scrollToSection('#parents')}
              >
                Kennenlerntermin vereinbaren
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg transition-smooth"
                onClick={() => scrollToSection('#parents')}
              >
                Platz anfragen
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-warm border border-border/30">
              <div className="w-full h-[600px] bg-gradient-soft flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Heart className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <span>Hero-Bild kommt bald</span>
                </div>
              </div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-card border border-border/50 max-w-xs animate-fade-in">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                "Wir sind so dankbar für die liebevolle Betreuung. Unser Kind wächst hier mit so viel Freude und Achtsamkeit."
              </p>
              <p className="text-xs font-medium text-foreground">Familie Weber</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;