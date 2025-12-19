import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard, Product } from "@/components/products/ProductCard";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal, X } from "lucide-react";

const categories = [
  "All Categories",
  "Necklaces",
  "Bracelets",
  "Earrings",
  "Headwear",
  "Anklets",
  "Home Decor",
  "Bags & Accessories",
];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under KES 2,000", min: 0, max: 2000 },
  { label: "KES 2,000 - 5,000", min: 2000, max: 5000 },
  { label: "KES 5,000 - 15,000", min: 5000, max: 15000 },
  { label: "Over KES 15,000", min: 15000, max: Infinity },
];

const tribes = ["All Tribes", "Maasai", "Kikuyu", "Samburu", "Turkana", "Luo", "Coastal"];

// Sample products data
const allProducts: Product[] = [
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
  {
    id: "5",
    name: "Turkana Beaded Collar Necklace",
    price: 8500,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    artisan: { name: "Akiru Designs", verified: true },
    category: "Necklaces",
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "6",
    name: "Maasai Beaded Sandals - Women",
    price: 4500,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=600&fit=crop",
    artisan: { name: "Mama Naserian", verified: true },
    category: "Bags & Accessories",
    rating: 4.6,
    reviewCount: 43,
  },
  {
    id: "7",
    name: "Traditional Beaded Wall Hanging",
    price: 15000,
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&h=600&fit=crop",
    artisan: { name: "Kenya Artistry", verified: true },
    category: "Home Decor",
    rating: 4.9,
    reviewCount: 28,
    isFeatured: true,
  },
  {
    id: "8",
    name: "Luo Inspired Beaded Anklet Set",
    price: 1800,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
    artisan: { name: "Lake Crafts", verified: false },
    category: "Anklets",
    rating: 4.5,
    reviewCount: 34,
    isNew: true,
  },
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    const matchesVerified = !verifiedOnly || product.artisan.verified;
    return matchesSearch && matchesCategory && matchesVerified;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 lg:py-16">
          <div className="container">
            <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
              Marketplace
            </h1>
            <p className="mt-2 text-muted-foreground">
              Discover authentic African beadwork and cultural crafts from verified artisans
            </p>

            {/* Search and filters bar */}
            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Active filters */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {selectedCategory !== "All Categories" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory("All Categories")}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {verifiedOnly && (
                <Badge variant="secondary" className="gap-1">
                  Verified Only
                  <button onClick={() => setVerifiedOnly(false)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-8 lg:py-12">
          <div className="container">
            <div className="flex gap-8">
              {/* Sidebar filters (desktop) */}
              <aside className="hidden w-64 shrink-0 lg:block">
                <div className="sticky top-24 space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Categories</h3>
                    <div className="mt-4 space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price range */}
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Price Range</h3>
                    <div className="mt-4 space-y-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Cultural origin */}
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Cultural Origin</h3>
                    <div className="mt-4 space-y-2">
                      {tribes.map((tribe) => (
                        <button
                          key={tribe}
                          className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {tribe}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Verified filter */}
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="verified"
                      checked={verifiedOnly}
                      onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
                    />
                    <label
                      htmlFor="verified"
                      className="text-sm text-foreground cursor-pointer"
                    >
                      Verified Artisans Only
                    </label>
                  </div>
                </div>
              </aside>

              {/* Products */}
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredProducts.length} products
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl bg-muted/50 text-center">
                    <p className="text-lg font-medium text-foreground">No products found</p>
                    <p className="mt-1 text-muted-foreground">
                      Try adjusting your search or filters
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All Categories");
                        setVerifiedOnly(false);
                      }}
                    >
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
