import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  Star,
  MessageCircle,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "pending_payment" | "paid" | "processing" | "shipped" | "delivered" | "reviewed";
  total: number;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    artisan: string;
  }[];
  tracking?: string;
}

const orders: Order[] = [
  {
    id: "1",
    orderNumber: "URITHI-2025-001234",
    date: "January 15, 2025",
    status: "shipped",
    total: 19500,
    items: [
      {
        id: "1",
        name: "Maasai Wedding Necklace - Ceremonial Collection",
        price: 12500,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=150&h=150&fit=crop",
        artisan: "Mama Naserian",
      },
      {
        id: "2",
        name: "Traditional Kikuyu Beaded Bracelet Set",
        price: 3500,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=150&h=150&fit=crop",
        artisan: "Wanjiku Crafts",
      },
    ],
    tracking: "KE1234567890",
  },
  {
    id: "2",
    orderNumber: "URITHI-2025-001189",
    date: "January 10, 2025",
    status: "delivered",
    total: 8500,
    items: [
      {
        id: "3",
        name: "Turkana Beaded Collar Necklace",
        price: 8500,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=150&h=150&fit=crop",
        artisan: "Akiru Designs",
      },
    ],
  },
  {
    id: "3",
    orderNumber: "URITHI-2024-009876",
    date: "December 20, 2024",
    status: "reviewed",
    total: 4500,
    items: [
      {
        id: "4",
        name: "Maasai Beaded Sandals - Women",
        price: 4500,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=150&h=150&fit=crop",
        artisan: "Mama Naserian",
      },
    ],
  },
];

const getStatusInfo = (status: Order["status"]) => {
  switch (status) {
    case "pending_payment":
      return { label: "Pending Payment", color: "bg-amber-500/20 text-amber-700", icon: Clock };
    case "paid":
      return { label: "Paid", color: "bg-blue-500/20 text-blue-700", icon: CheckCircle };
    case "processing":
      return { label: "Processing", color: "bg-primary/20 text-primary", icon: Package };
    case "shipped":
      return { label: "Shipped", color: "bg-purple-500/20 text-purple-700", icon: Truck };
    case "delivered":
      return { label: "Delivered", color: "bg-forest/20 text-forest", icon: CheckCircle };
    case "reviewed":
      return { label: "Completed", color: "bg-forest/20 text-forest", icon: Star };
    default:
      return { label: status, color: "bg-muted text-muted-foreground", icon: Package };
  }
};

export default function Orders() {
  const activeOrders = orders.filter((o) => !["delivered", "reviewed"].includes(o.status));
  const pastOrders = orders.filter((o) => ["delivered", "reviewed"].includes(o.status));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-8 lg:py-12">
        <div className="container">
          <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
            My Orders
          </h1>

          {orders.length === 0 ? (
            <div className="mt-12 flex flex-col items-center justify-center rounded-xl bg-muted/50 py-16 text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
                No orders yet
              </h2>
              <p className="mt-2 text-muted-foreground">
                Start shopping to see your orders here
              </p>
              <Link to="/marketplace">
                <Button className="mt-6">Browse Marketplace</Button>
              </Link>
            </div>
          ) : (
            <Tabs defaultValue="active" className="mt-8">
              <TabsList>
                <TabsTrigger value="active">Active ({activeOrders.length})</TabsTrigger>
                <TabsTrigger value="past">Past Orders ({pastOrders.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-6 space-y-6">
                {activeOrders.length === 0 ? (
                  <div className="rounded-xl bg-muted/50 py-12 text-center">
                    <p className="text-muted-foreground">No active orders</p>
                  </div>
                ) : (
                  activeOrders.map((order) => <OrderCard key={order.id} order={order} />)
                )}
              </TabsContent>

              <TabsContent value="past" className="mt-6 space-y-6">
                {pastOrders.length === 0 ? (
                  <div className="rounded-xl bg-muted/50 py-12 text-center">
                    <p className="text-muted-foreground">No past orders</p>
                  </div>
                ) : (
                  pastOrders.map((order) => <OrderCard key={order.id} order={order} />)
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function OrderCard({ order }: { order: Order }) {
  const statusInfo = getStatusInfo(order.status);
  const StatusIcon = statusInfo.icon;

  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Order</p>
            <p className="font-medium text-foreground">{order.orderNumber}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Placed on</p>
            <p className="font-medium text-foreground">{order.date}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="font-medium text-foreground">KES {order.total.toLocaleString()}</p>
          </div>
        </div>
        <Badge className={statusInfo.color}>
          <StatusIcon className="mr-1 h-3 w-3" />
          {statusInfo.label}
        </Badge>
      </div>

      {/* Items */}
      <div className="divide-y divide-border">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-lg object-cover"
              />
            </Link>
            <div className="flex-1">
              <Link
                to={`/product/${item.id}`}
                className="font-medium text-foreground hover:text-primary"
              >
                {item.name}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">by {item.artisan}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Qty: {item.quantity} × KES {item.price.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {order.status === "delivered" && (
                <Button variant="outline" size="sm">
                  <Star className="h-4 w-4" />
                  Leave Review
                </Button>
              )}
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4" />
                Contact Artisan
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {order.status === "shipped" && order.tracking && (
        <div className="border-t border-border bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Tracking Number</p>
                <p className="text-sm text-muted-foreground">{order.tracking}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Track Order
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
