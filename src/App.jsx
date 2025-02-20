
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-serif text-amber-800"
            >
              Hyderabadi Nawabi House
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Gallery', 'Menu', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-amber-900 hover:text-amber-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative"
        id="home"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto h-full flex items-center px-6">
              <div className="text-white max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">
                  Experience Authentic Hyderabadi Cuisine
                </h1>
                <p className="text-xl mb-8">Discover the royal taste of Nawabi culture</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#menu"
                  className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
                >
                  Explore Our Menu
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-amber-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Since 1992, Hyderabadi Nawabi House has been serving authentic Hyderabadi cuisine,
                carrying forward the legacy of the Nizams. Our recipes have been passed down through
                generations, preserving the authentic flavors of royal kitchens.
              </p>
              <p className="text-gray-700">
                Every dish we serve is a testament to our commitment to quality and tradition,
                prepared with carefully selected ingredients and age-old cooking techniques.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant Interior"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-amber-900 mb-12">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                alt: 'Dish 1',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                alt: 'Dish 2',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1601758123927-8ae3568c2527?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                alt: 'Dish 3',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1600891964451-02229b04f1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                alt: 'Dish 4',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1594007653661-ff681396ca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                alt: 'Dish 5',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1601758064477-7aa6bc02fb4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                alt: 'Dish 6',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img src={item.image} alt={item.alt} className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-amber-900 mb-12">Our Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Hyderabadi Biryani',
                image:
                  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Aromatic basmati rice cooked with tender meat and authentic spices',
              },
              {
                name: 'Haleem',
                image:
                  'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'A rich blend of wheat, lentils, and meat, slow-cooked to perfection',
              },
              {
                name: 'Qubani ka Meetha',
                image:
                  'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Traditional dessert made with dried apricots and cream',
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-amber-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-amber-900 mb-12">Testimonials</h2>
          <div className="space-y-8">
            {[
              {
                name: 'Aisha Khan',
                feedback:
                  'The biryani here is simply unmatched. A true taste of Hyderabad!',
                avatar:
                  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Ravi Sharma',
                feedback:
                  'An exceptional dining experience with royal flavors and impeccable service.',
                avatar:
                  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Sunita Verma',
                feedback:
                  'The ambiance and the food transport you straight to the heart of Hyderabad.',
                avatar:
                  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-serif text-amber-900">{testimonial.name}</h3>
                  <p className="text-gray-700 mt-2">"{testimonial.feedback}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-6">Contact Us</h2>
              <p className="mb-4">123 Charminar Road</p>
              <p className="mb-4">Hyderabad, India 500001</p>
              <p className="mb-4">Phone: +91 123 456 7890</p>
              <p className="mb-4">Email: info@hyderabadinawabi.com</p>
            </div>
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission logic here
                alert('Message sent!');
              }}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-2 rounded text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Hyderabadi Nawabi House. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

function Chatbot() {
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

    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // Simple bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: "Thank you for reaching out! We'll get back to you shortly." },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6">
      {isOpen ? (
        <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-amber-600 text-white px-4 py-2">
            <span>Chatbot</span>
            <button onClick={toggleChat} className="text-lg">
              &times;
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg ${
                    msg.sender === 'bot' ? 'bg-gray-300' : 'bg-amber-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex p-2 bg-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-l focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-amber-600 text-white p-2 rounded-r hover:bg-amber-700"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}

export default App;
