
import React, { useState } from "react";
import { Mail as MailIcon } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Phone,
  Send,
  FileText,
  Heart
} from "lucide-react";

const faqs = [
  {
    question: "How accurate is the symptom checker?",
    answer: "Our symptom checker uses a comprehensive database of medical conditions and symptoms to provide possible matches. However, it's important to note that it's meant to be informational only and not a replacement for professional medical advice. The accuracy can vary depending on the specificity of symptoms entered."
  },
  {
    question: "Is my health information secure?",
    answer: "Yes, we take data privacy very seriously. All health information you enter is encrypted and stored securely. We do not share your personal health information with third parties without your explicit consent. You can read more about our privacy practices in our Privacy Policy."
  },
  {
    question: "How do I contact a doctor through the app?",
    answer: "In the 'Contact Doctors' section, you can browse through our network of healthcare professionals. Each doctor's profile includes their contact information. You can call or email them directly to schedule an appointment. In the future, we plan to implement an in-app appointment booking system."
  },
  {
    question: "Can I trust the recommended home remedies?",
    answer: "Our home remedies are sourced from traditional medicine practices and contemporary research. However, they should be used with caution and are not meant to replace medical treatment. Always consult with a healthcare professional before trying any remedy, especially if you have existing health conditions or are taking medications."
  },
  {
    question: "How are the diet plans created?",
    answer: "Our diet plans are based on Ayurvedic principles and modern nutritional science. They are designed to provide general guidance based on body types (Vata, Pitta, Kapha) and weight management goals. For personalized nutrition advice tailored to your specific health needs, we recommend consulting with a registered dietitian or nutritionist."
  },
  {
    question: "How can I provide feedback about the app?",
    answer: "We value your feedback! You can share your thoughts through our Feedback page, where you can rate our app and leave detailed comments. Your insights help us improve and provide better service to all users."
  },
  {
    question: "Is there a way to save my health history in the app?",
    answer: "Currently, we do not have a feature to save your health history, but we're working on implementing this in a future update. This will allow you to track your symptoms over time and share your history with healthcare providers."
  },
  {
    question: "What should I do in a medical emergency?",
    answer: "This app is not designed for emergencies. If you're experiencing a medical emergency, please call emergency services (e.g., 911 in the US) immediately or go to your nearest emergency room. Do not wait for app responses in urgent situations."
  }
];

const resources = [
  {
    title: "User Guide",
    description: "Complete guide to using all features of our health app",
    icon: <Book className="h-6 w-6 text-health-600" />,
    link: "#"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step visual guides for navigating the app",
    icon: <FileText className="h-6 w-6 text-health-600" />,
    link: "#"
  },
  {
    title: "Health Articles",
    description: "Educational content written by healthcare professionals",
    icon: <Heart className="h-6 w-6 text-health-600" />,
    link: "#"
  }
];

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  const [chatMessage, setChatMessage] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredFaqs(faqs);
      return;
    }
    
    const filtered = faqs.filter(
      faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredFaqs(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white bg-[url('/images/help-bg.jpg')] bg-cover bg-fixed bg-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
          Help Center
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Find answers to common questions, learn how to use our app features, 
          and get in touch with our support team if you need additional help.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass rounded-xl p-6 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 mr-2 text-health-600" />
                Frequently Asked Questions
              </h2>
              
              <div className="flex mb-6">
                <Input
                  placeholder="Search for questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mr-2 input-focus"
                />
                <Button 
                  onClick={handleSearch}
                  className="bg-health-600 hover:bg-health-700 text-white"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-gray-500">No results found. Try a different search term.</p>
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="animate-fadeIn">
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
            
            <div className="glass rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Book className="h-6 w-6 mr-2 text-health-600" />
                Helpful Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.link}
                    className="p-4 border border-gray-200 rounded-lg hover:border-health-400 hover:shadow-md transition-all duration-300 bg-white/80"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 bg-health-50 p-3 rounded-full">
                        {resource.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-1">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="glass rounded-xl shadow-lg h-full flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold mb-2 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-health-600" />
                  Live Chat Support
                </h2>
                <p className="text-sm text-gray-600">
                  Our support team is here to help. Start a conversation now.
                </p>
              </div>
              
              <div className="flex-grow p-4 bg-gray-50 rounded-b-xl overflow-y-auto max-h-96">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-health-600 text-white rounded-full p-2 mr-2">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm">
                        Hello! How can we help you today? Feel free to ask any questions about our app.
                      </p>
                      <span className="text-xs text-gray-500 mt-1 block">Support Team • Just now</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex">
                  <Input
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="mr-2 input-focus"
                  />
                  <Button className="bg-health-600 hover:bg-health-700 text-white">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6 shadow-lg mt-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-health-600" />
                Contact Information
              </h2>
              
              <div className="space-y-3">
                <p className="text-sm flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-health-500" />
                  <span>Support Hotline: (555) 123-4567</span>
                </p>
                <p className="text-sm flex items-center">
                  <MailIcon className="h-4 w-4 mr-2 text-health-500" />
                  <span>Email: support@healthapp.com</span>
                </p>
                <p className="text-sm">
                  <span className="block text-gray-600 mb-1">Hours of Operation:</span>
                  <span className="block pl-6">Monday-Friday: 9AM - 8PM</span>
                  <span className="block pl-6">Saturday: 10AM - 6PM</span>
                  <span className="block pl-6">Sunday: Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
