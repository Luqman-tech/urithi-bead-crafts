import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Smartphone, CreditCard, Globe, Lock, ChevronLeft, Truck, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const orderItems = [
  {
    id: "1",
    name: "Maasai Wedding Necklace",
    price: 12500,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=150&h=150&fit=crop",
  },
  {
    id: "2",
    name: "Traditional Kikuyu Beaded Bracelet Set",
    price: 3500,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=150&h=150&fit=crop",
  },
];

const counties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Nyeri", "Machakos", "Other"
];

export default function Checkout() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 10000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order placed successfully!",
        description: "You'll receive a confirmation shortly.",
      });
      navigate("/orders");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-8 lg:py-12">
        <div className="container">
          <Link
            to="/cart"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Cart
          </Link>

          <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
            Checkout
          </h1>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Checkout form */}
              <div className="space-y-8 lg:col-span-2">
                {/* Contact & Shipping */}
                <section className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Shipping Information
                  </h2>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required placeholder="Doe" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required placeholder="+254 7XX XXX XXX" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required placeholder="123 Main Street" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City/Town</Label>
                      <Input id="city" required placeholder="Nairobi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="county">County</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select county" />
                        </SelectTrigger>
                        <SelectContent>
                          {counties.map((county) => (
                            <SelectItem key={county} value={county.toLowerCase()}>
                              {county}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" placeholder="00100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="kenya">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kenya">Kenya</SelectItem>
                          <SelectItem value="uganda">Uganda</SelectItem>
                          <SelectItem value="tanzania">Tanzania</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </section>

                {/* Payment */}
                <section className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Payment Method
                  </h2>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="mt-6 space-y-4"
                  >
                    {/* M-Pesa */}
                    <label
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-all ${
                        paymentMethod === "mpesa"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="mpesa" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <Smartphone className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground">M-Pesa</span>
                              <Badge className="bg-green-500/20 text-green-700">Popular</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Pay instantly via M-Pesa STK Push
                            </p>
                          </div>
                        </div>
                        {paymentMethod === "mpesa" && (
                          <div className="mt-4 space-y-2">
                            <Label htmlFor="mpesaPhone">M-Pesa Phone Number</Label>
                            <Input
                              id="mpesaPhone"
                              type="tel"
                              placeholder="07XX XXX XXX"
                              className="max-w-xs"
                            />
                            <p className="text-xs text-muted-foreground">
                              You'll receive an STK push to complete payment
                            </p>
                          </div>
                        )}
                      </div>
                    </label>

                    {/* Card */}
                    <label
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-all ${
                        paymentMethod === "card"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="card" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium text-foreground">Credit/Debit Card</span>
                            <p className="text-sm text-muted-foreground">
                              Visa, Mastercard, Amex
                            </p>
                          </div>
                        </div>
                        {paymentMethod === "card" && (
                          <div className="mt-4 grid gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input
                                id="cardNumber"
                                placeholder="1234 5678 9012 3456"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">Expiry</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </label>

                    {/* International */}
                    <label
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-all ${
                        paymentMethod === "international"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="international" className="mt-1" />
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                          <Globe className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <span className="font-medium text-foreground">International Payment</span>
                          <p className="text-sm text-muted-foreground">
                            PayPal, Stripe (coming soon)
                          </p>
                        </div>
                      </div>
                    </label>
                  </RadioGroup>
                </section>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" required />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Order Summary
                  </h2>

                  {/* Items */}
                  <div className="mt-6 space-y-4">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground line-clamp-2">
                            {item.name}
                          </p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          KES {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3 border-t border-border pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">
                        KES {subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-foreground">
                        {shipping === 0 ? (
                          <Badge className="bg-forest text-secondary-foreground">Free</Badge>
                        ) : (
                          `KES ${shipping.toLocaleString()}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-3">
                      <span className="font-display font-semibold text-foreground">Total</span>
                      <span className="font-display text-xl font-bold text-foreground">
                        KES {total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-6 w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      "Processing..."
                    ) : (
                      <>
                        <Lock className="h-4 w-4" />
                        Place Order
                      </>
                    )}
                  </Button>

                  {/* Trust badges */}
                  <div className="mt-6 space-y-2 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure encrypted payment</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Truck className="h-4 w-4" />
                      <span>Delivery within 3-7 business days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
