
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, getCartTotal, checkout } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  // If user is not authenticated, redirect to sign in
  if (!isAuthenticated) {
    useEffect(() => {
      toast.error("Please sign in to access your cart");
      navigate("/signin");
    }, [navigate]);
    return null;
  }
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    setTimeout(() => {
      checkout();
      setIsCheckingOut(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Items ({items.length})</CardTitle>
                  <CardDescription>
                    Review your items before checkout
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.product.id} className="flex flex-col sm:flex-row gap-4 pb-4">
                        <div className="w-full sm:w-24 h-24 overflow-hidden rounded">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">{item.product.category}</p>
                          <div className="flex justify-between mt-2">
                            <span className="font-medium">
                            ₹{item.product.price.toFixed(2)}
                            </span>
                            <span>
                              Qty: {item.quantity}
                            </span>
                          </div>
                        </div>
                        <div>
                          <Button 
                            variant="destructive" 
                            onClick={() => removeFromCart(item.product.id)}
                            className="mt-2 sm:mt-0"
                          >
                            Remove
                          </Button>
                        </div>
                        <Separator className="sm:hidden mt-2" />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>₹5.00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{(getCartTotal() + 5).toFixed(2)}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-pharmacy-primary hover:bg-pharmacy-dark mt-4" 
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? "Processing..." : "Buy Now"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button 
              onClick={() => navigate("/products")}
              className="bg-pharmacy-primary hover:bg-pharmacy-dark"
            >
              Browse Products
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

import { useEffect } from "react";

export default Cart;
