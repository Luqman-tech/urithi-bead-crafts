import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  artisan: string;
  variant?: string;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    productId: "1",
    name: "Maasai Wedding Necklace - Ceremonial Collection",
    price: 12500,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=300&fit=crop",
    quantity: 1,
    artisan: "Mama Naserian",
  },
  {
    id: "2",
    productId: "2",
    name: "Traditional Kikuyu Beaded Bracelet Set",
    price: 3500,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=300&h=300&fit=crop",
    quantity: 2,
    artisan: "Wanjiku Crafts",
  },
];

export default function Cart() {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 10000 ? 0 : 500;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };

  const applyPromoCode = () => {
    toast({
      title: "Promo code applied",
      description: "Your discount has been applied to the order",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-16">
          <div className="container">
            <div className="mx-auto max-w-lg text-center">
              <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
              <h1 className="mt-6 font-display text-2xl font-bold text-foreground">
                Your cart is empty
              </h1>
              <p className="mt-2 text-muted-foreground">
                Discover beautiful handcrafted pieces from our artisans
              </p>
              <Link to="/marketplace">
                <Button size="lg" className="mt-6">
                  Continue Shopping
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-8 lg:py-12">
        <div className="container">
          <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
            Shopping Cart ({cartItems.length} items)
          </h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <Link to={`/product/${item.productId}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 rounded-lg object-cover"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <Link
                            to={`/product/${item.productId}`}
                            className="font-medium text-foreground hover:text-primary"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 text-sm text-muted-foreground">
                            by {item.artisan}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center rounded-lg border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-2 text-muted-foreground hover:text-foreground"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-[2rem] text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-2 text-muted-foreground hover:text-foreground"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <span className="font-display text-lg font-semibold text-foreground">
                          KES {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue shopping */}
              <div className="mt-6">
                <Link to="/marketplace">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">
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

                  {/* Promo code */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyPromoCode}>
                      Apply
                    </Button>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-display font-semibold text-foreground">Total</span>
                      <span className="font-display text-xl font-bold text-foreground">
                        KES {total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button size="lg" className="mt-6 w-full">
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>

                {/* Trust badges */}
                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping over KES 10,000</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure checkout • 30-day returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
