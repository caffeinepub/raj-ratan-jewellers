import { useState } from "react";
import { useActor } from "@/hooks/useActor";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export function ContactPage() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const submitMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Backend not available");
      
      const { name, phone, email, message } = formData;
      
      if (!name || !phone || !email || !message) {
        throw new Error("Please fill in all fields");
      }

      const result = await actor.submitInquiry(name, phone, email, message);
      return result;
    },
    onSuccess: (result) => {
      if (result) {
        toast.success("Thank you! We'll contact you soon.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to submit inquiry");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Visit our store or send us a message. We're here to help you find or create the perfect piece.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border/50 shadow-luxury">
                <CardHeader>
                  <CardTitle className="font-serif text-3xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full shadow-luxury"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <Card className="border-border/50">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Our Store</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Pandey Gali, Roy Road, opposite Miss Universe and Raja Photo Framing,
                        S B, Deoghar, Jharkhand 814112, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Open 10:00 AM onwards<br />
                        <span className="text-xs">Closed on Tuesdays</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+917717770674"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        +91 7717770674
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:rajratanjewellersdeo@gmail.com"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        rajratanjewellersdeo@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="border-border/50 overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    title="Raj Ratan Jewellers Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.9876543210123!2d86.69765!3d24.48543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1a8b876543210%3A0x1234567890abcdef!2sRaj%20Ratan%20Jewellers!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">Prefer WhatsApp?</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Chat with us directly for quick responses
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-luxury"
                  >
                    <a
                      href="https://wa.me/917717770674?text=Hi%2C%20I%27m%20interested%20in%20your%20jewellery%20collection"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 px-4 md:px-8 bg-muted/30">
        <div className="container text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold mb-4">Planning a Visit?</h3>
          <p className="text-muted-foreground leading-relaxed">
            We recommend calling ahead for custom design consultations to ensure our master craftsmen can
            dedicate time to your project. Walk-ins are always welcome during business hours for browsing
            our collection.
          </p>
        </div>
      </section>
    </div>
  );
}
