
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-bold text-pharmacy-primary mb-4">404</h1>
          <p className="text-2xl text-gray-800 mb-6">Oops! Page not found</p>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="space-x-4">
            <Link to="/">
              <Button className="bg-pharmacy-primary hover:bg-pharmacy-dark">
                Return to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
