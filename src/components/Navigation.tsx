import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Start', href: '#home' },
    { name: 'Unser Konzept', href: '#concept' },
    { name: 'Entdecke die Krippe', href: '#explore' },
    { name: 'Unser Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Für Eltern', href: '#parents' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-foreground">
              Yogalino Krippe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-smooth text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.open('tel:051112345678')}>
              <Phone className="h-4 w-4 mr-2" />
              0511 123 456
            </Button>
            <Button onClick={() => scrollToSection('#parents')} className="bg-primary hover:bg-primary-glow shadow-glow">
              Platz anfragen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 animate-fade-in">
            <div className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-muted-foreground hover:text-primary transition-smooth font-medium text-left w-full"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" onClick={() => window.open('tel:051112345678')}>
                  <Phone className="h-4 w-4 mr-2" />
                  0511 123 456
                </Button>
                <Button className="w-full bg-primary hover:bg-primary-glow" onClick={() => scrollToSection('#parents')}>
                  Platz anfragen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;