
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample data
const services = [
  {
    icon: "💻",
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs."
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets."
  },
  {
    icon: "☁️",
    title: "Cloud Services",
    description: "Scalable cloud solutions for modern businesses."
  }
];

const testimonials = [
  {
    quote: "Ragnova IT transformed our business operations with their innovative solutions.",
    name: "John Smith",
    company: "Tech Corp"
  },
  {
    quote: "Outstanding service and professional team. Highly recommended!",
    name: "Sarah Johnson",
    company: "Digital Solutions Inc."
  }
];

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

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Simple bot response logic
    const botResponse = getBotResponse(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);

    setInput('');
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hi there! How can I help you today?';
    }
    if (msg.includes('services')) {
      return 'We offer Software Development, Cybersecurity, and Cloud Services. Which one are you interested in?';
    }
    if (msg.includes('contact')) {
      return 'You can reach us at contact@ragnovait.com or call us at +1 (555) 123-4567.';
    }
    return "I'm sorry, I didn't understand that. Can you please rephrase?";
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 focus:outline-none"
        aria-label="Chat with us"
      >
        {isOpen ? '❮' : '💬'}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white w-80 max-w-full rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center p-4 bg-blue-600 rounded-t-lg">
            <h2 className="text-white text-lg">Chatbot</h2>
            <button onClick={toggleChat} className="text-white text-xl focus:outline-none">&times;</button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-600 text-white'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
            />
          </form>
        </div>
      )}
    </>
  );
};

const App = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Extended animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Ragnova IT
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
          <motion.div 
            {...fadeIn}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-6">Transform Your Business with Technology</h1>
            <p className="text-xl mb-8">Leading IT Solutions for the Digital Age</p>
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
              Get Started
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-6">About Ragnova IT Solutions</h2>
                <p className="text-gray-600 mb-6">
                  We are dedicated to delivering cutting-edge IT solutions that help businesses thrive in the digital landscape. With years of experience and a team of skilled professionals, we transform challenges into opportunities for growth.
                </p>
                <p className="text-gray-600">
                  Our mission is to empower organizations through innovative technology solutions, ensuring they stay ahead in today's competitive market.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              {...fadeIn}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Services
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.h2 
              {...fadeIn}
              className="text-3xl font-bold text-center mb-12"
            >
              Client Testimonials
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-lg shadow"
                >
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              {...fadeIn}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Ragnova IT</h3>
                <p className="text-gray-400">Transforming businesses through technology</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
                  <a href="#about" className="block text-gray-400 hover:text-white">About</a>
                  <a href="#services" className="block text-gray-400 hover:text-white">Services</a>
                  <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <div className="text-gray-400 space-y-2">
                  <p>contact@ragnovait.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>123 Tech Street, Digital City</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>© 2024 Ragnova IT Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default App;
