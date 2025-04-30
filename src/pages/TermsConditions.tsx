
import Layout from "@/components/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Please read these Terms and Conditions carefully before using the PharmaEase website or services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
          
          <p>
            By accessing or using our website, placing orders, or otherwise engaging with our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access or use our services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Account Registration</h2>
          
          <p>
            To use certain features of our website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          
          <p>
            You are responsible for safeguarding your account credentials and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Product Information and Ordering</h2>
          
          <p>
            We strive to display accurate product information, including prices and availability. However, we do not guarantee that all information is error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
          </p>
          
          <p>
            By placing an order, you make an offer to purchase the products at the prices listed. We reserve the right to accept or decline your order for any reason, including but not limited to product availability, errors in product or pricing information, or concerns about fraudulent activity.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Prescription Medications</h2>
          
          <p>
            For prescription medications, you must provide a valid prescription from a licensed healthcare provider. We reserve the right to verify prescriptions with the issuing healthcare provider before processing your order.
          </p>
          
          <p>
            You agree that all information provided regarding prescriptions is accurate and complete. Providing false or misleading information may result in termination of your account and potential legal consequences.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Payment</h2>
          
          <p>
            We accept various payment methods as indicated on our website. By providing payment information, you represent and warrant that you have the legal right to use the payment method provided.
          </p>
          
          <p>
            All prices are shown in the currency indicated on our website and do not include applicable taxes, which will be added at checkout. We reserve the right to change prices at any time without notice.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Delivery and Shipping</h2>
          
          <p>
            Delivery times are estimates and not guaranteed. We are not responsible for delays caused by factors beyond our control, including but not limited to weather conditions, carrier delays, or natural disasters.
          </p>
          
          <p>
            Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. You are responsible for inspecting packages upon receipt and reporting any damages or discrepancies promptly.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Returns and Refunds</h2>
          
          <p>
            For safety and quality reasons, we cannot accept returns on prescription medications or opened over-the-counter medications. For other products, our return policy allows returns within 30 days of receipt for unopened, undamaged items in their original packaging.
          </p>
          
          <p>
            Refunds will be issued to the original payment method used for the purchase. Processing times for refunds may vary based on your payment provider.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Intellectual Property</h2>
          
          <p>
            All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of PharmaEase or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          
          <p>
            You may not reproduce, distribute, modify, display, or use any part of our website or content without our prior written permission.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
          
          <p>
            To the maximum extent permitted by law, PharmaEase and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <p>
            In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by you to us for the products or services giving rise to the claim.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Indemnification</h2>
          
          <p>
            You agree to indemnify, defend, and hold harmless PharmaEase and its affiliates, officers, employees, agents, partners, and licensors from any claim, demand, loss, or damages, including reasonable attorneys' fees, arising out of or related to your use of our services or violation of these Terms.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
          
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PharmaEase is established, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
          
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
          
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          
          <address className="not-italic mt-4">
            <strong>PharmaEase</strong><br />
            V.O.C Street<br />
            Ullagaram<br />
            Chennai - 61.<br /><br />
            Email: legal@pharmaease.com<br />
            Phone: +91 9840650637
          </address>
          
          <p className="text-sm text-gray-500 mt-8">
            Last Updated: April 30, 2025
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
