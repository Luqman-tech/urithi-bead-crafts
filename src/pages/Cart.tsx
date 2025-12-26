import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";

export default function Cart() {
  const { items, itemCount, subtotal, updateQuantity, removeFromCart } = useCart();
  const shippingThreshold = 10000;
  const shipping = subtotal >= shippingThreshold ? 0 : 500;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-16">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Your cart is empty</h1>
            <p className="mt-2 text-muted-foreground">Discover unique handcrafted items from talented Kenyan artisans</p>
            <Link to="/marketplace"><Button className="mt-6" size="lg">Start Shopping<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">Shopping Cart</h1>
            <p className="mt-1 text-muted-foreground">{itemCount} {itemCount === 1 ? "item" : "items"} in your cart</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Link to={`/product/${item.productId}`} className="shrink-0">
                    <img src={item.image} alt={item.name} className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32" />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.productId}`} className="font-medium text-foreground hover:text-primary">{item.name}</Link>
                      <p className="mt-1 text-sm text-muted-foreground">by {item.artisanName}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center rounded-lg border border-border">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-muted-foreground hover:text-foreground"><Minus className="h-4 w-4" /></button>
                        <span className="min-w-[2.5rem] text-center font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-muted-foreground hover:text-foreground"><Plus className="h-4 w-4" /></button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-display text-lg font-semibold">KES {(item.price * item.quantity).toLocaleString()}</span>
                        <button onClick={() => removeFromCart(item.id)} className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"><Trash2 className="h-5 w-5" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link to="/marketplace"><Button variant="outline"><ArrowRight className="mr-2 h-4 w-4 rotate-180" />Continue Shopping</Button></Link>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-display text-lg font-semibold text-foreground">Order Summary</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span className="font-medium">KES {subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span className="font-medium">{shipping === 0 ? <span className="text-green-600">Free</span> : `KES ${shipping.toLocaleString()}`}</span></div>
                  {shipping > 0 && <p className="text-xs text-muted-foreground">Add KES {(shippingThreshold - subtotal).toLocaleString()} more for free shipping</p>}
                  <div className="border-t border-border pt-4"><div className="flex justify-between"><span className="font-semibold text-foreground">Total</span><span className="font-display text-xl font-bold text-foreground">KES {total.toLocaleString()}</span></div></div>
                </div>
                <Link to="/checkout" className="mt-6 block"><Button className="w-full" size="lg">Proceed to Checkout<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><Truck className="h-4 w-4 text-primary" /><span>Free shipping over KES 10,000</span></div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Shield className="h-4 w-4 text-primary" /><span>Secure checkout</span></div>
                  <div className="flex items-center gap-2 text-muted-foreground"><RotateCcw className="h-4 w-4 text-primary" /><span>30-day returns</span></div>
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