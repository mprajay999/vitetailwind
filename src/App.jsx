
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ChatBot() {
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
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simple bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Thank you for reaching out! We will get back to you shortly.' },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-orange-600 text-white px-4 py-2">
            <span>Chat with us</span>
            <button onClick={toggleChat} className="text-lg">&times;</button>
          </div>
          <div className="h-60 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === 'bot' ? 'text-left' : 'text-right'
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-full ${
                    msg.sender === 'bot'
                      ? 'bg-gray-200 text-gray-800'
                      : 'bg-orange-600 text-white'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-serif text-orange-600">Ruchi Indian Kitchen</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-600 transition">Home</a>
            <a href="#about" className="hover:text-orange-600 transition">About</a>
            <a href="#menu" className="hover:text-orange-600 transition">Menu</a>
            <a href="#gallery" className="hover:text-orange-600 transition">Gallery</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
            Reserve Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover"
            alt="Indian cuisine"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            Authentic Indian Flavors
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            Experience the rich taste of traditional Indian cuisine
          </motion.p>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition"
          >
            View Menu
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif mb-8">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine to food lovers. 
              Our recipes have been passed down through generations, bringing the true taste of India to your plate.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant interior"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chef cooking"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif text-center mb-12"
          >
            Our Menu
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu items */}
            {['Butter Chicken', 'Biryani', 'Paneer Tikka', 'Naan', 'Dal Makhani', 'Gulab Jamun'].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img 
                  src={`https://source.unsplash.com/400x300/?indian-food-${index + 1}`}
                  alt={item}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600 mb-4">Traditional Indian dish prepared with authentic spices</p>
                <p className="text-orange-600 font-semibold">$14.99</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif text-center mb-12"
          >
            Gallery
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={`https://source.unsplash.com/400x300/?restaurant-${index + 1}`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transform transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-serif text-center mb-12"
            >
              Contact Us
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  123 Restaurant Street<br />
                  New York, NY 10001
                </p>
                <p className="text-gray-600 mb-4">
                  Phone: (123) 456-7890<br />
                  Email: info@ruchiindian.com
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
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  required
                />
                <textarea 
                  placeholder="Message"
                  className="w-full p-2 border rounded h-32"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          <p className="mb-4">123 Restaurant Street, New York, NY 10001</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Careers</a>
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}

export default App;
