import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail, Upload, X, ImageIcon } from "lucide-react";
import { toast } from "sonner";

const BUSINESS_EMAIL = "rajratanjewellers.deoghar@gmail.com";

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  // Strip spaces, dashes, parentheses, dots, and leading +
  const digits = phone.replace(/[\s\-().+]/g, "");
  // Must be exactly 10 digits starting with 6-9 (Indian mobile),
  // OR 11 digits starting with 0 followed by a 6-9 digit (STD trunk format),
  // OR exactly 10 digits (any country – fallback)
  return /^[6-9]\d{9}$/.test(digits) || /^0[6-9]\d{9}$/.test(digits);
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [uploadedImage, setUploadedImage] = useState<{ file: File; preview: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file (JPG, PNG, etc.)");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image size must be less than 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage({ file, preview: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPhoneError("");

    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!isValidPhone(phone)) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    const subject = encodeURIComponent(`Jewellery Inquiry from ${name}`);
    let bodyText = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`;

    if (uploadedImage) {
      bodyText += `\n\n---\nDesign Reference Image: ${uploadedImage.file.name}\n(Please manually attach the image saved on your device to this email before sending.)`;
    }

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

    toast.success(
      uploadedImage
        ? "Your email app will open. Please attach your design image and send."
        : "Your email app will open with the message pre-filled. Please send it to complete your inquiry."
    );

    setFormData({ name: "", phone: "", email: "", message: "" });
    setEmailError("");
    setPhoneError("");
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.id === "email") setEmailError("");
    if (e.target.id === "phone") setPhoneError("");
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.id === "phone" && e.target.value) {
      if (!isValidPhone(e.target.value)) {
        setPhoneError("Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).");
      } else {
        setPhoneError("");
      }
    }
    if (e.target.id === "email" && e.target.value) {
      if (!isValidEmail(e.target.value)) {
        setEmailError("Please enter a valid email address (e.g. name@example.com).");
      } else {
        setEmailError("");
      }
    }
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
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={15}
                        required
                        className={`h-12 ${phoneError ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {phoneError ? (
                        <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                      ) : (
                        <p className="text-muted-foreground text-xs mt-1">Enter a valid 10-digit Indian mobile number</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="text"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`h-12 ${emailError ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {emailError ? (
                        <p className="text-red-500 text-xs mt-1">{emailError}</p>
                      ) : (
                        <p className="text-muted-foreground text-xs mt-1">We'll never share your email with anyone</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    {/* Optional Image Upload */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        <ImageIcon className="h-4 w-4" />
                        Upload Design Reference
                        <span className="text-muted-foreground font-normal text-xs ml-1">(Optional)</span>
                      </Label>

                      {!uploadedImage ? (
                        <button
                          type="button"
                          className="w-full border-2 border-dashed border-border/60 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload your design image
                          </p>
                          <p className="text-xs text-muted-foreground/70 mt-1">
                            JPG, PNG, WEBP up to 10MB
                          </p>
                        </button>
                      ) : (
                        <div className="relative rounded-lg overflow-hidden border border-border/50 bg-muted/20">
                          <img
                            src={uploadedImage.preview}
                            alt="Design reference preview"
                            className="w-full max-h-48 object-contain p-2"
                          />
                          <div className="px-3 py-2 flex items-center justify-between bg-muted/40">
                            <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                              {uploadedImage.file.name}
                            </span>
                            <button
                              type="button"
                              onClick={removeImage}
                              className="text-muted-foreground hover:text-destructive transition-colors ml-2 shrink-0"
                              aria-label="Remove image"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />

                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        Have a design in mind? Upload a reference image (sketch, photo, or inspiration). You will be prompted to attach it manually when your email app opens.
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground/70 text-center">
                      You will be redirected to your email app to complete the submission.
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full shadow-luxury"
                    >
                      Send Message
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
                        <span className="text-xs">Closed on Thursdays</span>
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
                        href="mailto:rajratanjewellers.deoghar@gmail.com"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        rajratanjewellers.deoghar@gmail.com
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
