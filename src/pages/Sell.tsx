import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  DollarSign,
  Users,
  Globe,
  Camera,
  FileText,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: DollarSign,
    title: "Fair Compensation",
    description: "Keep 85% of every sale. We handle marketing, payments, and customer service.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access customers in 50+ countries who appreciate authentic African crafts.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a network of 500+ artisans. Share knowledge, get featured, grow together.",
  },
  {
    icon: Star,
    title: "Quality Verification",
    description: "Get verified status that builds trust with buyers and increases sales.",
  },
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Fill out the application form with your details and sample work.",
  },
  {
    number: "02",
    title: "Review",
    description: "Our team reviews your application and verifies authenticity (2-3 days).",
  },
  {
    number: "03",
    title: "Onboard",
    description: "Complete your profile, add products, and set up payments.",
  },
  {
    number: "04",
    title: "Sell",
    description: "Start selling! We handle shipping, payments, and customer service.",
  },
];

const sellerTypes = [
  "Artisan - I create beadwork and crafts",
  "Bead & Materials Seller - I supply materials to artisans",
  "Cooperative - We represent multiple artisans",
  "Other",
];

export default function Sell() {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-earth py-20 lg:py-28">
          <div className="absolute inset-0 pattern-overlay opacity-10" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-2 text-sm font-medium text-gold">
                <Sparkles className="h-4 w-4" />
                Join 500+ Artisans
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold text-primary-foreground lg:text-5xl">
                Share Your Craft with the World
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Join URITHI and connect with customers across 50+ countries who 
                value authentic African beadwork. We handle the business, you 
                focus on your art.
              </p>
              <div className="mt-8">
                <Button variant="gold" size="xl" asChild>
                  <a href="#apply">
                    Start Your Application
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Why Sell on URITHI?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We're more than a marketplace — we're your partner in success.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl bg-card p-6 shadow-soft transition-shadow hover:shadow-medium"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Getting started is easy. Here's what to expect.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">
                      {step.number}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="py-16 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                  Apply to Sell on URITHI
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form below and our team will review your application 
                  within 2-3 business days.
                </p>
              </div>

              <form className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+254 700 000 000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g., Narok, Kenya" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sellerType">I am a...</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your seller type" />
                    </SelectTrigger>
                    <SelectContent>
                      {sellerTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Your Specialty</Label>
                  <Input
                    id="specialty"
                    placeholder="e.g., Maasai beadwork, Kikuyu crafts"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                      <SelectItem value="generational">
                        Multi-generational tradition
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="story">Tell Us Your Story</Label>
                  <Textarea
                    id="story"
                    placeholder="Share your journey as an artisan, your inspiration, and what makes your work unique..."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Sample Work (Optional)</Label>
                  <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50 p-8 transition-colors hover:bg-muted">
                    <div className="text-center">
                      <Camera className="mx-auto h-10 w-10 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Drag and drop images or{" "}
                        <span className="text-primary">browse</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Upload up to 5 photos of your work
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 rounded border-border"
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to URITHI's{" "}
                    <a href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/seller-guidelines" className="text-primary hover:underline">
                      Seller Guidelines
                    </a>
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Bead sellers section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-secondary-foreground lg:text-4xl">
                Are You a Bead & Materials Seller?
              </h2>
              <p className="mt-4 text-secondary-foreground/80">
                Connect with artisans who need quality materials. Our Bead Market 
                is an inquiry-based directory where artisans can discover and 
                contact suppliers directly.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="lg">
                  List Your Materials
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
