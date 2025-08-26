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
                Wo kleine{' '}
                <span className="text-primary">Persönlichkeiten</span>{' '}
                mit Achtsamkeit und{' '}
                <span className="text-terracotta">Freude</span>{' '}
                wachsen
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                In unserer Yogalino Krippe verbinden wir liebevolle Kinderbetreuung mit den wertvollen 
                Elementen von Yoga und Achtsamkeit. Ihr Kind entwickelt sich in kleinen Gruppen 
                individuell und ganzheitlich.
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
            <div className="relative overflow-hidden rounded-3xl shadow-warm">
              <img
                src={heroImage}
                alt="Liebevolle Kinderbetreuung in der Yogalino Krippe"
                className="w-full h-[600px] object-cover transition-smooth hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-card border border-border/50 max-w-xs animate-fade-in">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                "Unser Sohn liebt es hier! Das Team ist so herzlich und die Yoga-Elemente sind wunderbar."
              </p>
              <p className="text-xs font-medium text-foreground">Sarah M., Mutter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;