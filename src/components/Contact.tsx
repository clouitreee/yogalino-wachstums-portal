import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    startDate: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      startDate: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Yogalino Krippe", "Musterstraße 123", "30177 Hannover List"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["0511 123 456 78", "Mo-Fr: 7:30 - 16:00 Uhr"],
      color: "text-terracotta"
    },
    {
      icon: Mail,
      title: "E-Mail", 
      details: ["info@yogalino-krippe.de", "Antwort innerhalb 24h"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      details: ["Mo-Fr: 7:30 - 16:00 Uhr", "Flexible Abholzeiten"],
      color: "text-terracotta"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Anfrage senden",
      description: "Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an."
    },
    {
      step: "2", 
      title: "Kennenlerntermin",
      description: "Wir laden Sie zu einem persönlichen Gespräch in unsere Krippe ein."
    },
    {
      step: "3",
      title: "Probezeit",
      description: "Ihr Kind kann uns eine Woche lang unverbindlich kennenlernen."
    },
    {
      step: "4",
      title: "Sanfte Eingewöhnung",
      description: "Wir begleiten Sie und Ihr Kind Schritt für Schritt beim Ankommen."
    }
  ];

  return (
    <section id="parents" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Für{' '}
            <span className="text-primary">Eltern</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Der erste Schritt zu einem Krippenplatz bei Yogalino ist ganz einfach. 
            Kontaktieren Sie uns und wir begleiten Sie durch den gesamten Prozess.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Ihr Weg zu uns - in 4 einfachen Schritten
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-glow">
                  {step.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="border-0 shadow-card bg-gradient-warm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span>Platz anfragen</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Wir freuen uns auf Sie und Ihr Kind! Teilen Sie uns gerne mit, 
                wann Sie sich einen Krippenstart vorstellen.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ihr Name *</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border/50"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Alter des Kindes</Label>
                    <Input 
                      id="childAge"
                      name="childAge"
                      placeholder="z.B. 18 Monate"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="bg-background border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Gewünschter Start</Label>
                  <Input 
                    id="startDate"
                    name="startDate"
                    type="month"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="bg-background border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ihre Nachricht</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Erzählen Sie uns gerne mehr über Ihr Kind oder stellen Sie Ihre Fragen..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border/50"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-glow shadow-glow">
                  Anfrage senden
                </Button>
                
                {/* PDF Download Button */}
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/Anmeldeformular_Yogalino_Krippe.pdf';
                      link.download = 'Anmeldeformular_Yogalino_Krippe.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    📄 Anmeldeformular herunterladen
                  </Button>
                </div>
              </form>

              {/* Trust elements */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/50">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Zufriedene Eltern empfehlen uns weiter
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="border-0 shadow-card bg-card hover:shadow-warm transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className={`mx-auto mb-4 p-3 bg-secondary rounded-xl w-fit`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <Card className="border-0 shadow-card bg-card">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-nature rounded-lg flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Yogalino Krippe</h4>
                    <p>Musterstraße 123, 30177 Hannover List</p>
                    <p className="text-sm mt-2 opacity-90">
                      Direkt an der U-Bahn Station List • Kostenlose Parkplätze
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-0 shadow-card bg-gradient-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  💡 Gut zu wissen
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• <strong>Kostenlose Schnupperstunde:</strong> Lernen Sie uns unverbindlich kennen</p>
                  <p>• <strong>Flexible Betreuungszeiten:</strong> Angepasst an Ihren Bedarf</p>
                  <p>• <strong>Bio-Vollverpflegung:</strong> Frisch zubereitet in unserer Küche</p>
                  <p>• <strong>Kleine Gruppen:</strong> Maximal 8 Kinder pro Gruppe</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;