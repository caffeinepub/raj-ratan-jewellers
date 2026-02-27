import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collections", label: "Collections" },
  { to: "/custom-jewellery", label: "Custom Jewellery" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-4 group">
          <img 
            src="/assets/generated/logo-rajratan-transparent-transparent.dim_400x400.png" 
            alt="Raj Ratan Jewellers Logo" 
            className="h-16 w-16 transition-transform group-hover:scale-105"
          />
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Raj Ratan Jewellers
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                isActive(link.to) ? "text-primary after:w-full" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
            <nav className="flex flex-col space-y-6 mt-12">
              <Link
                to="/"
                className="font-serif text-2xl font-bold text-primary tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                Raj Ratan Jewellers
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive(link.to) ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
