
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { items } = useCart();
  
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pharmacy-primary">
          PharmaEase
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-pharmacy-primary font-medium">
            HOME
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-pharmacy-primary font-medium">
            ABOUT US
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-pharmacy-primary font-medium">
            PRODUCTS
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-pharmacy-primary font-medium">
            CONTACT
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/cart" className="text-gray-700 hover:text-pharmacy-primary font-medium relative">
                <ShoppingCart className="inline-block h-5 w-5 mr-1" />
                CART
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pharmacy-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-pharmacy-primary font-medium">
                <User className="inline-block h-5 w-5 mr-1" />
                {user?.name?.toUpperCase() || "PROFILE"}
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-pharmacy-primary font-medium">
                FAQs
              </Link>
              <Button variant="ghost" onClick={logout} className="text-gray-700 hover:text-pharmacy-primary font-medium">
                LOGOUT
              </Button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 hover:text-pharmacy-primary font-medium">
                SIGN IN
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-pharmacy-primary font-medium">
                SIGN UP
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
