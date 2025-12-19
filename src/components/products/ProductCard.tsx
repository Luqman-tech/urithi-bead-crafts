import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  artisan: {
    name: string;
    avatar?: string;
    verified?: boolean;
  };
  category: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card shadow-soft transition-all duration-300 hover:shadow-medium">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-forest text-secondary-foreground">New</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-primary text-primary-foreground">-{discount}%</Badge>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="secondary"
            size="icon"
            className="h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Category tag */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Artisan info */}
        <div className="mb-2 flex items-center gap-2">
          {product.artisan.avatar ? (
            <img
              src={product.artisan.avatar}
              alt={product.artisan.name}
              className="h-5 w-5 rounded-full object-cover"
            />
          ) : (
            <div className="h-5 w-5 rounded-full bg-primary/20" />
          )}
          <span className="text-xs text-muted-foreground">
            by {product.artisan.name}
          </span>
          {product.artisan.verified && (
            <span className="text-xs text-gold">✓</span>
          )}
        </div>

        {/* Product name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-medium text-foreground transition-colors hover:text-primary line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="text-xs font-medium">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold text-foreground">
            KES {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              KES {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
