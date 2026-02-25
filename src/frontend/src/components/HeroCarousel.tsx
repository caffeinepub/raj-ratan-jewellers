import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const carouselImages = [
  {
    src: "/assets/generated/carousel-gold-necklace.dim_1920x800.jpg",
    alt: "Exquisite Gold Necklace Collection",
    heading: "Timeless Elegance",
    subheading: "Exquisite handcrafted gold jewellery",
  },
  {
    src: "/assets/generated/carousel-silver-gold.dim_1920x800.jpg",
    alt: "Silver and Gold Jewellery Designs",
    heading: "Precious Masterpieces",
    subheading: "Silver & gold designs that celebrate tradition",
  },
  {
    src: "/assets/generated/carousel-gemstone.dim_1920x800.jpg",
    alt: "Precious Gemstone Jewellery",
    heading: "Gemstone Perfection",
    subheading: "Rare gems set in stunning creations",
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Full-Width Carousel Background Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden={index !== currentIndex}
        >
          {/* Theme-aware gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: isLightMode
                ? "linear-gradient(to right, rgba(249, 245, 235, 0.92) 0%, rgba(249, 245, 235, 0.75) 40%, rgba(249, 245, 235, 0.85) 100%)"
                : "linear-gradient(to right, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.5) 50%, rgba(10, 10, 10, 0.75) 100%)",
            }}
          />

          {/* Subtle golden shimmer overlay for luxury feel */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 30% 50%, oklch(0.85 0.16 88 / 0.15) 0%, transparent 50%)",
            }}
          />
        </div>
      ))}

      {/* Content Overlay - Centered with max-width */}
      <div className="relative z-10 container px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Animated slide-specific headings */}
          {carouselImages.map((slide, index) => (
            <div
              key={`content-${index}`}
              className={`transition-all duration-700 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              <h1
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                style={{
                  color: isLightMode ? "oklch(0.08 0 0)" : "oklch(0.95 0.01 85)",
                  textShadow: isLightMode
                    ? "2px 2px 4px rgba(0, 0, 0, 0.1)"
                    : "3px 3px 12px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.3)",
                }}
              >
                {slide.heading}
              </h1>
              <p
                className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 leading-relaxed"
                style={{
                  color: isLightMode ? "oklch(0.45 0.005 85)" : "oklch(0.85 0.16 88)",
                  textShadow: isLightMode
                    ? "1px 1px 3px rgba(0, 0, 0, 0.08)"
                    : "2px 2px 8px rgba(0, 0, 0, 0.8)",
                }}
              >
                {slide.subheading}
              </p>
            </div>
          ))}

          {/* Main Tagline */}
          <p
            className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0"
            style={{
              color: isLightMode ? "oklch(0.35 0.005 85)" : "oklch(0.75 0.01 85)",
              textShadow: isLightMode
                ? "1px 1px 2px rgba(0, 0, 0, 0.05)"
                : "2px 2px 6px rgba(0, 0, 0, 0.7)",
            }}
          >
            Discover exquisite handcrafted jewellery that celebrates tradition and artistry. 
            From our ready-made collection to custom creations, every piece tells a story.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="text-lg h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              <Link to="/collections">View Collections</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-14 px-10 backdrop-blur-md border-2 shadow-xl hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: isLightMode ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 215, 0, 0.1)",
                borderColor: isLightMode ? "oklch(0.72 0.12 82)" : "oklch(0.85 0.16 88)",
                color: isLightMode ? "oklch(0.08 0 0)" : "oklch(0.95 0.01 85)",
              }}
            >
              <Link to="/custom-jewellery">Create Custom Design</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full backdrop-blur-md border-2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: isLightMode ? "rgba(255, 255, 255, 0.8)" : "rgba(10, 10, 10, 0.6)",
          borderColor: "oklch(0.85 0.16 88)",
          color: "oklch(0.85 0.16 88)",
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full backdrop-blur-md border-2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: isLightMode ? "rgba(255, 255, 255, 0.8)" : "rgba(10, 10, 10, 0.6)",
          borderColor: "oklch(0.85 0.16 88)",
          color: "oklch(0.85 0.16 88)",
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-7 w-7" />
      </Button>

      {/* Dot Indicators - Positioned at bottom */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: index === currentIndex ? "48px" : "12px",
              height: "12px",
              backgroundColor:
                index === currentIndex ? "oklch(0.85 0.16 88)" : "oklch(0.85 0.16 88 / 0.4)",
              boxShadow:
                index === currentIndex ? "0 0 20px oklch(0.85 0.16 88 / 0.6)" : "none",
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Add hover state to parent for arrow visibility */}
      <div className="absolute inset-0 group" aria-hidden="true" />
    </section>
  );
}
