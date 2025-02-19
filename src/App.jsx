
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const newsItems = [
    { title: "USF Researchers Make Breakthrough in Clean Energy", date: "March 15, 2024" },
    { title: "Bulls Football Team Advances to National Championships", date: "March 12, 2024" },
    { title: "New Medical Research Center Opening This Fall", date: "March 10, 2024" }
  ];

  const programs = [
    { name: "Computer Science", description: "Leading-edge computing education" },
    { name: "Business Administration", description: "World-class business programs" },
    { name: "Medical Sciences", description: "Innovative healthcare education" },
    { name: "Environmental Studies", description: "Sustainable future research" }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-[#006747] shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold text-white">University of South Florida</h1>
            
            <nav className="hidden md:flex space-x-6 text-white">
              <a href="#" className="hover:text-[#CFC493]">Academics</a>
              <a href="#" className="hover:text-[#CFC493]">Admissions</a>
              <a href="#" className="hover:text-[#CFC493]">Campus Life</a>
              <a href="#" className="hover:text-[#CFC493]">Research</a>
              <a href="#" className="hover:text-[#CFC493]">Athletics</a>
              <a href="#" className="hover:text-[#CFC493]">About</a>
            </nav>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#006747] md:hidden">
          <div className="flex flex-col items-center pt-20 space-y-4 text-white">
            <a href="#" className="text-xl">Academics</a>
            <a href="#" className="text-xl">Admissions</a>
            <a href="#" className="text-xl">Campus Life</a>
            <a href="#" className="text-xl">Research</a>
            <a href="#" className="text-xl">Athletics</a>
            <a href="#" className="text-xl">About</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://www.usf.edu/images/about-usf/points-of-pride/campus-beauty.jpg"
            alt="USF Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">Welcome to the University of South Florida</h1>
            <p className="text-xl mb-8">Empowering students to reach their full potential through excellence in education, research, and innovation.</p>
            <div className="space-x-4">
              <button className="bg-[#006747] hover:bg-[#005238] text-white px-8 py-3 rounded-full">Apply Now</button>
              <button className="border-2 border-white hover:bg-white hover:text-[#006747] text-white px-8 py-3 rounded-full">Schedule a Tour</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                <p>{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>
          <div className="relative">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              {newsItems.map((item, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.date}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-6 space-x-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-[#006747]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#006747] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>4202 E Fowler Ave</p>
              <p>Tampa, FL 33620</p>
              <p>Phone: (813) 974-2011</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#CFC493]">Directory</a></li>
                <li><a href="#" className="hover:text-[#CFC493]">Libraries</a></li>
                <li><a href="#" className="hover:text-[#CFC493]">Maps</a></li>
                <li><a href="#" className="hover:text-[#CFC493]">Parking</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#CFC493]">Canvas</a></li>
                <li><a href="#" className="hover:text-[#CFC493]">OASIS</a></li>
                <li><a href="#" className="hover:text-[#CFC493]">IT Help Desk</a></li>
                <li><a href="#" className="hover:text-[#CFC493]">Email</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#CFC493]">Facebook</a>
                <a href="#" className="hover:text-[#CFC493]">Twitter</a>
                <a href="#" className="hover:text-[#CFC493]">Instagram</a>
                <a href="#" className="hover:text-[#CFC493]">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#CFC493] text-center">
            <p>&copy; 2024 University of South Florida. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
