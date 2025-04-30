
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">PharmaEase</h2>
            <p className="text-gray-300 mb-4">
              Your trusted online pharmacy, providing quality medicines and healthcare products.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} PharmaEase. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email: support@pharmaease.com
              <br />
              Phone: +91 98406 50637
              <br />
              Address: V.O.C Street, Chennai - 61.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
