
import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-serif text-gold-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Ruchi Indian Kitchen
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-orange-400 transition"
                >
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
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1950&q=80" 
            alt="Indian Cuisine" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div 
            className="text-white px-4"
            {...fadeIn}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-4">Experience Authentic Indian Flavors</h2>
            <p className="text-xl mb-8">A culinary journey through traditional Indian cuisine</p>
            <motion.a 
              href="#menu"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h3 className="text-4xl font-serif mb-6">Our Story</h3>
            <p className="text-gray-600 mb-8">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine made from traditional recipes
              passed down through generations. Our commitment to quality ingredients and authentic flavors has made us
              a beloved destination for Indian food enthusiasts.
            </p>
            <motion.img 
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80"
              alt="Our Team"
              className="w-full h-64 object-cover rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif text-center mb-12">Our Menu</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Butter Chicken', price: '$16.99', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80' },
              { name: 'Palak Paneer', price: '$14.99', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80' },
              { name: 'Biryani', price: '$18.99', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80' },
              { name: 'Tandoori Chicken', price: '$17.99', image: 'https://images.unsplash.com/photo-1604908177522-75bf26a16c39?auto=format&fit=crop&w=800&q=80' },
              { name: 'Chole Bhature', price: '$12.99', image: 'https://images.unsplash.com/photo-1589308078053-7c3a8b4b9de6?auto=format&fit=crop&w=800&q=80' },
              { name: 'Gulab Jamun', price: '$6.99', image: 'https://images.unsplash.com/photo-1603118931960-6d929f553cc8?auto=format&fit=crop&w=800&q=80' },
            ].map((dish) => (
              <motion.div 
                key={dish.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{dish.name}</h4>
                  <p className="text-orange-500 font-bold">{dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif text-center mb-12">Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://images.unsplash.com/photo-1598514982446-30b1e42e16e5?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1555992336-03a23c4c1ec0?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1598514982446-30b1e42e16e5?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1572586739292-7f27cda4c59a?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1587163545734-9e3ba1cdedca?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
            ].map((image, index) => (
              <motion.div 
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif text-center mb-12">Testimonials</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                name: 'Aisha Khan',
                feedback: 'The best Indian food I have ever had! The flavors are authentic and the service is top-notch.',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Raj Patel',
                feedback: 'A delightful dining experience with a wonderful ambiance. Highly recommend the Butter Chicken!',
                avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
              },
              {
                name: 'Meera Singh',
                feedback: 'Absolutely loved the Palak Paneer and the Biryani. Will be coming back for sure!',
                avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
              },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 mt-2">"{testimonial.feedback}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-serif text-center mb-12">Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl mb-4">Visit Us</h4>
                <p className="mb-2">123 Culinary Street</p>
                <p className="mb-2">Foodie City, FC 12345</p>
                <p className="mb-2">Phone: (555) 123-4567</p>
                <p>Email: info@ruchiindian.com</p>
                <div className="mt-6 flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12a10 10 0 10-11.5 9.95v-7.04h-2.7v-2.91h2.7V9.41c0-2.69 1.61-4.17 4.03-4.17a16.3 16.3 0 012.43.21v2.81h-1.66c-1.3 0-1.55.62-1.55 1.53v1.99h3.1l-.4 2.91h-2.7v7.04A10 10 0 0022 12z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.965.24 2.415.415a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.175.45.36 1.245.415 2.415.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.965-.415 2.415a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.45.175-1.245.36-2.415.415-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.965-.24-2.415-.415a4.92 4.92 0 01-1.675-1.09 4.92 4.92 0 01-1.09-1.675c-.175-.45-.36-1.245-.415-2.415C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.965.415-2.415a4.92 4.92 0 011.09-1.675 4.92 4.92 0 011.675-1.09c.45-.175 1.245-.36 2.415-.415C8.416 2.212 8.8 2.2 12 2.2m0-2.2C8.741 0 8.333.013 7.053.072 5.78.131 4.643.325 3.7.678 2.755 1.031 2.005 1.53 1.3 2.235c-.705.705-1.204 1.455-1.557 2.4-.353.943-.547 2.08-.606 3.353C0 8.333 0 8.741 0 12c0 3.259.013 3.667.072 4.947.059 1.273.253 2.41.606 3.353.353.945.852 1.695 1.557 2.4.705.705 1.455 1.204 2.4 1.557.943.353 2.08.547 3.353.606C8.333 24 8.741 24 12 24s3.667-.013 4.947-.072c1.273-.059 2.41-.253 3.353-.606.945-.353 1.695-.852 2.4-1.557.705-.705 1.204-1.455 1.557-2.4.353-.943.547-2.08.606-3.353C24 15.667 24 15.259 24 12c0-3.259-.013-3.667-.072-4.947-.059-1.273-.253-2.41-.606-3.353-.353-.945-.852-1.695-1.557-2.4-.945-.705-1.695-1.204-2.4-1.557-.943-.353-2.08-.547-3.353-.606C15.667.013 15.259 0 12 0z"/>
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0024 4.557z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-400"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-400"
                  required
                />
                <textarea 
                  placeholder="Message" 
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700 h-32 resize-none focus:outline-none focus:border-orange-400"
                  required
                ></textarea>
                <motion.button 
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.04h-2.7v-2.91h2.7V9.41c0-2.69 1.61-4.17 4.03-4.17a16.3 16.3 0 012.43.21v2.81h-1.66c-1.3 0-1.55.62-1.55 1.53v1.99h3.1l-.4 2.91h-2.7v7.04A10 10 0 0022 12z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.965.24 2.415.415a4.92 4.92 0 011.675 1.09 4.92 4.92 0 011.09 1.675c.175.45.36 1.245.415 2.415.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.965-.415 2.415a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.45.175-1.245.36-2.415.415-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.965-.24-2.415-.415a4.92 4.92 0 01-1.675-1.09 4.92 4.92 0 01-1.09-1.675c-.175-.45-.36-1.245-.415-2.415C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.965.415-2.415a4.92 4.92 0 011.09-1.675 4.92 4.92 0 011.675-1.09c.45-.175 1.245-.36 2.415-.415C8.416 2.212 8.8 2.2 12 2.2m0-2.2C8.741 0 8.333.013 7.053.072 5.78.131 4.643.325 3.7.678 2.755 1.031 2.005 1.53 1.3 2.235c-.705.705-1.204 1.455-1.557 2.4-.353.943-.547 2.08-.606 3.353C0 8.333 0 8.741 0 12c0 3.259.013 3.667.072 4.947.059 1.273.253 2.41.606 3.353.353.945.852 1.695 1.557 2.4.705.705 1.455 1.204 2.4 1.557.943.353 2.08.547 3.353.606C8.333 24 8.741 24 12 24s3.667-.013 4.947-.072c1.273-.059 2.41-.253 3.353-.606.945-.353 1.695-.852 2.4-1.557.705-.705 1.204-1.455 1.557-2.4.353-.943.547-2.08.606-3.353C24 15.667 24 15.259 24 12c0-3.259-.013-3.667-.072-4.947-.059-1.273-.253-2.41-.606-3.353-.353-.945-.852-1.695-1.557-2.4-.945-.705-1.695-1.204-2.4-1.557-.943-.353-2.08-.547-3.353-.606C15.667.013 15.259 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
