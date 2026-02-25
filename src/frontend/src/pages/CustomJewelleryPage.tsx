import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Palette, Hammer, Sparkles } from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Share your vision, ideas, or bring your own design sketches. Our experts will guide you through material options, gemstone selections, and design possibilities.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "We create detailed sketches and 3D models of your piece. You'll review and refine the design until it perfectly matches your vision.",
  },
  {
    icon: Hammer,
    title: "Crafting",
    description:
      "Our master craftsmen bring your design to life using traditional techniques and modern precision. Watch your vision transform into reality.",
  },
  {
    icon: Sparkles,
    title: "Delivery",
    description:
      "Your custom piece undergoes quality checks and final polishing. We present your unique creation with proper certification and care instructions.",
  },
];

const features = [
  {
    title: "Bring Your Own Design",
    description:
      "Have a design in mind? Sketches, photos, or even just ideas—we'll work with you to create exactly what you envision.",
  },
  {
    title: "Personalized Jewellery",
    description:
      "Add engravings, choose specific gemstones, or incorporate sentimental elements to make your piece truly one-of-a-kind.",
  },
  {
    title: "Wedding & Bridal Sets",
    description:
      "From engagement rings to complete bridal sets, we create pieces that will be cherished for generations.",
  },
  {
    title: "Traditional Designs",
    description:
      "Reimagine classic Indian jewellery styles with your personal touch. We honor tradition while embracing your unique preferences.",
  },
  {
    title: "Modern Contemporary",
    description:
      "Sleek, minimalist, or bold statement pieces—our craftsmen excel in creating modern designs that stand out.",
  },
  {
    title: "Handmade Craftsmanship",
    description:
      "Every piece is handcrafted by master artisans with decades of experience, ensuring exceptional quality and attention to detail.",
  },
];

export function CustomJewelleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Your Vision, Our Craftsmanship
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Create jewellery as unique as your story. From concept to creation, we bring your dreams to reality.
            </p>
            <Button asChild size="lg" className="shadow-luxury">
              <Link to="/contact">Start Your Custom Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the first conversation to the final masterpiece, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-border z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-primary" />
                    </div>
                  )}

                  <Card className="relative z-10 text-center border-border/50 hover:shadow-luxury transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex justify-center mb-4">
                        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center relative">
                          <Icon className="h-10 w-10 text-primary" />
                          <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive custom jewellery services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:shadow-luxury transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Behind the Scenes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the artistry and dedication that goes into every custom piece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-border/50 shadow-luxury shimmer-effect group">
              <img
                src="/assets/generated/custom-design-1.dim_800x600.jpg"
                alt="Master craftsman at work"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Our master craftsmen bring decades of experience to every piece, ensuring exceptional quality
                  and attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border/50 shadow-luxury shimmer-effect group">
              <img
                src="/assets/generated/custom-design-2.dim_800x600.jpg"
                alt="Design consultation"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2">Collaborative Design</h3>
                <p className="text-muted-foreground">
                  Work directly with our designers to refine every aspect of your piece, from material selection
                  to final details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container max-w-4xl">
          <Card className="border-border/50 shadow-luxury-lg">
            <CardContent className="pt-12 pb-12 px-8 md:px-12 text-center">
              <div className="flex justify-center mb-6">
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
              <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic mb-8">
                "They took my rough sketch and transformed it into the most beautiful engagement ring I've ever
                seen. The attention to detail and craftsmanship exceeded all my expectations. My fiancée was
                speechless when I proposed with this custom piece."
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Amit Verma</p>
                <p className="text-sm text-muted-foreground">Custom Engagement Ring</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-12 rounded-sm">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Create Your Dream Jewellery Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to start your custom jewellery journey? Visit our store in Deoghar or get in touch with us
              to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-luxury">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/collections">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
