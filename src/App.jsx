
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-green-800 text-white z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">University of South Florida</h1>
          <div className="hidden md:flex space-x-6">
            {['about', 'academics', 'student-life', 'admissions', 'research', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-yellow-400 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('https://www.usf.edu/news/2022/images/about-usf-home-page.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col justify-center items-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Shaping Future Leaders
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mb-8"
            >
              Welcome to the University of South Florida
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About USF</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed">
                The University of South Florida is a premier research university dedicated to empowering students to reach their highest potential. Founded in 1956, USF has grown to become one of the largest public universities in the nation, serving more than 50,000 students across three campuses.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-800">50,000+</h3>
                  <p>Students</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-800">#1</h3>
                  <p>In Florida</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-800">200+</h3>
                  <p>Programs</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://www.usf.edu/news/2019/images/usf-tampa-aerial-2019-1.jpg"
                alt="USF Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* More sections following similar pattern... */}
      {/* Academic Programs Section */}
      <section id="academics" className="py-20 bg-gray-50">
        {/* Similar structure with academic content */}
      </section>

      {/* Student Life Section */}
      <section id="student-life" className="py-20 bg-white">
        {/* Similar structure with student life content */}
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-gray-50">
        {/* Similar structure with admissions content */}
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        {/* Similar structure with research content */}
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>4202 E Fowler Ave</p>
              <p>Tampa, FL 33620</p>
              <p>Phone: (813) 974-2011</p>
              <p>Email: admissions@usf.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400">Virtual Tour</a></li>
                <li><a href="#" className="hover:text-yellow-400">Campus Map</a></li>
                <li><a href="#" className="hover:text-yellow-400">Directory</a></li>
                <li><a href="#" className="hover:text-yellow-400">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="hover:text-yellow-400">Twitter</a>
                <a href="#" className="hover:text-yellow-400">Facebook</a>
                <a href="#" className="hover:text-yellow-400">Instagram</a>
                <a href="#" className="hover:text-yellow-400">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>&copy; 2024 University of South Florida. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
