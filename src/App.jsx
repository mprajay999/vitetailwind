
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleReservation = (e) => {
    e.preventDefault();
    alert('Reservation submitted successfully!');
    setReservationData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: ''
    });
  };

  return (
    <div className="font-serif">
      {/* Navigation */}
      <nav className="fixed w-full bg-opacity-90 bg-black text-white z-50 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hyderabadi Nawabi House</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gold">Home</a>
            <a href="#menu" className="hover:text-gold">Menu</a>
            <a href="#about" className="hover:text-gold">About</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="h-screen bg-[url('https://images.unsplash.com/photo-1633945274405-b6c8069047b0')] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              {...fadeIn}
            >
              Experience Royal Hyderabadi Cuisine
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              {...fadeIn}
            >
              Where tradition meets taste in every bite
            </motion.p>
            <motion.button 
              className="bg-gold text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90"
              whileHover={{ scale: 1.05 }}
            >
              Reserve a Table
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section 
        id="menu"
        className="py-20 bg-cream"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Our Royal Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-gold font-bold">₹{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 bg-burgundy text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Our Heritage</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 1992, Hyderabadi Nawabi House has been serving authentic royal cuisine passed down through generations. Our recipes are crafted with carefully selected spices and premium ingredients, maintaining the traditional flavors of Hyderabad.
              </p>
              <p className="text-lg leading-relaxed">
                Each dish tells a story of royal kitchens and ancient cooking techniques, bringing you the true taste of Nawabi cuisine.
              </p>
            </div>
            <motion.img 
              src="https://images.unsplash.com/photo-1625398407796-82650a8c9308"
              alt="Restaurant Interior"
              className="rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20 bg-cream"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Make a Reservation</h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleReservation} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg"
                required
                value={reservationData.name}
                onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg"
                required
                value={reservationData.email}
                onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
              />
              <input
                type="date"
                className="w-full p-3 rounded-lg"
                required
                value={reservationData.date}
                onChange={(e) => setReservationData({...reservationData, date: e.target.value})}
              />
              <input
                type="time"
                className="w-full p-3 rounded-lg"
                required
                value={reservationData.time}
                onChange={(e) => setReservationData({...reservationData, time: e.target.value})}
              />
              <input
                type="number"
                placeholder="Number of Guests"
                className="w-full p-3 rounded-lg"
                required
                value={reservationData.guests}
                onChange={(e) => setReservationData({...reservationData, guests: e.target.value})}
              />
              <motion.button 
                type="submit"
                className="w-full bg-burgundy text-white py-3 rounded-lg hover:bg-opacity-90"
                whileHover={{ scale: 1.02 }}
              >
                Book Now
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Hyderabadi Nawabi House. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gold">Facebook</a>
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Menu Items Data
const menuItems = [
  {
    name: "Hyderabadi Biryani",
    description: "Aromatic basmati rice cooked with tender meat and authentic spices",
    price: "450",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    name: "Haleem",
    description: "Slow-cooked wheat and meat dish with special spices",
    price: "300",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13"
  },
  {
    name: "Kebab Platter",
    description: "Assortment of grilled kebabs served with mint chutney",
    price: "550",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0"
  },
  // Add more menu items as needed
];

export default App;
