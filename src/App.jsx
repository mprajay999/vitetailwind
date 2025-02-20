
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll functionality for navbar links
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-black/90 text-white z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fitness Pro Gym</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-500 transition">Home</a>
            <a href="#about" className="hover:text-red-500 transition">About</a>
            <a href="#programs" className="hover:text-red-500 transition">Programs</a>
            <a href="#trainers" className="hover:text-red-500 transition">Trainers</a>
            <a href="#gallery" className="hover:text-red-500 transition">Gallery</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 p-4">
            <a href="#home" className="block py-2 hover:text-red-500 transition">Home</a>
            <a href="#about" className="block py-2 hover:text-red-500 transition">About</a>
            <a href="#programs" className="block py-2 hover:text-red-500 transition">Programs</a>
            <a href="#trainers" className="block py-2 hover:text-red-500 transition">Trainers</a>
            <a href="#gallery" className="block py-2 hover:text-red-500 transition">Gallery</a>
            <a href="#contact" className="block py-2 hover:text-red-500 transition">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')] bg-cover bg-center"
      >
        <div className="h-full bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1 
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-4"
            >
              Transform Your Body
            </motion.h1>
            <p className="text-xl mb-8">Join the elite fitness community today</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
            >
              Start Your Journey
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                At Fitness Pro Gym, we believe in transforming lives through fitness. 
                Our state-of-the-art facility and expert trainers are dedicated to 
                helping you achieve your fitness goals, whether you're just starting 
                or are an experienced athlete.
              </p>
            </div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77" 
                alt="Gym Interior"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Training",
                description: "One-on-one sessions tailored to your goals",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
              },
              {
                title: "Group Classes",
                description: "High-energy workouts with like-minded individuals",
                image: "https://images.unsplash.com/photo-1571388208497-dc68a47449d6"
              },
              {
                title: "Strength Training",
                description: "Build muscle and increase your strength",
                image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
              }
            ].map((program, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-700 rounded-lg overflow-hidden"
              >
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p>{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Trainers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                specialty: "Strength & Conditioning",
                image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc"
              },
              {
                name: "Jane Smith",
                specialty: "Yoga & Flexibility",
                image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0"
              },
              {
                name: "Mike Johnson",
                specialty: "CrossFit Expert",
                image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
              }
            ].map((trainer, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="text-gray-400">{trainer.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full p-3 rounded bg-gray-700"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full p-3 rounded bg-gray-700"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-3 rounded bg-gray-700"
                  ></textarea>
                </div>
                <button className="bg-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="space-y-4">
                <p>📍 123 Fitness Street, Gym City, GC 12345</p>
                <p>📞 (555) 123-4567</p>
                <p>✉️ info@fitnessprogym.com</p>
              </div>
              {/* Add Map here */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Fitness Pro Gym. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-red-500 transition">Facebook</a>
            <a href="#" className="hover:text-red-500 transition">Instagram</a>
            <a href="#" className="hover:text-red-500 transition">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
