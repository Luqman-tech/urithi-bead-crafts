import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  type: "pop-up" | "workshop" | "exhibition" | "festival";
  isVirtual?: boolean;
  isFeatured?: boolean;
}

interface EventCardProps {
  event: Event;
  variant?: "default" | "featured";
}

const eventTypeColors = {
  "pop-up": "bg-primary text-primary-foreground",
  workshop: "bg-forest text-secondary-foreground",
  exhibition: "bg-gold text-earth",
  festival: "bg-secondary text-secondary-foreground",
};

export function EventCard({ event, variant = "default" }: EventCardProps) {
  if (variant === "featured") {
    return (
      <Link
        to={`/event/${event.id}`}
        className="group relative block overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/50 to-transparent" />
        </div>

        <div className="relative flex min-h-[400px] flex-col justify-end p-6 lg:p-8">
          <Badge className={eventTypeColors[event.type]}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
          
          <h3 className="mt-4 font-display text-2xl font-bold text-primary-foreground lg:text-3xl">
            {event.title}
          </h3>
          
          <p className="mt-2 max-w-lg text-primary-foreground/80 line-clamp-2">
            {event.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {event.location}
            </span>
          </div>

          <Button variant="gold" size="lg" className="mt-6 w-fit">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/event/${event.id}`}
      className="group block overflow-hidden rounded-xl bg-card shadow-soft transition-all duration-300 hover:shadow-medium"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge className={eventTypeColors[event.type]}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
        </div>
        {event.isVirtual && (
          <Badge variant="secondary" className="absolute right-3 top-3">
            Virtual
          </Badge>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2">
          {event.title}
        </h3>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {event.location}
          </div>
        </div>
      </div>
    </Link>
  );
}
