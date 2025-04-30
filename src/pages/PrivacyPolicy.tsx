
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead">
            This Privacy Policy describes how PharmaEase ("we", "our", or "us") collects, uses, and shares your personal information when you use our website or services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          
          <p>
            We collect information that you provide directly to us, such as when you create an account, place an order, contact customer support, or otherwise communicate with us. This information may include:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Personal identifiers (name, email address, phone number)</li>
            <li>Medical information (prescription details, medication history)</li>
            <li>Billing and shipping information</li>
            <li>Account credentials</li>
            <li>Communications and feedback you provide to us</li>
          </ul>
          
          <p>
            We also automatically collect certain information when you use our website, including:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage data (pages viewed, time spent on site, navigation paths)</li>
            <li>Location information (derived from your IP address)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          
          <p>We use your information for the following purposes:</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Providing and improving our services</li>
            <li>Processing and fulfilling your orders</li>
            <li>Communicating with you about your account or orders</li>
            <li>Sending promotional emails about products, special offers, or other information (you can opt out at any time)</li>
            <li>Monitoring and analyzing usage patterns and trends</li>
            <li>Detecting, preventing, and addressing technical or security issues</li>
            <li>Complying with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Sharing Your Information</h2>
          
          <p>We may share your information with:</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors (lawyers, accountants, insurers)</li>
            <li>Government agencies when required by law</li>
            <li>In connection with a business transaction (merger, acquisition, or sale of assets)</li>
          </ul>
          
          <p>
            We do not sell your personal information to third parties for advertising or marketing purposes.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
          
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>
          
          <p>
            To exercise any of these rights, please contact us using the information provided at the end of this policy.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
          
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          
          <address className="not-italic mt-4">
            <strong>PharmaEase</strong><br />
            V.O.C Street<br />
            Ullagarm<br />
            Chennai - 61.<br /><br />
            Email: privacy@pharmaease.com<br />
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

export default PrivacyPolicy;
