import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Gem, Users, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroCarousel } from "@/components/HeroCarousel";

const featuredCollections = [
  {
    title: "Gold Jewellery",
    image: "/assets/generated/gold-necklace-1.dim_800x800.jpg",
    description: "Exquisite 22K gold pieces crafted with precision",
    link: "/collections",
  },
  {
    title: "Silver Jewellery",
    image: "/assets/generated/silver-necklace.dim_800x800.jpg",
    description: "Elegant silver designs with traditional motifs",
    link: "/collections",
  },
  {
    title: "Gemstone Jewellery",
    image: "/assets/generated/gemstone-necklace.dim_800x800.jpg",
    description: "Precious gems set in stunning gold designs",
    link: "/collections",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Deoghar",
    text: "The custom bridal set they created for my wedding was beyond my dreams. Every detail was perfect, and the craftsmanship is exceptional.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Ranchi",
    text: "I brought my grandmother's old jewellery for redesign. They transformed it into beautiful modern pieces while preserving its sentimental value.",
    rating: 5,
  },
  {
    name: "Anita Devi",
    location: "Deoghar",
    text: "Best jewellers in Deoghar! The gold quality is excellent and the designs are both traditional and contemporary. Highly recommended.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How does custom jewellery work?",
    answer: "Bring your design ideas or inspiration to our store. Our expert craftsmen will consult with you, create detailed sketches, and craft your dream piece with precision. The process typically takes 2-4 weeks depending on complexity.",
  },
  {
    question: "What gold purity do you offer?",
    answer: "We specialize in 22K (91.6% purity) and 18K (75% purity) gold jewellery. All pieces come with proper hallmark certification ensuring authenticity and quality.",
  },
  {
    question: "What is the delivery time for custom orders?",
    answer: "Custom jewellery typically takes 2-4 weeks from design approval to completion. Simple designs may be ready sooner, while intricate pieces might take longer. We keep you updated throughout the process.",
  },
  {
    question: "Do you repair old jewellery?",
    answer: "Yes, we offer repair and refurbishment services for old jewellery. Bring your pieces to our store for evaluation, and we'll restore them to their original beauty or redesign them into contemporary styles.",
  },
  {
    question: "Can I bring my own design?",
    answer: "Absolutely! We welcome custom designs from our customers. Bring sketches, photos, or ideas, and our master craftsmen will bring your vision to life with expert precision.",
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Full-Width Carousel */}
      <HeroCarousel />

      {/* Brand Introduction */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Crafted with Passion, Worn with Pride
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Raj Ratan Jewellers, we believe jewellery is more than adornment—it's a legacy. 
              For generations, our master craftsmen have been creating pieces that blend traditional 
              Indian artistry with contemporary elegance. Whether you choose from our curated collection 
              or commission a custom design, every piece reflects our commitment to perfection.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <Card className="text-center border-border/50 hover:shadow-luxury transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="font-serif text-xl font-semibold mb-2">Expert Craftsmanship</h4>
                <p className="text-sm text-muted-foreground">
                  Master artisans with decades of experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-luxury transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Gem className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="font-serif text-xl font-semibold mb-2">Premium Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Certified 22K & 18K gold with hallmark
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
                <h4 className="font-serif text-xl font-semibold mb-2">Custom Designs</h4>
                <p className="text-sm text-muted-foreground">
                  Bring your vision to life with personalized pieces
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-luxury transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="font-serif text-xl font-semibold mb-2">Trusted Since Generations</h4>
                <p className="text-sm text-muted-foreground">
                  Family-owned heritage of excellence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Collections</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of gold, silver, and gemstone jewellery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <Link
                key={index}
                to={collection.link}
                className="group shimmer-effect"
              >
                <Card className="overflow-hidden border-border/50 hover:shadow-luxury-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h4 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {collection.title}
                    </h4>
                    <p className="text-muted-foreground">{collection.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="shadow-luxury-lg text-lg h-14 px-10 bg-primary hover:bg-primary/90">
              <Link to="/collections">View All Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Jewellery Highlight */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Your Vision, Our Craftsmanship
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Have a unique design in mind? Our master craftsmen specialize in creating 
                custom jewellery that brings your dreams to reality. From engagement rings 
                to bridal sets, from traditional designs to modern masterpieces—we craft 
                pieces that are as unique as you are.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">Personalized consultation and design process</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">Traditional and contemporary design options</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">Expert craftsmanship with attention to detail</p>
                </div>
              </div>
              <Button asChild size="lg" className="shadow-luxury-lg text-lg h-14 px-10 bg-primary hover:bg-primary/90">
                <Link to="/custom-jewellery">Start Custom Design</Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img
                src="/assets/generated/custom-design-1.dim_800x600.jpg"
                alt="Custom jewellery crafting process"
                className="rounded-sm w-full h-64 object-cover shadow-luxury shimmer-effect"
              />
              <img
                src="/assets/generated/custom-design-2.dim_800x600.jpg"
                alt="Custom design consultation"
                className="rounded-sm w-full h-64 object-cover shadow-luxury shimmer-effect mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trust built through generations of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:shadow-luxury transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Sparkles key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our jewellery and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-sm px-6">
                <AccordionTrigger className="font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container text-center">
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Create Your Dream Jewellery Today
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Visit our store in Deoghar or get in touch to start your custom jewellery journey
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="shadow-luxury-lg text-lg h-14 px-10 bg-primary hover:bg-primary/90">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-10 bg-card/80 backdrop-blur-sm hover:bg-card border-2 border-primary hover:text-primary shadow-luxury">
              <Link to="/custom-jewellery">Learn About Custom Design</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-10 bg-card/80 backdrop-blur-sm hover:bg-card border-2 border-primary hover:text-primary shadow-luxury">
              <Link to="/collections">Visit Our Store</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
