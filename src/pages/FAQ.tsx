
import { useState } from "react";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { faqs } from "@/data/faqs";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle search and expand all matching items
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (term.trim() !== "") {
      // Expand all items that match the search
      const matchingItems = filteredFaqs.map((_, index) => `item-${index}`);
      setExpandedItems(matchingItems);
    } else {
      // Collapse all when search is cleared
      setExpandedItems([]);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        {/* Search */}
        <div className="mb-8 max-w-2xl mx-auto">
          <Input
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full"
          />
        </div>
        
        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <Accordion
              type="multiple"
              value={expandedItems}
              onValueChange={setExpandedItems}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4 shadow-sm"
                >
                  <AccordionTrigger className="text-left py-4 hover:no-underline">
                    <span className="font-medium text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg font-medium">No matching questions found.</p>
              <p className="text-gray-500">Please try a different search term.</p>
            </div>
          )}
          
          {/* Contact Section */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="mb-6 text-gray-600">
              Our customer support team is here to help. Reach out to us for personalized assistance.
            </p>
            <a
              href="/contact"
              className="inline-block bg-pharmacy-primary hover:bg-pharmacy-dark text-white px-6 py-3 rounded-md font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
