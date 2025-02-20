
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simple bot response logic
    let botResponse = "I'm sorry, I didn't understand that.";
    if (input.toLowerCase().includes('hello')) {
      botResponse = 'Hi there! How can I help you?';
    } else if (input.toLowerCase().includes('hours')) {
      botResponse = 'We are open Mon-Sat from 9AM to 8PM and Sunday from 10AM to 6PM.';
    } else if (input.toLowerCase().includes('location')) {
      botResponse = 'We are located at 123 Spice Street, Foodville, FC 12345.';
    }

    const botMessage = { sender: 'bot', text: botResponse };
    // Simulate bot response delay
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div>
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-green-900 focus:outline-none z-50"
        aria-label="Chatbot"
      >
        {isOpen ? '×' : '💬'}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-lg z-50"
        >
          <div className="flex justify-between items-center bg-green-800 text-white p-4 rounded-t-lg">
            <h4 className="text-lg">Chat with us</h4>
            <button onClick={toggleChat} className="text-xl font-bold">
              ×
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'bot'
                      ? 'bg-green-100 text-gray-800'
                      : 'bg-green-800 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </form>
        </motion.div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      {/* Sticky Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-green-800"
          >
            Patel Indian Grocery
          </motion.h1>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-green-800">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-green-800">
              About
            </a>
            <a href="#products" className="text-gray-600 hover:text-green-800">
              Products
            </a>
            <a href="#contact" className="text-gray-600 hover:text-green-800">
              Contact
            </a>
          </nav>

          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-green-800 mb-6">
              Experience the Authentic Flavors of India
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover our extensive collection of premium spices, lentils, and authentic Indian
              groceries.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
              Shop Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Since 1995, Patel Indian Grocery has been serving the community with the finest
                quality Indian groceries and spices. Our commitment to authenticity and customer
                service makes us the preferred choice for Indian cuisine enthusiasts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-green-800 mr-2">✓</span> Premium Quality Products
                </li>
                <li className="flex items-center">
                  <span className="text-green-800 mr-2">✓</span> Authentic Indian Spices
                </li>
                <li className="flex items-center">
                  <span className="text-green-800 mr-2">✓</span> Wide Product Selection
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Store Display"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">Our Products</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Product Cards */}
            {[
              {
                name: 'Spices',
                image:
                  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Lentils',
                image:
                  'https://images.unsplash.com/photo-1515543904379-b0a0102ef5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Snacks',
                image:
                  'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h4>
                  <button className="text-orange-500 hover:text-orange-600">
                    View Products →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-800"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-800"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-800"
                  ></textarea>
                </div>
                <button className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Location</h4>
                <p className="text-gray-600">123 Spice Street, Foodville, FC 12345</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Hours</h4>
                <p className="text-gray-600">Mon-Sat: 9AM - 8PM</p>
                <p className="text-gray-600">Sunday: 10AM - 6PM</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Contact</h4>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: info@patelgrocery.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">Patel Indian Grocery</h5>
              <p className="text-green-100">
                Your trusted source for authentic Indian groceries since 1995.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-green-100 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-green-100 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-green-100 hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-green-100 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Connect</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-green-100 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-green-100 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-green-100 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-100">© 2024 Patel Indian Grocery. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default App;
