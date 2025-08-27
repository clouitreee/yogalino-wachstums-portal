import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Explore from '@/components/Explore';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { Heart, Phone, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Concept />
        <Explore />
        <Team />
        <Blog />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Logo & Mission */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">Yogalino Krippe</span>
              </div>
              <p className="text-sm text-background/80 leading-relaxed">
                Wo kleine Persönlichkeiten mit Achtsamkeit und Freude wachsen. 
                Liebevolle Kinderbetreuung im Herzen von Hannover List.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Schnelle Links</h4>
              <nav className="space-y-2">
                {[
                  { name: 'Unser Konzept', href: '#concept' },
                  { name: 'Unser Team', href: '#team' },
                  { name: 'Platz anfragen', href: '#parents' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-background/80 hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Kontakt</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">0511/940 678 81</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">yogalino@kila-ini.de</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary-glow text-primary-foreground"
                  onClick={() => {
                    const element = document.querySelector('#parents');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Jetzt Termin vereinbaren
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 mt-8 pt-6 text-center">
            <p className="text-xs text-background/60">
              © 2024 Yogalino Krippe. Alle Rechte vorbehalten. 
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-primary transition-smooth">Datenschutz</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-primary transition-smooth">Impressum</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
