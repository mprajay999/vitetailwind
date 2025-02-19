
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationSuccess, setIsReservationSuccess] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Edamame", price: "6", description: "Steamed soybeans with sea salt" },
        { name: "Gyoza", price: "8", description: "Pan-fried pork dumplings" },
        { name: "Agedashi Tofu", price: "7", description: "Fried tofu in dashi broth" }
      ]
    },
    {
      category: "Main Dishes",
      items: [
        { name: "Yakitori Set", price: "18", description: "Assorted grilled chicken skewers" },
        { name: "Sashimi Platter", price: "32", description: "Chef's selection of fresh sashimi" },
        { name: "Wagyu Steak", price: "45", description: "A5 Japanese Wagyu with ponzu sauce" }
      ]
    }
  ];

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setIsReservationSuccess(true);
    setTimeout(() => setIsReservationSuccess(false), 3000);
  };

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 text-white z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-light">TSUKI IZAKAYA</h1>
          <div className="hidden md:flex space-x-8">
            {["home", "about", "menu", "gallery", "reservations"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="capitalize cursor-pointer hover:text-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeIn}
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1590492176778-b42a67acabed?q=80")'
        }}
      >
        <div className="text-center text-white">
          <motion.h1 
            className="text-6xl md:text-8xl font-light mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TSUKI IZAKAYA
          </motion.h1>
          <p className="text-xl md:text-2xl mb-8">An authentic taste of Japan under the moonlight</p>
          <Link
            to="reservations"
            smooth={true}
            duration={500}
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-sm cursor-pointer transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        id="about"
        className="py-20 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 font-light">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Established in 2020, Tsuki Izakaya brings the authentic flavors and atmosphere
              of a traditional Japanese pub to the heart of the city. Our master chef,
              with over 20 years of experience in Tokyo's finest establishments, crafts
              each dish with precision and passion.
            </p>
          </div>
          <div className="h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1556910103-6e5a8aa3e7e4?q=80"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        id="menu"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl mb-12 text-center font-light">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {menuItems.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl mb-6">{category.category}</h3>
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="mb-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="text-xl">{item.name}</h4>
                      <span>${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        id="gallery"
        className="py-20 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl mb-12 text-center font-light">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80",
              "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80",
              "https://images.unsplash.com/photo-1621871908319-97a51de5e9bc?q=80"
            ].map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reservations Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        id="reservations"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl mb-12 text-center font-light">Make a Reservation</h2>
          <form onSubmit={handleReservationSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <select className="w-full p-2 border border-gray-300" required>
                <option value="">Select time</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
            >
              Reserve Now
            </button>
          </form>
          {isReservationSuccess && (
            <p className="text-green-600 text-center mt-4">
              Reservation submitted successfully!
            </p>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-6 font-light">TSUKI IZAKAYA</h2>
          <p className="mb-4">123 Restaurant Street, City, Country</p>
          <p className="mb-4">Open Tuesday - Sunday | 6:00 PM - 11:00 PM</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <div className="flex justify-center space-x-6 mb-6">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-gray-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Tsuki Izakaya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
