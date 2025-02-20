
import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="relative scroll-smooth"> {/* Added scroll-smooth for smooth scrolling */}
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-orange-600"
            >
              Ruchi Indian Kitchen
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Gallery', 'Reservation', 'Contact'].map((item) => ( {/* Added 'Gallery' and 'Reservation' to navbar links */}
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-orange-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80"
            alt="Indian Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Experience Authentic Indian Cuisine</h1>
            <p className="text-xl mb-8">Traditional flavors with a modern twist</p>
            <a href="#reservation" className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
              Reserve a Table
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine to food enthusiasts in the heart of the city. Our master chefs bring decades of experience in crafting traditional dishes with premium ingredients and time-honored recipes.
              </p>
              <p className="text-gray-600">
                Every dish tells a story of our rich culinary heritage, prepared with passion and served with love.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
                alt="Restaurant Interior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Starters', 'Main Course', 'Desserts'].map((category) => (
              <motion.div
                key={category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }} {/* Reduced duration for snappier animation */}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-${category === 'Starters' ? '1601050690597-df0568f70950' :
                    category === 'Main Course' ? '1585937421612-70a008356fbe' :
                      '1551334787-21e551cc3f73'}?auto=format&fit=crop&q=80`}
                  alt={category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="text-gray-600">
                        Signature Dish {item} - $14.99
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white"> {/* Added Gallery Section */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder images - replace with actual gallery images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: item * 0.1, duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={`https://source.unsplash.com/random/400x300?indianfood&${item}`}
                  alt={`Gallery Image ${item}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-20 bg-gray-50"> {/* Added Reservation Section */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Reservations</h2>
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            {/* Placeholder Reservation Form - Replace with actual form */}
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Book Your Table</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" placeholder="Your Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                <input type="date" id="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                <input type="time" id="time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Reserve Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }} {/* Adjusted duration for smoother animation */}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
              <div>
                <p className="text-gray-600">123 Restaurant Street</p>
                <p className="text-gray-600">City, State 12345</p>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
                <p className="text-gray-600">Email: info@ruchiindian.com</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-gray-800">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 11:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Sat-Sun: 12:00 PM - 11:00 PM</p>
              </div>
            </motion.div>
            <div className="bg-gray-200 rounded-lg h-[400px]" id="map">
              {/* Map Integration would go here */}
              <p className="p-4 text-center">Map Placeholder</p> {/* Added placeholder text for map */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Ruchi Indian Kitchen</h3>
              <p className="text-gray-400">Authentic Indian Cuisine</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#menu" className="text-gray-400 hover:text-white block">Menu</a>
                <a href="#reservation" className="text-gray-400 hover:text-white block">Reservations</a>
                <a href="#contact" className="text-gray-400 hover:text-white block">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white">
                    {social}
                    {/* Add social media icons or links here in a real project */}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
