
import React, { useState } from 'react';
import { Mail, MessageCircle, Send, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Project Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.open(`mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const faqData = [
    {
      question: "How long does a project take?",
      answer: "Each project is unique, but most websites are completed within 1–4 weeks depending on complexity and responsiveness during collaboration."
    },
    {
      question: "Do you do revisions?",
      answer: "Yes! I typically include a few rounds of revisions to make sure everything looks and works the way you want. I want you to be happy with the result."
    },
    {
      question: "Can you host the website?",
      answer: "I can help set up hosting or deploy it to platforms like Netlify, Vercel, or your preferred provider. I'll walk you through any part you're unsure about."
    },
    {
      question: "What tools do you use?",
      answer: "I specialize in full-stack development, primarily using Vue.js and React for the frontend, and Python (Django), Node.js, and Express with MongoDB/PostgreSQL for the backend. I also leverage Docker and Postman in my workflow and collaborate with a UI/UX designer for design."
    },
    {
      question: "What if I don't know exactly what I want yet?",
      answer: "No problem! I'll help you figure out what works best for your goals. I offer a discovery chat where we talk through ideas and narrow things down together."
    },
    {
      question: "Can you help update or fix my existing website?",
      answer: "Yes — I can help with website maintenance, fixes, or redesigns even if it was built by someone else. I'll first check the tech stack to confirm compatibility."
    },
    {
      question: "Do you build mobile-friendly websites?",
      answer: "Absolutely. All websites I build are fully responsive, meaning they'll work and look great on mobile, tablet, and desktop devices."
    },
    {
      question: "What types of websites do you build?",
      answer: "I've built everything from portfolios and landing pages to e-commerce stores, dashboards, and full web apps. I can tailor the build to fit your goals."
    },
    {
      question: "How do payments work?",
      answer: "I usually require a 40% deposit up front and the rest upon completion. I'll send an invoice and can accept payments via bank transfer, Gcash, Maya or Cash."
    },
    {
      question: "What if I need help after the site is launched?",
      answer: "I offer ongoing support packages or hourly rates for post-launch help — whether it's adding new features, fixing bugs, or small updates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Let's Work Together
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Me Directly</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Prefer to email directly? I usually respond within 24 hours.
                </p>
                <button
                  onClick={() => window.open('mailto:your@email.com', '_blank')}
                  className="text-primary hover:text-primary-light font-medium transition-colors"
                >
                  your@email.com
                </button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Let's Chat</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you need a simple website or a complex web application, 
                  let's discuss how I can help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
