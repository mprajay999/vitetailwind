
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-orange-600">Ruchi Indian Kitchen</h1>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'menu', 'testimonials', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize hover:text-orange-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80")'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-center"
            {...fadeInUp}
          >
            Ruchi Indian Kitchen
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Authentic Flavors, Timeless Traditions
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine made from traditional family recipes passed down through generations. Our commitment to using premium ingredients and maintaining authentic flavors has made us a beloved destination for Indian food enthusiasts.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        id="menu"
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Butter Chicken",
                description: "Tender chicken in rich tomato gravy",
                price: "$16.99",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80"
              },
              {
                name: "Biryani",
                description: "Aromatic rice with spices and meat",
                price: "$18.99",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80"
              },
              {
                name: "Palak Paneer",
                description: "Cottage cheese in spinach gravy",
                price: "$14.99",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80"
              }
            ].map((dish, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <p className="text-orange-600 font-bold">{dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "The best Indian food I've had outside of India. Authentic flavors and great service!",
                author: "Sarah Johnson"
              },
              {
                text: "Amazing ambiance and delicious food. The Butter Chicken is to die for!",
                author: "Michael Chen"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <p className="font-bold">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Location</h3>
                <p className="text-gray-600 mb-4">123 Culinary Street<br/>Foodie City, FC 12345</p>
                <h3 className="font-bold text-xl mb-4">Hours</h3>
                <p className="text-gray-600 mb-4">
                  Monday - Sunday<br/>
                  11:00 AM - 10:00 PM
                </p>
                <h3 className="font-bold text-xl mb-4">Contact</h3>
                <p className="text-gray-600">
                  Phone: (555) 123-4567<br/>
                  Email: info@ruchiindian.com
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full p-2 border rounded h-32"
                  ></textarea>
                  <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-orange-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
