
export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How do I place an order on PharmaEase?",
    answer: "To place an order, browse our products, add the items you need to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your purchase."
  },
  {
    question: "Do I need a prescription to order medications?",
    answer: "Yes, prescription medications require a valid prescription from a licensed healthcare provider. You can upload your prescription during checkout or have your doctor send it directly to us."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary based on your location. Typically, orders within the city are delivered within 24 hours, while other locations may take 2-3 business days."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit and debit cards, PayPal, and bank transfers. Cash on delivery is also available in select locations."
  },
  {
    question: "Can I return medications if I don't need them anymore?",
    answer: "For safety and quality reasons, we cannot accept returns on medications once they have been dispensed. Please consult our return policy for more details on non-medication items."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is dispatched, you'll receive a tracking number via email and SMS. You can also track your order status in the 'My Orders' section of your account."
  },
  {
    question: "Are the medications sold on your website genuine?",
    answer: "Yes, all our medications are sourced from licensed manufacturers and authorized distributors. We have a strict quality control process to ensure authenticity."
  },
  {
    question: "Do you offer discounts for regular customers?",
    answer: "Yes, we have a loyalty program that offers points on every purchase. These points can be redeemed for discounts on future orders. We also have special offers for subscription customers."
  },
  {
    question: "How can I cancel my order?",
    answer: "You can cancel your order within 30 minutes of placing it through the 'My Orders' section or by contacting our customer service. Orders already dispatched cannot be cancelled."
  },
  {
    question: "What should I do if I receive damaged products?",
    answer: "Please contact our customer service immediately with photos of the damaged items. We'll arrange a replacement or refund as appropriate."
  },
  {
    question: "Can I schedule recurring deliveries for my regular medications?",
    answer: "Yes, our subscription service allows you to schedule automatic refills and deliveries for your regular medications. You can manage your subscriptions from your account settings."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within the country. We're working on expanding our services internationally in the future."
  }
];
