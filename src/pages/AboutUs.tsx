
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        
        {/* Mission & Vision */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-pharmacy-primary">Our Mission</h2>
                <p className="text-gray-700">
                  At PharmaEase, our mission is to make healthcare accessible and convenient for everyone. 
                  We strive to provide high-quality medicines and healthcare products at affordable prices, 
                  delivered directly to your doorstep. We believe that everyone deserves easy access to the 
                  medications they need, when they need them.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-pharmacy-primary">Our Vision</h2>
                <p className="text-gray-700">
                  We envision a world where healthcare is seamlessly integrated into people's lives, 
                  where accessing medicine is as easy as a few clicks. We're committed to leveraging 
                  technology to transform the traditional pharmacy experience, making it more efficient, 
                  transparent, and personalized for our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <p className="mb-4">
              PharmaEase was founded in 2020 by a team of healthcare professionals and technology experts 
              who recognized the challenges many people face in accessing medication regularly and reliably. 
              The traditional pharmacy model often meant long waiting times, limited stock availability, and 
              difficulty managing recurring prescriptions.
            </p>
            <p className="mb-4">
              Starting with just a small selection of over-the-counter medications and a commitment to same-day 
              delivery, we quickly grew as customers appreciated our convenient service and reliable product quality. 
              We expanded our inventory to include prescription medications, health devices, and wellness products.
            </p>
            <p>
              Today, PharmaEase serves thousands of customers nationwide, partnering with healthcare providers 
              to ensure seamless medication management. Our digital health platform continues to evolve with features 
              like medication reminders, virtual consultations, and personalized health insights.
            </p>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-pharmacy-light text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-medium mb-2">Quality Assurance</h3>
                <p className="text-sm text-gray-600">
                  We source our products only from licensed manufacturers and distributors, 
                  with rigorous quality control processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-pharmacy-light text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-lg font-medium mb-2">Customer Privacy</h3>
                <p className="text-sm text-gray-600">
                  We uphold the highest standards of data protection and confidentiality 
                  for all our customers' information.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-pharmacy-light text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="text-lg font-medium mb-2">Reliability</h3>
                <p className="text-sm text-gray-600">
                  We deliver on our promises, ensuring timely delivery and consistent 
                  product availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-pharmacy-light text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="text-lg font-medium mb-2">Customer Care</h3>
                <p className="text-sm text-gray-600">
                  We go above and beyond to ensure our customers have a positive experience 
                  and receive personalized support.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Our Team */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 rounded-full bg-pharmacy-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  DR
                </div>
                <h3 className="text-xl font-medium">Dr. Rebecca Davis</h3>
                <p className="text-pharmacy-primary mb-2">Chief Executive Officer</p>
                <p className="text-sm text-gray-600">
                  With over 20 years of experience in healthcare management, Dr. Davis leads 
                  our company with a focus on innovation and quality care.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 rounded-full bg-pharmacy-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  MJ
                </div>
                <h3 className="text-xl font-medium">Michael Johnson</h3>
                <p className="text-pharmacy-primary mb-2">Chief Technology Officer</p>
                <p className="text-sm text-gray-600">
                  Michael brings expertise in digital health platforms and e-commerce solutions, 
                  ensuring our technology delivers a seamless customer experience.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 rounded-full bg-pharmacy-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  SP
                </div>
                <h3 className="text-xl font-medium">Dr. Sarah Patel</h3>
                <p className="text-pharmacy-primary mb-2">Chief Pharmacy Officer</p>
                <p className="text-sm text-gray-600">
                  Dr. Patel oversees our pharmaceutical operations, ensuring compliance with regulations 
                  and maintaining the highest standards of pharmacy practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
