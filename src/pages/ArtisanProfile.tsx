import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, Product } from "@/components/products/ProductCard";
import {
  Star,
  MapPin,
  MessageCircle,
  Check,
  Shield,
  Users,
  Calendar,
  Heart,
} from "lucide-react";

const artisan = {
  id: "1",
  name: "Mama Naserian",
  avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
  coverImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&h=400&fit=crop",
  location: "Narok, Kenya",
  specialty: "Maasai Beadwork",
  rating: 4.9,
  reviewCount: 234,
  productCount: 45,
  verified: true,
  memberSince: "2022",
  bio: `I am Mama Naserian, a third-generation Maasai beadwork artisan from Narok, Kenya. My grandmother taught me the sacred art of beading when I was just seven years old, and I have dedicated my life to preserving and sharing this beautiful tradition.

Every piece I create tells a story of our culture, our ceremonies, and our connection to the land. The vibrant reds symbolize the blood of the cow, a sacred animal to our people. The intricate patterns passed down through generations carry meaning that words cannot express.

When you purchase one of my creations, you're not just buying jewelry – you're becoming part of our story and helping to preserve Maasai heritage for future generations.`,
  certifications: ["Fair Trade Certified", "URITHI Verified", "Handmade Certified"],
  stats: {
    totalSales: 1250,
    repeatCustomers: 340,
    responseTime: "< 2 hours",
  },
};

const products: Product[] = [
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
    id: "10",
    name: "Maasai Collar Necklace - Modern",
    price: 8500,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    artisan: { name: "Mama Naserian", verified: true },
    category: "Necklaces",
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "11",
    name: "Beaded Earrings - Traditional",
    price: 2500,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    artisan: { name: "Mama Naserian", verified: true },
    category: "Earrings",
    rating: 4.7,
    reviewCount: 34,
  },
];

const reviews = [
  {
    id: "1",
    author: "Sarah M.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    date: "January 10, 2025",
    content: "Mama Naserian's craftsmanship is absolutely incredible. The necklace I received exceeded all expectations. You can feel the love and tradition in every bead.",
    product: "Maasai Wedding Necklace",
    verified: true,
  },
  {
    id: "2",
    author: "James K.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    date: "December 28, 2024",
    content: "Amazing quality and fast shipping. Communication was excellent throughout the process. Will definitely order again!",
    product: "Maasai Beaded Sandals",
    verified: true,
  },
];

export default function ArtisanProfile() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Cover & Profile */}
        <div className="relative">
          <div className="h-48 w-full overflow-hidden lg:h-64">
            <img
              src={artisan.coverImage}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          <div className="container">
            <div className="relative -mt-16 flex flex-col items-start gap-6 lg:-mt-20 lg:flex-row lg:items-end">
              <div className="relative">
                <img
                  src={artisan.avatar}
                  alt={artisan.name}
                  className="h-32 w-32 rounded-2xl border-4 border-background object-cover shadow-lg lg:h-40 lg:w-40"
                />
                {artisan.verified && (
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-md">
                    <Check className="h-5 w-5" />
                  </div>
                )}
              </div>

              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                    {artisan.name}
                  </h1>
                  {artisan.verified && (
                    <Badge variant="outline" className="gap-1 border-gold text-gold">
                      <Check className="h-3 w-3" /> Verified Artisan
                    </Badge>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {artisan.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    {artisan.rating} ({artisan.reviewCount} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since {artisan.memberSince}
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium text-primary">{artisan.specialty}</p>
              </div>

              <div className="flex gap-3 pb-4">
                <Button>
                  <MessageCircle className="h-4 w-4" />
                  Message
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4" />
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="border-y border-border bg-muted/30 py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">
                  {artisan.productCount}
                </p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">
                  {artisan.stats.totalSales.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Sales</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">
                  {artisan.stats.repeatCustomers}
                </p>
                <p className="text-sm text-muted-foreground">Repeat Customers</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">
                  {artisan.stats.responseTime}
                </p>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 lg:py-12">
          <div className="container">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="products">Products ({products.length})</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({artisan.reviewCount})</TabsTrigger>
              </TabsList>

              <TabsContent value="products">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      About {artisan.name}
                    </h3>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                      {artisan.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-xl bg-muted/50 p-6">
                      <h4 className="font-display font-semibold text-foreground">
                        Certifications
                      </h4>
                      <div className="mt-4 space-y-2">
                        {artisan.certifications.map((cert) => (
                          <div key={cert} className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-forest" />
                            <span className="text-sm text-foreground">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl bg-muted/50 p-6">
                      <h4 className="font-display font-semibold text-foreground">
                        Quick Facts
                      </h4>
                      <dl className="mt-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Specialty</dt>
                          <dd className="font-medium text-foreground">{artisan.specialty}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Location</dt>
                          <dd className="font-medium text-foreground">{artisan.location}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Member Since</dt>
                          <dd className="font-medium text-foreground">{artisan.memberSince}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Response Time</dt>
                          <dd className="font-medium text-foreground">{artisan.stats.responseTime}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="rounded-xl border border-border bg-card p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{review.author}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">Verified</Badge>
                            )}
                          </div>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-gold text-gold"
                                      : "fill-muted text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Purchased: {review.product}
                          </p>
                          <p className="mt-3 text-foreground">{review.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
