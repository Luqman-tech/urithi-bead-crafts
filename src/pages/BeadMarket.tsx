import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Phone, Mail, Package, Star, MessageCircle } from "lucide-react";
import { useState } from "react";

interface BeadSupplier {
  id: string;
  name: string;
  image: string;
  location: string;
  specialty: string[];
  rating: number;
  reviewCount: number;
  description: string;
  verified: boolean;
  yearsInBusiness: number;
}

const suppliers: BeadSupplier[] = [
  {
    id: "1",
    name: "Mama Nduta Beads",
    image: "https://images.unsplash.com/photo-1594892580543-f8f6d1f194f8?w=400&h=400&fit=crop",
    location: "Nairobi, Kenya",
    specialty: ["Glass Beads", "Seed Beads", "Czech Glass"],
    rating: 4.9,
    reviewCount: 156,
    description: "Wholesale supplier of premium glass beads and seed beads. Direct imports from Czech Republic and Japan.",
    verified: true,
    yearsInBusiness: 15,
  },
  {
    id: "2",
    name: "Coastal Bead Traders",
    image: "https://images.unsplash.com/photo-1612463966472-fb3ff5f1f3d9?w=400&h=400&fit=crop",
    location: "Mombasa, Kenya",
    specialty: ["African Trade Beads", "Recycled Glass", "Cowrie Shells"],
    rating: 4.7,
    reviewCount: 89,
    description: "Specializing in authentic African trade beads and coastal materials. Serving artisans since 2008.",
    verified: true,
    yearsInBusiness: 16,
  },
  {
    id: "3",
    name: "Maasai Materials Co.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=400&h=400&fit=crop",
    location: "Narok, Kenya",
    specialty: ["Traditional Materials", "Leather", "Metal Findings"],
    rating: 4.8,
    reviewCount: 67,
    description: "Traditional Maasai beading materials including authentic leather, metal ornaments, and natural materials.",
    verified: true,
    yearsInBusiness: 20,
  },
  {
    id: "4",
    name: "Beads of Africa",
    image: "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?w=400&h=400&fit=crop",
    location: "Kisumu, Kenya",
    specialty: ["Recycled Materials", "Bone Beads", "Stone Beads"],
    rating: 4.6,
    reviewCount: 45,
    description: "Eco-friendly bead supplier focusing on recycled and sustainable materials from across Africa.",
    verified: false,
    yearsInBusiness: 8,
  },
  {
    id: "5",
    name: "Nakuru Craft Supplies",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=400&fit=crop",
    location: "Nakuru, Kenya",
    specialty: ["Beading Wire", "Tools", "Packaging"],
    rating: 4.5,
    reviewCount: 34,
    description: "Complete beading supplies including tools, wire, threads, and professional packaging materials.",
    verified: true,
    yearsInBusiness: 12,
  },
];

const categories = [
  "All Categories",
  "Glass Beads",
  "Seed Beads",
  "Trade Beads",
  "Recycled Materials",
  "Metal Findings",
  "Tools & Supplies",
  "Leather & Natural",
];

export default function BeadMarket() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Categories");

  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "All Categories" ||
      supplier.specialty.some((s) => s.toLowerCase().includes(category.toLowerCase()));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-forest/10 to-background py-12 lg:py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Bead & Materials Market
              </h1>
              <p className="mt-4 text-muted-foreground">
                Connect directly with verified suppliers of beads, materials, and tools. 
                Browse our directory and send inquiries to start your conversation.
              </p>
            </div>

            {/* Search and filters */}
            <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search suppliers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Supplier directory */}
        <section className="py-12 lg:py-16">
          <div className="container">
            <p className="mb-8 text-sm text-muted-foreground">
              Showing {filteredSuppliers.length} suppliers
            </p>

            <div className="space-y-6">
              {filteredSuppliers.map((supplier) => (
                <div
                  key={supplier.id}
                  className="overflow-hidden rounded-xl bg-card shadow-soft transition-shadow hover:shadow-medium"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative h-48 w-full md:h-auto md:w-64 shrink-0">
                      <img
                        src={supplier.image}
                        alt={supplier.name}
                        className="h-full w-full object-cover"
                      />
                      {supplier.verified && (
                        <Badge className="absolute left-3 top-3 bg-gold text-earth">
                          Verified
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground">
                            {supplier.name}
                          </h3>
                          <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {supplier.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Package className="h-4 w-4" />
                              {supplier.yearsInBusiness} years
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-gold text-gold" />
                          <span className="font-medium">{supplier.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({supplier.reviewCount} reviews)
                          </span>
                        </div>
                      </div>

                      <p className="mt-4 text-muted-foreground">
                        {supplier.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {supplier.specialty.map((spec) => (
                          <Badge key={spec} variant="secondary">
                            {spec}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button>
                          <MessageCircle className="h-4 w-4" />
                          Send Inquiry
                        </Button>
                        <Button variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA for suppliers */}
        <section className="bg-muted py-12 lg:py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                Are You a Bead or Materials Supplier?
              </h2>
              <p className="mt-4 text-muted-foreground">
                List your business in our directory and connect with hundreds of 
                artisans looking for quality materials.
              </p>
              <Button size="lg" className="mt-6">
                List Your Business
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
