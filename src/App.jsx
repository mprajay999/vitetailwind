import React, { useState } from 'react';
import { Standard } from '@typebot.io/react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Chatbot Integration */}
      <div className="fixed bottom-6 right-6 z-50">
        <Standard
          typebot="ruchi-indian-kitchen"
          style={{ width: '400px', height: '500px', borderRadius: '12px' }}
          theme={{
            chatWindow: {
              backgroundColor: '#ffffff',
              button: { backgroundColor: '#d97706', customIconSrc: '🇮🇳' }
            }
          }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className="bg-white border-b border-gray-100 fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-amber-600">रुचि</span>
              <span className="text-xl font-light text-gray-700 tracking-wide">INDIAN KITCHEN</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-600 hover:text-amber-600 transition-colors">About</a>
              <a href="#gallery" className="text-gray-600 hover:text-amber-600 transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors">Contact</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all">
                Reservations
              </button>
            </div>

            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white">
          <div className="p-6">
            <button
              className="absolute top-4 right-4 p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mt-12 space-y-8">
              <a href="#menu" className="block text-xl text-gray-900">Menu</a>
              <a href="#about" className="block text-xl text-gray-900">About</a>
              <a href="#gallery" className="block text-xl text-gray-900">Gallery</a>
              <a href="#contact" className="block text-xl text-gray-900">Contact</a>
              <button className="w-full bg-amber-600 text-white px-6 py-3 rounded-full">
                Reservations
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Video Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-spices-and-herbs-seasoning-a-chicken-in-a-kitchen-7529.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight"
          >
            Modern Indian <span className="font-medium">Gastronomy</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#menu" 
              className="inline-block bg-amber-600 text-white px-12 py-4 rounded-full hover:bg-amber-700 transition-all text-lg"
            >
              Explore Our Tasting Menu
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Menu Section */}
      <section id="menu" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Culinary Journey</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="px-6 py-2 rounded-full bg-amber-600 text-white">All</button>
              <button className="px-6 py-2 rounded-full border border-amber-600 text-amber-600">Vegetarian</button>
              <button className="px-6 py-2 rounded-full border border-amber-600 text-amber-600">Gluten Free</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuItems.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-6">
                    <h3 className="text-xl font-medium text-white">{item.name}</h3>
                    <p className="text-amber-300">{item.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <button className="text-amber-600 hover:text-amber-700 flex items-center">
                      <span>Add to Order</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-gray-800 mb-6">Reservations</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full p-3 border rounded-lg" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input type="date" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Time</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Party Size</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>2 people</option>
                      <option>4 people</option>
                      <option>6 people</option>
                      <option>8+ people</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full bg-amber-600 text-white py-4 rounded-full hover:bg-amber-700 transition-all">
                  Book Table
                </button>
              </form>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl space-y-8">
              <div>
                <h3 className="text-2xl font-light text-gray-800 mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">45 Spice Lane</p>
                      <p className="text-gray-600">Culinary District, CC 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">(415) 555-0192</p>
                      <p className="text-gray-600">reservations@ruchi.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  title="Location"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.693257987843!2d-122.4194155846823!3d37.75761797975993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3d13f5d7c1%3A0x66664016b28983e6!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1629990000000!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold text-amber-600">रुचि</span>
                <span className="text-sm text-gray-400">INDIAN KITCHEN</span>
              </div>
              <p className="text-gray-400 text-sm">Experience modern Indian cuisine at its finest.</p>
            </div>
            
            <div>
              <h3 className="text-amber-500 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#menu" className="text-gray-400 hover:text-amber-500">Menu</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-amber-500">About</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-amber-500">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-500">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-amber-500 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-amber-500">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-500">Accessibility</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-amber-500 mb-4">Newsletter</h3>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
                />
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2023 Ruchi Indian Kitchen. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <img src="https://www.vectorlogo.zone/logos/michelin/michelin-card.png" className="h-12" alt="Michelin" />
              <img src="https://www.vectorlogo.zone/logos/open-table/open-table-card.png" className="h-12" alt="OpenTable" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const menuItems = [
  {
    name: 'Tandoori Octopus',
    price: '$32',
    description: 'Grilled Mediterranean octopus with kasundi mustard, pickled vegetables',
    category: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'
  },
  {
    name: 'Lamb Chop Masala',
    price: '$42',
    description: 'New Zealand lamb chops in rich makhani gravy, saffron rice',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833'
  },
  {
    name: 'Wild Mushroom Biryani',
    price: '$28',
    description: 'Foraged mushrooms, aged basmati, truffle oil, edible flowers',
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84'
  }
];
