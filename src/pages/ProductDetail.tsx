import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, Product } from "@/components/products/ProductCard";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Check,
  MapPin,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample product data
const sampleProduct = {
  id: "1",
  name: "Maasai Wedding Necklace - Ceremonial Collection",
  price: 12500,
  originalPrice: 15000,
  images: [
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&h=800&fit=crop",
  ],
  artisan: {
    id: "1",
    name: "Mama Naserian",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    verified: true,
    location: "Narok, Kenya",
    rating: 4.9,
    reviewCount: 234,
  },
  category: "Necklaces",
  rating: 4.9,
  reviewCount: 127,
  description: `This stunning Maasai wedding necklace is a masterpiece of traditional beadwork, handcrafted by Mama Naserian using techniques passed down through three generations.

Each bead is carefully selected and arranged in the traditional color patterns that tell the story of Maasai culture and heritage. The vibrant reds symbolize bravery, while the intricate white beadwork represents peace and purity.

Perfect for special occasions, cultural events, or as a statement piece that celebrates African heritage.`,
  details: [
    { label: "Material", value: "Glass beads, leather" },
    { label: "Length", value: "18 inches (adjustable)" },
    { label: "Weight", value: "120 grams" },
    { label: "Origin", value: "Narok, Kenya" },
    { label: "Care", value: "Store in dry place, avoid water" },
  ],
  stockType: "in_stock",
  stockQuantity: 5,
  processingTime: "3-5 business days",
  certifications: ["Fair Trade", "Handmade Certified"],
  isNew: true,
};

const relatedProducts: Product[] = [
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
  },
];

const reviews = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    date: "January 10, 2025",
    content: "Absolutely stunning piece! The craftsmanship is incredible and you can tell it was made with love. Arrived well-packaged and even faster than expected.",
    verified: true,
  },
  {
    id: "2",
    author: "James K.",
    rating: 5,
    date: "December 28, 2024",
    content: "Bought this as a gift for my mother and she was thrilled. The colors are vibrant and the quality is exceptional.",
    verified: true,
  },
  {
    id: "3",
    author: "Emma W.",
    rating: 4,
    date: "December 15, 2024",
    content: "Beautiful necklace, exactly as pictured. The only reason for 4 stars is shipping took a bit longer than expected, but worth the wait!",
    verified: true,
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = sampleProduct;
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} saved to your wishlist`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-8">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/marketplace" className="hover:text-foreground">Marketplace</Link>
            <span>/</span>
            <Link to={`/marketplace?category=${product.category}`} className="hover:text-foreground">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-forest text-secondary-foreground">New</Badge>
                  )}
                  {discount > 0 && (
                    <Badge className="bg-primary text-primary-foreground">-{discount}%</Badge>
                  )}
                </div>

                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 backdrop-blur-sm hover:bg-background"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 backdrop-blur-sm hover:bg-background"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-muted-foreground/30"
                    }`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="space-y-6">
              {/* Artisan */}
              <Link
                to={`/artisan/${product.artisan.id}`}
                className="inline-flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3 transition-colors hover:bg-muted"
              >
                <img
                  src={product.artisan.avatar}
                  alt={product.artisan.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{product.artisan.name}</span>
                    {product.artisan.verified && (
                      <Badge variant="outline" className="gap-1 border-gold text-gold">
                        <Check className="h-3 w-3" /> Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {product.artisan.location}
                  </div>
                </div>
              </Link>

              {/* Title */}
              <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(product.rating)
                          ? "fill-gold text-gold"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-foreground">
                  KES {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    KES {product.originalPrice.toLocaleString()}
                  </span>
                )}
                {discount > 0 && (
                  <Badge className="bg-primary text-primary-foreground">
                    Save {discount}%
                  </Badge>
                )}
              </div>

              {/* Certifications */}
              {product.certifications.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="gap-1 border-forest text-forest">
                      <Shield className="h-3 w-3" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Stock status */}
              <div className="flex items-center gap-2 text-sm">
                {product.stockType === "in_stock" && product.stockQuantity > 0 ? (
                  <>
                    <span className="flex h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-foreground">
                      In stock ({product.stockQuantity} available)
                    </span>
                  </>
                ) : product.stockType === "made_to_order" ? (
                  <>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Made to order • {product.processingTime}
                    </span>
                  </>
                ) : (
                  <span className="text-destructive">Out of stock</span>
                )}
              </div>

              {/* Quantity & Add to cart */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center rounded-lg border border-border">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground"
                  >
                    −
                  </button>
                  <span className="min-w-[3rem] text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground"
                  >
                    +
                  </button>
                </div>

                <Button onClick={handleAddToCart} size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>

                <Button variant="outline" size="lg" onClick={handleAddToWishlist}>
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Shipping info */}
              <div className="space-y-3 rounded-xl bg-muted/50 p-4">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Free shipping on orders over KES 10,000</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Authenticity guaranteed • 30-day returns</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <Link to={`/artisan/${product.artisan.id}`} className="text-primary hover:underline">
                    Message the artisan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs: Description, Details, Reviews */}
          <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b border-border bg-transparent">
                <TabsTrigger value="description" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Reviews ({product.reviewCount})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="prose prose-gray max-w-none">
                  {product.description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <dl className="grid gap-4 sm:grid-cols-2">
                  {product.details.map((detail) => (
                    <div key={detail.label} className="flex gap-4">
                      <dt className="w-32 shrink-0 text-muted-foreground">{detail.label}</dt>
                      <dd className="font-medium text-foreground">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{review.author}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">Verified purchase</Badge>
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
                        </div>
                      </div>
                      <p className="mt-3 text-muted-foreground">{review.content}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related products */}
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground">You May Also Like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
