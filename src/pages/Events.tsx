import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventCard, Event } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Globe } from "lucide-react";

const events: Event[] = [
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
  {
    id: "3",
    title: "East African Crafts Exhibition",
    description: "A curated exhibition showcasing the finest beadwork from across East Africa, featuring over 200 pieces.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    date: "February 1-28, 2025",
    time: "10:00 AM - 7:00 PM",
    location: "Kenya National Theatre",
    type: "exhibition",
  },
  {
    id: "4",
    title: "URITHI at Africa Fashion Week",
    description: "Join us at Africa Fashion Week where our artisans showcase beadwork on the runway.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    date: "March 10-12, 2025",
    time: "All Day Event",
    location: "Kenyatta International Convention Centre",
    type: "festival",
    isFeatured: true,
  },
  {
    id: "5",
    title: "Coastal Beadwork Workshop",
    description: "Discover the unique beading traditions of Kenya's coast with artisan Fatuma Ali.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
    date: "January 25, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Mombasa Cultural Centre",
    type: "workshop",
  },
  {
    id: "6",
    title: "URITHI Pop-Up - Westgate Edition",
    description: "Shop authentic African crafts at our weekend pop-up at Westgate Shopping Mall.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    date: "February 8-9, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Westgate Shopping Mall, Nairobi",
    type: "pop-up",
  },
];

const internationalEvents: Event[] = [
  {
    id: "7",
    title: "URITHI at Paris Design Week",
    description: "African beadwork meets Parisian elegance. Join us for an exclusive showcase in the heart of Paris.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    date: "April 15-20, 2025",
    time: "10:00 AM - 7:00 PM",
    location: "Paris, France",
    type: "exhibition",
    isFeatured: true,
  },
  {
    id: "8",
    title: "African Crafts Fair - London",
    description: "Celebrating African heritage at one of London's premier cultural events.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    date: "May 5-7, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "London, UK",
    type: "festival",
  },
  {
    id: "9",
    title: "Virtual Global Beadwork Summit",
    description: "Connect with bead artists worldwide in this virtual summit featuring workshops and panels.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    date: "June 20, 2025",
    time: "2:00 PM EAT",
    location: "Online",
    type: "workshop",
    isVirtual: true,
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-gold/5 to-background py-12 lg:py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Events & Pop-Up Markets
              </h1>
              <p className="mt-4 text-muted-foreground">
                Experience URITHI in person. From local pop-up markets to international 
                exhibitions, join our community of artisans and craft enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured event */}
        {events.filter((e) => e.isFeatured)[0] && (
          <section className="py-8 lg:py-12">
            <div className="container">
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                Featured Event
              </h2>
              <EventCard
                event={events.filter((e) => e.isFeatured)[0]}
                variant="featured"
              />
            </div>
          </section>
        )}

        {/* Event tabs */}
        <section className="py-8 lg:py-12">
          <div className="container">
            <Tabs defaultValue="local" className="w-full">
              <TabsList className="mb-8 grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="local" className="gap-2">
                  <MapPin className="h-4 w-4" />
                  Local Events
                </TabsTrigger>
                <TabsTrigger value="international" className="gap-2">
                  <Globe className="h-4 w-4" />
                  International
                </TabsTrigger>
              </TabsList>

              <TabsContent value="local">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="international">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {internationalEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Host an event CTA */}
        <section className="bg-muted py-12 lg:py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <Calendar className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground lg:text-3xl">
                Want to Host a URITHI Event?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Partner with us to bring authentic African crafts to your venue. 
                We provide artisans, products, and marketing support.
              </p>
              <Button size="lg" className="mt-6">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
