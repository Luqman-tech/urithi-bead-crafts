import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard, Product } from "@/components/products/ProductCard";
import { ArtisanCard, Artisan } from "@/components/artisans/ArtisanCard";
import { EventCard, Event } from "@/components/events/EventCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import heroImage from "@/assets/hero-beadwork.jpg";
import {
  ArrowRight,
  Shield,
  Truck,
  Heart,
  Users,
  Sparkles,
  Globe,
} from "lucide-react";

// Sample data
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Maasai Wedding Necklace - Ceremonial Collection",
    price: 12500,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop",
    artisan: { name: "Mama Naserian", verified: true },
    category: "Necklaces",
    rating: 4.9,
    reviewCount: 127,
    isNew: true,
  },
  {
    id: "2",
    name: "Traditional Kikuyu Beaded Bracelet Set",
    price: 3500,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    artisan: { name: "Wanjiku Crafts", verified: true },
    category: "Bracelets",
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "3",
    name: "Samburu Warrior Headpiece - Limited Edition",
    price: 28000,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&h=600&fit=crop",
    artisan: { name: "Lekishon Arts", verified: true },
    category: "Headwear",
    rating: 5.0,
    reviewCount: 34,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Coastal Beaded Earrings - Ocean Series",
    price: 2200,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    artisan: { name: "Pwani Beads", verified: false },
    category: "Earrings",
    rating: 4.7,
    reviewCount: 56,
    isNew: true,
  },
];

const featuredArtisans: Artisan[] = [
  {
    id: "1",
    name: "Mama Naserian",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    location: "Narok, Kenya",
    specialty: "Maasai Beadwork",
    rating: 4.9,
    reviewCount: 234,
    productCount: 45,
    verified: true,
    bio: "Third-generation Maasai beadwork artisan, preserving traditional techniques passed down through my grandmother.",
  },
  {
    id: "2",
    name: "Wanjiku Gathoni",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    location: "Nyeri, Kenya",
    specialty: "Kikuyu Crafts",
    rating: 4.8,
    reviewCount: 156,
    productCount: 32,
    verified: true,
    bio: "Modern interpretations of traditional Kikuyu beadwork, blending heritage with contemporary design.",
  },
  {
    id: "3",
    name: "Lekishon Meoli",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    location: "Samburu, Kenya",
    specialty: "Samburu Art",
    rating: 5.0,
    reviewCount: 89,
    productCount: 28,
    verified: true,
    bio: "Samburu warrior turned artisan, creating authentic ceremonial pieces with deep cultural significance.",
  },
];

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "URITHI Pop-Up Market - Nairobi Edition",
    description: "Experience the finest African beadwork and cultural crafts at our flagship monthly market at the Nairobi National Museum.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
    date: "January 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Nairobi National Museum",
    type: "pop-up",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Beadwork Masterclass with Mama Naserian",
    description: "Learn traditional Maasai beading techniques from one of Kenya's most celebrated artisans.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    date: "January 20, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    type: "workshop",
    isVirtual: true,
  },
];

const features = [
  {
    icon: Shield,
    title: "Authentic & Verified",
    description: "Every artisan is vetted for authenticity and quality craftsmanship.",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "We ship to over 50 countries with secure packaging and tracking.",
  },
  {
    icon: Heart,
    title: "Fair Trade",
    description: "Artisans receive 85% of every sale, ensuring fair compensation.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Supporting 500+ artisan families across Kenya and East Africa.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="African beadwork craftsmanship"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-earth/95 via-earth/80 to-earth/60" />
            <div className="absolute inset-0 pattern-overlay" />
          </div>

          <div className="container relative">
            <div className="flex min-h-[85vh] flex-col justify-center py-20 lg:max-w-2xl">
              <div className="opacity-0 animate-fade-in">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-2 text-sm font-medium text-gold-light">
                  <Sparkles className="h-4 w-4" />
                  Celebrating African Heritage
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-primary-foreground opacity-0 animate-slide-up stagger-1 md:text-5xl lg:text-6xl">
                Discover Authentic African{" "}
                <span className="text-gold">Beadwork</span> & Cultural Crafts
              </h1>

              <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 opacity-0 animate-slide-up stagger-2">
                Connect directly with skilled Kenyan artisans. Every piece tells a story 
                of heritage, tradition, and masterful craftsmanship passed down through generations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-slide-up stagger-3">
                <Link to="/marketplace">
                  <Button variant="gold" size="xl">
                    Explore Marketplace
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/sell">
                  <Button variant="hero-outline" size="xl">
                    Sell on URITHI
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 opacity-0 animate-fade-in stagger-4">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary-foreground">500+</p>
                  <p className="text-sm text-primary-foreground/70">Artisans</p>
                </div>
                <div className="h-12 w-px bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary-foreground">5,000+</p>
                  <p className="text-sm text-primary-foreground/70">Products</p>
                </div>
                <div className="h-12 w-px bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary-foreground">50+</p>
                  <p className="text-sm text-primary-foreground/70">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-border bg-card py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 opacity-0 animate-fade-in stagger-${index + 1}`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                  Featured Products
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Handpicked treasures from our finest artisans
                </p>
              </div>
              <Link to="/marketplace" className="hidden lg:block">
                <Button variant="outline">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-center lg:hidden">
              <Link to="/marketplace">
                <Button variant="outline" size="lg">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Artisans */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Meet Our Artisans
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                The talented hands behind every masterpiece. Each artisan brings generations 
                of cultural knowledge and exceptional skill.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredArtisans.map((artisan) => (
                <ArtisanCard key={artisan.id} artisan={artisan} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/artisans">
                <Button variant="default" size="lg">
                  Discover All Artisans
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                  Events & Pop-Up Markets
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Experience URITHI in person at our curated events
                </p>
              </div>
              <Link to="/events" className="hidden lg:block">
                <Button variant="outline">
                  View Calendar
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  variant={index === 0 ? "featured" : "default"}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
          <div className="absolute inset-0 pattern-overlay opacity-10" />
          <div className="container relative text-center">
            <Globe className="mx-auto h-12 w-12 text-gold" />
            <h2 className="mt-6 font-display text-3xl font-bold text-primary-foreground lg:text-4xl">
              Ready to Share Your Craft with the World?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Join over 500 artisans who trust URITHI to connect them with customers 
              across the globe. We handle the marketing, payments, and shipping.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/sell">
                <Button variant="gold" size="xl">
                  Start Selling Today
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="hero-outline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
