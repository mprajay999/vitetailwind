
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Sticky Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-orange-600"
          >
            Patel Indian Grocers
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Products', 'Specials', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-screen flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
            alt="Indian Groceries"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative text-center text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-4">Your Favorite Indian Grocer</h1>
            <p className="text-xl mb-8">Freshness and Quality Delivered Daily</p>
            <a
              href="#products"
              className="bg-orange-600 px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              Explore Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1579113800032-c38bd7635818"
              alt="Store Interior"
              className="rounded-lg shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-4">
                Since 1985, Patel Indian Grocers has been serving the community with authentic Indian
                groceries and products. Our commitment to quality and customer service has made us the
                most trusted Indian grocery store in the region.
              </p>
              <p className="text-gray-600">
                We take pride in offering the freshest produce, finest spices, and widest selection of
                Indian groceries to help you create authentic dishes at home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section id="specials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Buy 2 Get 1 Free on Spices',
                description: 'Enhance your cooking with our premium spices. Limited time offer!',
                image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
              },
              {
                title: '10% Off on Fresh Produce',
                description: 'Get the freshest vegetables and fruits at discounted prices.',
                image: 'https://images.unsplash.com/photo-1582515073490-df9c84361689',
              },
              {
                title: 'Free Delivery on Orders Over $50',
                description: 'Enjoy free doorstep delivery when you spend $50 or more.',
                image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2dfc7',
              },
            ].map((special, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={special.image}
                  alt={special.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{special.title}</h3>
                  <p className="text-gray-600">{special.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d' },
              { name: 'Lentils', image: 'https://images.unsplash.com/photo-151594252634-94d585e2c8eb' },
              { name: 'Snacks', image: 'https://images.unsplash.com/photo-1613919113644-25406ad2f84a' },
              { name: 'Fresh Produce', image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6' },
            ].map((product) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Shah',
                text: 'The best Indian grocery store in town! Amazing selection of spices and fresh produce.',
              },
              {
                name: 'Raj Patel',
                text: 'Great service and authentic products. Feels like shopping in India!',
              },
              {
                name: 'Sarah Johnson',
                text: 'Wonderful staff and impressive variety of Indian groceries.',
              },
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                123 Grocery Lane<br />
                City, State 12345
              </p>
              <p className="text-gray-600 mb-4">
                Phone: (123) 456-7890<br />
                Email: info@patelgrocers.com
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-600 hover:text-orange-700">Facebook</a>
                <a href="#" className="text-orange-600 hover:text-orange-700">Instagram</a>
                <a href="#" className="text-orange-600 hover:text-orange-700">Twitter</a>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Patel Indian Grocers</h3>
              <p className="text-gray-400">Your trusted source for authentic Indian groceries.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                {['Home', 'About', 'Products', 'Specials', 'Testimonials', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 rounded-l w-full text-gray-800"
                />
                <button className="bg-orange-600 px-4 rounded-r hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 Patel Indian Grocers. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
}

// Chatbot Component
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simple bot responses
    setTimeout(() => {
      const botReply = {
        sender: 'bot',
        text:
          input.toLowerCase().includes('hello') ||
          input.toLowerCase().includes('hi')
            ? 'Hi there! How can I help you?'
            : "I'm here to help! Please ask me any questions about our products or services.",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-orange-600 text-white px-4 py-2 flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={toggleChatbot} className="text-xl">
              &times;
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 ${
                    msg.sender === 'bot' ? 'bg-gray-200' : 'bg-orange-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 focus:outline-none"
            />
            <button type="submit" className="bg-orange-600 text-white px-4">
              Send
            </button>
          </form>
        </div>
      )}
      <button
        onClick={toggleChatbot}
        className="bg-orange-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-orange-700 transition-colors"
      >
        {isOpen ? '✖' : '💬'}
      </button>
    </div>
  );
}

export default App;
