import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Globe,
  Users,
  Sparkles,
  Shield,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Cultural Preservation",
    description:
      "We believe in preserving and celebrating the rich beadwork traditions that have been passed down through generations of African artisans.",
  },
  {
    icon: Users,
    title: "Artisan Empowerment",
    description:
      "Our artisans receive 85% of every sale, ensuring fair compensation and sustainable livelihoods for their families and communities.",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description:
      "Every artisan is personally vetted and every product is verified for authenticity, quality, and cultural significance.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Impact",
    description:
      "We connect Kenyan artisans with customers worldwide while investing in local communities and skill development.",
  },
];

const stats = [
  { value: "500+", label: "Active Artisans" },
  { value: "50+", label: "Countries Served" },
  { value: "25,000+", label: "Products Sold" },
  { value: "KES 50M+", label: "Paid to Artisans" },
];

const team = [
  {
    name: "Amara Wanjiku",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop",
    bio: "Former fashion executive with a passion for African heritage crafts.",
  },
  {
    name: "James Ochieng",
    role: "Head of Artisan Relations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Works directly with artisan communities across Kenya.",
  },
  {
    name: "Sarah Kimani",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    bio: "Curates collections and maintains quality standards.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
          <div className="absolute inset-0 pattern-overlay opacity-10" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-2 text-sm font-medium text-gold">
                <Sparkles className="h-4 w-4" />
                Our Story
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold text-primary-foreground lg:text-5xl">
                Connecting African Artisans with the World
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                URITHI (meaning "Heritage" in Swahili) was born from a simple belief: 
                that the stunning beadwork created by African artisans deserves a 
                global stage, and that those artisans deserve fair compensation for 
                their extraordinary skill.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-card py-12">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  URITHI exists to preserve and promote African beadwork traditions 
                  while creating sustainable economic opportunities for artisans. 
                  We believe that when you buy a piece of African beadwork, you're 
                  not just buying jewelry — you're investing in a story, a tradition, 
                  and a community.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Founded in Nairobi in 2022, we've grown from a small collective 
                  of 20 artisans to a thriving marketplace serving customers in 
                  over 50 countries. But our commitment remains the same: 
                  authenticity, quality, and fair trade.
                </p>
                <div className="mt-8">
                  <Link to="/marketplace">
                    <Button size="lg">
                      Explore Our Marketplace
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&h=800&fit=crop"
                  alt="African beadwork artisan"
                  className="rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-gold p-6 shadow-medium">
                  <TrendingUp className="h-8 w-8 text-earth" />
                  <p className="mt-2 font-display text-2xl font-bold text-earth">85%</p>
                  <p className="text-sm text-earth/80">Goes to artisans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                These principles guide everything we do at URITHI.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl bg-card p-6 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                The passionate people working to connect artisans with the world.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto h-48 w-48 rounded-full object-cover shadow-medium"
                  />
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="container text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground lg:text-4xl">
              Join the URITHI Community
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Whether you're an artisan looking to share your craft or a customer 
              seeking authentic African beadwork, we'd love to have you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/sell">
                <Button variant="gold" size="xl">
                  Become an Artisan
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="hero-outline" size="xl">
                  Shop Now
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
