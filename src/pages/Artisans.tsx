import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArtisanCard, Artisan } from "@/components/artisans/ArtisanCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const artisans: Artisan[] = [
  {
    id: "1",
    name: "Mama Naserian",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&h=200&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=200&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=200&fit=crop",
    location: "Samburu, Kenya",
    specialty: "Samburu Art",
    rating: 5.0,
    reviewCount: 89,
    productCount: 28,
    verified: true,
    bio: "Samburu warrior turned artisan, creating authentic ceremonial pieces with deep cultural significance.",
  },
  {
    id: "4",
    name: "Akinyi Otieno",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop",
    location: "Kisumu, Kenya",
    specialty: "Luo Designs",
    rating: 4.7,
    reviewCount: 78,
    productCount: 24,
    verified: true,
    bio: "Celebrating Luo cultural heritage through vibrant beadwork inspired by Lake Victoria.",
  },
  {
    id: "5",
    name: "Fatuma Ali",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&h=200&fit=crop",
    location: "Mombasa, Kenya",
    specialty: "Coastal Beadwork",
    rating: 4.8,
    reviewCount: 112,
    productCount: 38,
    verified: true,
    bio: "Swahili coastal traditions meet contemporary jewelry design in my ocean-inspired collections.",
  },
  {
    id: "6",
    name: "Akiru Lopeyok",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    location: "Turkana, Kenya",
    specialty: "Turkana Crafts",
    rating: 4.6,
    reviewCount: 45,
    productCount: 19,
    verified: false,
    bio: "Preserving ancient Turkana beading traditions in the arid beauty of northern Kenya.",
  },
];

const specialties = [
  "All Specialties",
  "Maasai Beadwork",
  "Kikuyu Crafts",
  "Samburu Art",
  "Luo Designs",
  "Coastal Beadwork",
  "Turkana Crafts",
];

const locations = [
  "All Locations",
  "Nairobi",
  "Narok",
  "Nyeri",
  "Samburu",
  "Kisumu",
  "Mombasa",
  "Turkana",
];

export default function Artisans() {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [location, setLocation] = useState("All Locations");

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialty === "All Specialties" || artisan.specialty === specialty;
    const matchesLocation = location === "All Locations" || artisan.location.includes(location);
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/10 to-background py-12 lg:py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Meet Our Artisans
              </h1>
              <p className="mt-4 text-muted-foreground">
                Discover the talented craftspeople behind every piece. Each artisan brings 
                generations of cultural knowledge, exceptional skill, and unique stories.
              </p>
            </div>

            {/* Filters */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search artisans..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Artisans grid */}
        <section className="py-12 lg:py-16">
          <div className="container">
            <p className="mb-8 text-sm text-muted-foreground">
              Showing {filteredArtisans.length} artisans
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArtisans.map((artisan) => (
                <ArtisanCard key={artisan.id} artisan={artisan} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
