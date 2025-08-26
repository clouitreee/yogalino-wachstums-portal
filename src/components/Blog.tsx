import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Heart, Baby, Lightbulb, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Sanfte Eingewöhnung: Tipps für den Krippenstart",
      excerpt: "Wie Sie Ihr Kind liebevoll auf den ersten Tag in der Krippe vorbereiten und was Sie beachten sollten.",
      date: "15. Dezember 2024",
      readTime: "5 Min",
      category: "Eingewöhnung",
      icon: Heart,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Kinderyoga: Entspannung für die Kleinsten",
      excerpt: "Entdecken Sie, wie Yoga-Elemente in der frühen Kindheit zur emotionalen Entwicklung beitragen.",
      date: "10. Dezember 2024",
      readTime: "4 Min",
      category: "Pädagogik",
      icon: Baby,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Gesunde Ernährung in der Krippe",
      excerpt: "Warum Bio-Vollverpflegung wichtig ist und wie wir täglich frische Mahlzeiten zubereiten.",
      date: "5. Dezember 2024",
      readTime: "6 Min",
      category: "Ernährung",
      icon: Lightbulb,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Soziale Entwicklung in kleinen Gruppen",
      excerpt: "Die Vorteile kleiner Betreuungsgruppen für die soziale und emotionale Entwicklung Ihres Kindes.",
      date: "1. Dezember 2024",
      readTime: "5 Min",
      category: "Entwicklung",
      icon: Users,
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["Alle", "Eingewöhnung", "Pädagogik", "Ernährung", "Entwicklung"];

  return (
    <section id="blog" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Blog & <span className="text-primary">Ratgeber</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wertvolle Tipps und Einblicke rund um die liebevolle Betreuung und Entwicklung Ihres Kindes. 
            Von Erziehungsexperten und unserem erfahrenen Yogalino-Team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Alle" ? "default" : "outline"}
              size="sm"
              className={category === "Alle" ? "bg-primary hover:bg-primary-glow" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="border-0 shadow-card hover:shadow-warm transition-all duration-300 cursor-pointer group bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-nature rounded-t-lg flex items-center justify-center text-primary-foreground">
                <post.icon className="h-16 w-16 opacity-80" />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-secondary px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary-glow p-0 h-auto font-semibold"
                  >
                    Weiterlesen →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="border-0 shadow-card bg-gradient-warm max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bleiben Sie informiert
            </h3>
            <p className="text-muted-foreground mb-6">
              Erhalten Sie unsere neuesten Artikel und Tipps direkt in Ihr E-Mail-Postfach. 
              Kostenlos und jederzeit abbestellbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-glow">
                Anmelden
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Datenschutz ist uns wichtig. Keine Spam-E-Mails, versprochen!
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default Blog;