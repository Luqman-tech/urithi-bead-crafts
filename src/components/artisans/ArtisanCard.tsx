import { Link } from "react-router-dom";
import { MapPin, Star, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Artisan {
  id: string;
  name: string;
  avatar: string;
  coverImage?: string;
  location: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  productCount: number;
  verified: boolean;
  bio?: string;
}

interface ArtisanCardProps {
  artisan: Artisan;
}

export function ArtisanCard({ artisan }: ArtisanCardProps) {
  return (
    <Link
      to={`/artisan/${artisan.id}`}
      className="group block overflow-hidden rounded-xl bg-card shadow-soft transition-all duration-300 hover:shadow-medium"
    >
      {/* Cover image */}
      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/20 to-gold/20">
        {artisan.coverImage && (
          <img
            src={artisan.coverImage}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        
        {/* Avatar */}
        <div className="absolute -bottom-10 left-4">
          <div className="relative">
            <img
              src={artisan.avatar}
              alt={artisan.name}
              className="h-20 w-20 rounded-full border-4 border-card object-cover shadow-medium"
            />
            {artisan.verified && (
              <div className="absolute -right-1 bottom-1 rounded-full bg-gold p-1">
                <BadgeCheck className="h-4 w-4 text-earth" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-12">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {artisan.name}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {artisan.location}
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {artisan.specialty}
          </Badge>
        </div>

        {artisan.bio && (
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
            {artisan.bio}
          </p>
        )}

        {/* Stats */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="text-sm font-medium">{artisan.rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">
              ({artisan.reviewCount})
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            {artisan.productCount} products
          </span>
        </div>
      </div>
    </Link>
  );
}
