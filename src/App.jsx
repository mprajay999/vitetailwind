
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaRobot } from 'react-icons/fa';

const App = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Smooth scroll behavior is handled by Tailwind's 'scroll-smooth' class on the main div

  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  // Handle sending messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // Simple bot response logic
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Thank you for reaching out! We will get back to you shortly.' }
      ]);
    }, 1000);
  };

  return (
    <div className="font-sans scroll-smooth">
      {/* Sticky Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-serif text-red-800 cursor-pointer"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Ruchi Indian Kitchen
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Menu', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-700 hover:text-red-800 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Indian Food Spread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <motion.div 
          className="relative h-full flex flex-col justify-center items-center text-white text-center px-4"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-4">Experience Authentic Indian Flavors</h2>
          <p className="text-xl mb-8">Traditional recipes with a modern twist</p>
          <a href="#menu" className="bg-red-800 text-white px-8 py-3 rounded hover:bg-red-700 transition">
            View Menu
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            <h2 className="text-4xl font-serif text-red-800 mb-8">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Ruchi Indian Kitchen brings the authentic flavors of India to your table. 
              With recipes passed down through generations and carefully selected spices, 
              we create dishes that tell the story of our rich culinary heritage.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1576402187878-06919c15c8f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Kitchen"
              className="rounded-lg shadow-xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            <h2 className="text-4xl font-serif text-red-800 text-center mb-12">Our Menu</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Menu Categories */}
              {['Starters', 'Main Course', 'Breads', 'Desserts'].map((category) => (
                <div key={category} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-2xl font-serif text-red-800 mb-4">{category}</h3>
                  <div className="space-y-4">
                    {/* Sample Menu Items */}
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex justify-between">
                        <span className="text-gray-800">Dish Name {item}</span>
                        <span className="text-red-800">$12.99</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-red-800 text-center mb-12">Gallery</h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <img 
                key={item}
                src={`https://source.unsplash.com/collection/190727/800x600?dish=${item}`}
                alt="Food Gallery"
                className="rounded-lg hover:opacity-90 transition cursor-pointer"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            <h2 className="text-4xl font-serif text-red-800 mb-12">Testimonials</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((testimonial) => (
                <div key={testimonial} className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"The best Indian food I've ever had! The flavors are authentic and the service is excellent."</p>
                  <p className="text-gray-900 font-semibold">- Customer {testimonial}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            <h2 className="text-4xl font-serif text-red-800 text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4">Get in Touch</h3>
                <form className="space-y-4" onSubmit={handleSendMessage}>
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
                    rows="4" 
                    className="w-full p-2 border rounded"
                    required
                  ></textarea>
                  <button 
                    type="submit" 
                    className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <h3 className="text-2xl mb-4">Visit Us</h3>
                <p className="text-gray-700 mb-4">
                  123 Restaurant Street<br />
                  City, State 12345<br />
                  Phone: (123) 456-7890<br />
                  Email: info@ruchiindian.com
                </p>
                <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
                  {/* Map placeholder */}
                  <span className="text-gray-500">Map will be here</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-serif">Ruchi Indian Kitchen</h3>
              <p className="mt-2">Authentic Indian Cuisine</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            © 2024 Ruchi Indian Kitchen. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        {!isChatOpen && (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-red-800 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition"
            aria-label="Open Chatbot"
          >
            <FaRobot size={24} />
          </button>
        )}
        {isChatOpen && (
          <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-between items-center bg-red-800 text-white p-4">
              <span>Chat with us</span>
              <button onClick={() => setIsChatOpen(false)} aria-label="Close Chatbot">
                &#10005;
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                  <span className={`inline-block px-4 py-2 rounded ${
                    msg.sender === 'bot' ? 'bg-gray-200' : 'bg-red-200'
                  }`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex p-4 border-t">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-l"
                required
              />
              <button 
                type="submit" 
                className="bg-red-800 text-white px-4 py-2 rounded-r hover:bg-red-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
