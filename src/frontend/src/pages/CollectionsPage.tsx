import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const goldItems = [
  { id: 1, name: "Intricate Gold Necklace", image: "/assets/generated/gold-necklace-1.dim_800x800.jpg", description: "Exquisite filigree work with gemstone accents" },
  { id: 2, name: "Bridal Gold Necklace Set", image: "/assets/generated/gold-necklace-2.dim_800x800.jpg", description: "Temple jewelry with Lakshmi pendant" },
  { id: 3, name: "Traditional Gold Bangles", image: "/assets/generated/gold-bangles.dim_800x800.jpg", description: "Peacock and floral motif designs" },
  { id: 4, name: "Gold Jhumka Earrings", image: "/assets/generated/gold-earrings-1.dim_800x800.jpg", description: "Intricate filigree with pearl drops" },
  { id: 5, name: "Elegant Gold Earrings", image: "/assets/generated/gold-earrings.dim_800x800.jpg", description: "Classic stud and drop earring designs" },
  { id: 6, name: "Gold Ring Collection", image: "/assets/generated/gold-rings.dim_800x800.jpg", description: "Engagement and statement rings" },
  { id: 7, name: "Designer Gold Ring", image: "/assets/generated/gold-ring.dim_800x800.jpg", description: "Modern minimalist gold band" },
  { id: 8, name: "Elegant Gold Chain", image: "/assets/generated/gold-chain.dim_800x800.jpg", description: "Delicate everyday wear chain" },
  { id: 9, name: "Traditional Mangalsutra", image: "/assets/generated/gold-mangalsutra.dim_800x800.jpg", description: "Sacred necklace with black beads" },
  { id: 10, name: "Gold Nose Ring", image: "/assets/generated/gold-nosering.dim_800x800.jpg", description: "Delicate filigree work with pearl" },
  { id: 11, name: "Gold Anklets", image: "/assets/generated/gold-anklets.dim_800x800.jpg", description: "Traditional payal with bells" },
  { id: 12, name: "Exquisite Gold Bangles", image: "/assets/generated/gold-bangles.dim_800x800.jpg", description: "Designer bangles with intricate patterns" },
];

const silverItems = [
  { id: 11, name: "Oxidized Silver Necklace", image: "/assets/generated/silver-necklace.dim_800x800.jpg", description: "Traditional tribal design motifs" },
  { id: 12, name: "Silver Bangles Set", image: "/assets/generated/silver-bangles.dim_800x800.jpg", description: "Intricate carved patterns" },
  { id: 13, name: "Silver Jhumka Earrings", image: "/assets/generated/silver-earrings.dim_800x800.jpg", description: "Traditional design with pearls" },
  { id: 14, name: "Contemporary Silver Set", image: "/assets/generated/silver-necklace.dim_800x800.jpg", description: "Modern bohemian style" },
];

const gemstoneItems = [
  { id: 15, name: "Gemstone Necklace", image: "/assets/generated/gemstone-necklace.dim_800x800.jpg", description: "Emerald, ruby, and sapphire in gold" },
  { id: 16, name: "Gemstone Rings", image: "/assets/generated/gemstone-rings.dim_800x800.jpg", description: "Precious stones in gold settings" },
  { id: 17, name: "Gemstone Earrings", image: "/assets/generated/gemstone-earrings.dim_800x800.jpg", description: "Elaborate design with diamonds" },
];

const customItems = [
  { id: 18, name: "Custom Crafting Process", image: "/assets/generated/custom-design-1.dim_800x600.jpg", description: "Master craftsmen at work" },
  { id: 19, name: "Design Consultation", image: "/assets/generated/custom-design-2.dim_800x600.jpg", description: "Personalized design planning" },
];

interface JewelleryItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
}

function JewelleryItem({ item }: JewelleryItemProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer shimmer-effect overflow-hidden border-border/50 hover:shadow-luxury-lg transition-all duration-300">
          <div className="aspect-square overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto rounded-sm shadow-luxury"
          />
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold mb-4">{item.name}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Quality:</span> Certified hallmark gold/silver
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Customization:</span> Available on request
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> Visit our store in Deoghar
              </p>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Contact us for pricing and availability
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CollectionsPage() {
  const [activeTab, setActiveTab] = useState("gold");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our Collections
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our exquisite range of gold, silver, and gemstone jewellery
            </p>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto">
              <TabsTrigger value="gold" className="text-sm md:text-base py-3">
                Gold Jewellery
              </TabsTrigger>
              <TabsTrigger value="silver" className="text-sm md:text-base py-3">
                Silver Jewellery
              </TabsTrigger>
              <TabsTrigger value="gemstone" className="text-sm md:text-base py-3">
                Gemstone
              </TabsTrigger>
              <TabsTrigger value="custom" className="text-sm md:text-base py-3">
                Custom Design
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gold" className="mt-0">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold mb-2">Gold Jewellery</h2>
                <p className="text-muted-foreground">
                  Certified 22K and 18K gold pieces with traditional and modern designs
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {goldItems.map((item) => (
                  <JewelleryItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="silver" className="mt-0">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold mb-2">Silver Jewellery</h2>
                <p className="text-muted-foreground">
                  Sterling silver pieces with intricate craftsmanship and traditional motifs
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {silverItems.map((item) => (
                  <JewelleryItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gemstone" className="mt-0">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold mb-2">Gemstone Jewellery</h2>
                <p className="text-muted-foreground">
                  Precious and semi-precious stones set in exquisite gold designs
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {gemstoneItems.map((item) => (
                  <JewelleryItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-0">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold mb-2">Custom Designs</h2>
                <p className="text-muted-foreground">
                  Create your own unique piece with our master craftsmen
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {customItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden border-border/50 shadow-luxury">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-80 object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="font-serif text-2xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="max-w-2xl mx-auto text-center bg-muted/30 p-8 rounded-sm">
                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Create Your Piece?</h3>
                <p className="text-muted-foreground mb-6">
                  Visit our custom jewellery page to learn more about the process and start your journey
                </p>
                <a
                  href="/custom-jewellery"
                  className="inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 shadow-luxury"
                >
                  Learn About Custom Design
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 px-4 md:px-8 bg-primary/10">
        <div className="container text-center">
          <p className="text-muted-foreground">
            All pieces are available at our store in Deoghar. Visit us or{" "}
            <a href="/contact" className="text-primary hover:underline font-semibold">
              contact us
            </a>{" "}
            for pricing and availability.
          </p>
        </div>
      </section>
    </div>
  );
}
