import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Sparkles, Users } from "lucide-react";

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              A Legacy of Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Crafting timeless jewellery for generations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="font-serif text-3xl text-primary font-bold">Raj Ratan Jewellers</span> stands 
              as a beacon of excellence in the heart of Deoghar, Jharkhand. Our story is one of passion, 
              dedication, and an unwavering commitment to the art of jewellery making that has been passed 
              down through generations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We specialize in crafting exquisite jewellery in silver, gold, and precious gems—each piece 
              a testament to our master craftsmen's skill and artistic vision. Our collection spans from 
              traditional Indian designs that honor our rich heritage to contemporary pieces that embrace 
              modern elegance.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-sm overflow-hidden shadow-luxury shimmer-effect">
                <img
                  src="/assets/generated/gold-necklace-2.dim_800x800.jpg"
                  alt="Traditional gold jewellery"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="rounded-sm overflow-hidden shadow-luxury shimmer-effect">
                <img
                  src="/assets/generated/gold-bangles.dim_800x800.jpg"
                  alt="Gold bangles collection"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Custom Creations That Tell Your Story
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond our ready-made collection, we take immense pride in our custom jewellery services. 
              We believe that every piece of jewellery should be as unique as the person wearing it. 
              Whether you have a specific design in mind, a cherished family heirloom you'd like to 
              reimagine, or simply an idea waiting to take shape—our team is here to bring your vision 
              to life.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Customers can bring their own designs, sketches, or inspiration photos, and we transform 
              them into beautiful creations with perfection and expert craftsmanship. Our consultation 
              process is collaborative and transparent, ensuring that every detail aligns with your 
              expectations. From the initial concept to the final polish, we work closely with you 
              at every step.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Tradition Meets Innovation
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Whether traditional, modern, or uniquely personalized designs, we ensure timeless beauty 
              and superior quality in every piece. Our master craftsmen combine time-honored techniques 
              with contemporary tools and methods, resulting in jewellery that stands the test of time.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We work exclusively with certified 22K and 18K gold, sterling silver, and ethically sourced 
              precious and semi-precious gemstones. Every piece that leaves our workshop bears the hallmark 
              of quality and comes with proper certification, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every piece we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border/50 hover:shadow-luxury transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Uncompromising quality in every piece we craft
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-luxury transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Love for the art of jewellery making drives us
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-luxury transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Craftsmanship</h3>
                <p className="text-sm text-muted-foreground">
                  Master artisans with decades of experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-luxury transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Building relationships that last generations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Visit Our Store Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience our collection in person and let us help you find the perfect piece 
              or create something uniquely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-luxury">
                <Link to="/contact">Get Directions</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/collections">View Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
