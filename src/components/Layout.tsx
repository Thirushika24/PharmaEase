
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  // Check if current path is sign in or sign up
  const isAuthPage = ['/signin', '/signup', '/reset-password'].includes(location.pathname);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Only show navbar if not on auth pages or if user is authenticated */}
      {(!isAuthPage || isAuthenticated) && <Navbar />}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
