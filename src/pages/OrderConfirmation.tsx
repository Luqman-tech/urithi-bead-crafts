import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import {
  Check,
  Package,
  Truck,
  MapPin,
  Loader2,
  ArrowRight,
} from "lucide-react";

interface OrderDetails {
  id: string;
  order_number: string;
  total_amount: number;
  payment_method: string;
  created_at: string;
  order_items: Array<{
    id: string;
    product_name: string;
    product_image: string | null;
    quantity: number;
    total_price: number;
  }>;
  delivery_addresses: Array<{
    full_name: string;
    city: string;
    country: string;
    physical_address: string;
  }>;
}

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;

      try {
        const { data, error } = await supabase
          .from("orders")
          .select(`
            *,
            order_items (*),
            delivery_addresses (*)
          `)
          .eq("id", orderId)
          .single();

        if (error) throw error;
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-16 text-center">
          <h1 className="font-display text-2xl font-bold">Order not found</h1>
          <Link to="/marketplace">
            <Button className="mt-6">Continue Shopping</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const address = order.delivery_addresses?.[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-12">
        <div className="container max-w-2xl">
          {/* Success Header */}
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Thank You for Your Order!
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Your order has been confirmed and is being processed
            </p>
          </div>

          {/* Order Details Card */}
          <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="font-mono text-lg font-bold">{order.order_number}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-medium">
                  {new Date(order.created_at).toLocaleDateString("en-KE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="mt-6">
              <h3 className="font-medium text-foreground">Items Ordered</h3>
              <div className="mt-4 space-y-3">
                {order.order_items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.product_image || "/placeholder.svg"}
                      alt={item.product_name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.product_name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-medium">
                      KES {Number(item.total_price).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 border-t border-border pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Paid</span>
                <span>KES {Number(order.total_amount).toLocaleString()}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground capitalize">
                Paid via {order.payment_method}
              </p>
            </div>

            {/* Delivery Info */}
            {address && (
              <div className="mt-6 rounded-lg bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="h-4 w-4" />
                  Delivery Address
                </div>
                <p className="mt-2 text-muted-foreground">
                  {address.full_name}<br />
                  {address.physical_address}<br />
                  {address.city}, {address.country}
                </p>
              </div>
            )}

            {/* Estimated Delivery */}
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <Truck className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-foreground">Estimated Delivery</p>
                <p className="text-sm text-muted-foreground">3-7 business days</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/orders">
              <Button size="lg">
                <Package className="mr-2 h-5 w-5" />
                Track Your Order
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="outline" size="lg">
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Help Text */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@urithi.co.ke" className="text-primary hover:underline">
              support@urithi.co.ke
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
