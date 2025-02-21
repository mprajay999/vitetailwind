
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="font-sans">
      {/* Global Styles for Smooth Scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Sticky Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Spectrum Internet
          </motion.div>

          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#plans" className="hover:text-blue-600">Plans</a></li>
            <li><a href="#support" className="hover:text-blue-600">Support</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Experience Unmatched Internet Speed</h1>
            <p className="text-xl mb-8">Connect to the future with Spectrum's lightning-fast internet service.</p>
            <button
              onClick={() => scrollToSection('plans')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`rounded-lg p-8 ${
                  plan.popular ? 'bg-blue-600 text-white' : 'bg-white border'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-sm">/mo</span></p>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold ${
                    plan.popular ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                  } hover:opacity-90 transition`}
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Support</h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">We're Here to Help</h3>
              <p className="text-gray-700 mb-6">
                Our dedicated support team is available 24/7 to assist you with any issues or questions you may have.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Contact Support
              </button>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• How do I reset my password?</li>
                <li>• What is your refund policy?</li>
                <li>• How can I upgrade my plan?</li>
                <li>• Where can I find my billing information?</li>
                <li>• How do I contact technical support?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold w-full hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Spectrum Internet</h3>
              <p className="text-gray-400">Connecting you to what matters most.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#plans" className="hover:text-white">Plans</a></li>
                <li><a href="#support" className="hover:text-white">Support</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 1-800-SPECTRUM</li>
                <li>📧 support@spectrum.com</li>
                <li>🏠 123 Internet Street</li>
                <li>🌐 Digital City, DC 12345</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="p-2 rounded-l-lg w-full focus:outline-none" />
                <button className="bg-blue-600 px-4 rounded-r-lg text-white font-semibold hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Spectrum Internet. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

// Helper function to scroll to sections
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    // Simple bot response logic
    setTimeout(() => {
      setMessages([...newMessages, { sender: 'bot', text: getBotResponse(input) }]);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('price') || msg.includes('cost')) {
      return 'Our pricing plans are competitive and tailored to meet your needs. Please check the Plans section for more details.';
    }
    if (msg.includes('help') || msg.includes('support')) {
      return 'You can reach out to our support team through the Contact Us section or call us at 1-800-SPECTRUM.';
    }
    return "I'm sorry, I didn't understand that. Could you please rephrase?";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center bg-blue-600 text-white p-4">
            <span>Chat with us</span>
            <button onClick={toggleChat} className="text-lg">&times;</button>
          </div>
          <div className="p-4 h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                <span className={`inline-block px-4 py-2 rounded-full ${
                  msg.sender === 'bot' ? 'bg-gray-200 text-gray-800' : 'bg-blue-600 text-white'
                }`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition">
              Send
            </button>
          </form>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition focus:outline-none"
        aria-label="Chatbot"
      >
        💬
      </button>
    </div>
  );
};

// Data for Services
const services = [
  {
    icon: "🚀",
    title: "High-Speed Internet",
    description: "Lightning-fast speeds up to 1 Gbps for seamless streaming and gaming."
  },
  {
    icon: "🛡️",
    title: "Reliable Support",
    description: "24/7 technical support to keep you connected whenever you need help."
  },
  {
    icon: "⚡",
    title: "Easy Installation",
    description: "Professional installation with minimal disruption to your schedule."
  }
];

// Data for Plans
const plans = [
  {
    name: "Basic",
    price: 49.99,
    features: ["100 Mbps", "No Data Caps", "Free Installation"],
    popular: false
  },
  {
    name: "Premium",
    price: 79.99,
    features: ["500 Mbps", "No Data Caps", "Free Installation", "WiFi Router Included"],
    popular: true
  },
  {
    name: "Ultra",
    price: 99.99,
    features: ["1 Gbps", "No Data Caps", "Free Installation", "WiFi 6 Router Included"],
    popular: false
  }
];

export default App;
