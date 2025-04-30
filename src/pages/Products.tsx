
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { toast } from "@/components/ui/sonner";

const Products = () => {
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))];
  
  // Filter products based on search term and category
  useEffect(() => {
    let filtered = products;
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (category !== "all") {
      filtered = filtered.filter(product => product.category === category);
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, category]);
  
  const handleAddToCart = (product: typeof products[0]) => {
    if (isAuthenticated) {
      addToCart(product);
    } else {
      toast.error("Please sign in to add products to your cart");
      navigate("/signin");
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        
        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="md:w-1/3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="text-sm text-muted-foreground">{product.category}</div>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="font-bold text-lg mt-2">₹{product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-pharmacy-primary hover:bg-pharmacy-dark"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
