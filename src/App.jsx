
import React, { useEffect } from 'react';
import { motion, useScroll, useAnimation } from 'framer-motion';

function App() {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 50) {
        controls.start({ backgroundColor: 'rgba(0, 0, 0, 0.9)' });
      } else {
        controls.start({ backgroundColor: 'transparent' });
      }
    };

    scrollY.onChange(handleScroll);
  }, [controls, scrollY]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <motion.nav
        animate={controls}
        className="fixed w-full z-50 transition-all duration-300 px-6 py-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif">Ruchi Indian Kitchen</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#menu" className="hover:text-yellow-400">Menu</a>
            <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ruchi Indian Kitchen
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl italic mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Authentic Indian Flavors, Timeless Traditions
            </motion.p>
            <motion.button 
              className="bg-yellow-600 hover:bg-yellow-700 px-8 py-3 rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve a Table
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 px-6 bg-gray-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Established in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine with a modern twist. Our recipes have been passed down through generations, preserving the authentic flavors while adapting to contemporary tastes.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our expert chefs bring decades of experience in crafting the perfect blend of spices and flavors that make Indian cuisine truly special.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
                alt="Indian spices"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section 
        id="menu"
        className="py-20 px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Butter Chicken",
                description: "Tender chicken in rich tomato-cream sauce",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
              },
              {
                name: "Biryani",
                description: "Aromatic basmati rice with tender meat and spices",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
              },
              {
                name: "Palak Paneer",
                description: "Fresh spinach curry with homemade cheese",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
              }
            ].map((dish, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{dish.name}</h3>
                  <p className="text-gray-400">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-4">Contact Information</h3>
              <p className="mb-2">📍 123 Culinary Street, Foodie City, FC 12345</p>
              <p className="mb-2">📞 (555) 123-4567</p>
              <p className="mb-4">✉️ info@ruchiindian.com</p>
              <div className="space-x-4">
                <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded">
                  Get Directions
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded">
                  Call Now
                </button>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              {/* Placeholder for map */}
              <div className="h-[300px] bg-gray-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Ruchi Indian Kitchen. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
