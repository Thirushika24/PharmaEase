
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: "Fast Delivery",
      description: "Get your medicines delivered to your doorstep within hours.",
      icon: "🚚"
    },
    {
      title: "24/7 Support",
      description: "Our pharmacists are available round the clock to assist you.",
      icon: "🕒"
    },
    {
      title: "Authentic Medicines",
      description: "All our products are sourced directly from manufacturers.",
      icon: "✓"
    },
    {
      title: "Health Consultation",
      description: "Access online consultations with healthcare professionals.",
      icon: "👨‍⚕️"
    },
    {
      title: "Prescription Management",
      description: "Upload and manage your prescriptions digitally.",
      icon: "📋"
    },
    {
      title: "Monthly Subscriptions",
      description: "Subscribe to your regular medications and never miss a dose.",
      icon: "📅"
    }
  ];
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      text: "PharmaEase has transformed how I manage my healthcare. The delivery is always on time, and the customer support is exceptional."
    },
    {
      name: "Dr. Michael Chen",
      role: "Healthcare Professional",
      text: "I recommend PharmaEase to all my patients. Their commitment to quality and authenticity is commendable."
    },
    {
      name: "Robert Williams",
      role: "Subscription User",
      text: "The subscription service ensures I never miss my medications. It's convenient, reliable, and has excellent value for money."
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Customer",
      text: "My first experience with PharmaEase was fantastic! The website is easy to navigate, and the delivery was faster than expected."
    }
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-pharmacy-light to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Your Safety, Our Promise
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                Experience the convenience of ordering medicines online with reliable delivery and authentic products.
              </p>
              <Link to={isAuthenticated ? "/products" : "/signup"}>
                <Button className="bg-pharmacy-primary hover:bg-pharmacy-dark text-white px-6 py-3 rounded-md font-medium text-lg">
                  Explore Our Shop
                </Button>
              </Link>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2940&auto=format&fit=crop" 
                alt="Pharmacy services" 
                className="w-full h-auto rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-pharmacy-primary text-white p-3 rounded-full mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <Badge variant="outline">{testimonial.role}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-pharmacy-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience better healthcare?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made PharmaEase their go-to online pharmacy.
          </p>
          <Link to={isAuthenticated ? "/products" : "/signup"}>
            <Button className="bg-white text-pharmacy-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
