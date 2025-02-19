import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const sections = [
  { name: "About", ref: "aboutRef" },
  { name: "Menu", ref: "menuRef" },
  { name: "Gallery", ref: "galleryRef" },
  { name: "Reviews", ref: "reviewsRef" },
  { name: "Contact", ref: "contactRef" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const NavLinks = ({ scrollToSection }) => (
  <div className="hidden md:flex gap-6">
    {sections.map(({ name, ref }) => (
      <button
        key={name}
        onClick={() => scrollToSection(ref)}
        className="hover:text-orange-600"
      >
        {name}
      </button>
    ))}
  </div>
);

const MenuItem = ({ image, title, description, price }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-orange-600 font-bold mt-4">${price}</p>
    </div>
  </motion.div>
);

const ReviewCard = ({ review, name }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">⭐⭐⭐⭐⭐</div>
    <p className="mb-4">{review}</p>
    <p className="font-bold">- {name}</p>
  </motion.div>
);

const App = () => {
  const refs = {
    aboutRef: useRef(null),
    menuRef: useRef(null),
    galleryRef: useRef(null),
    reviewsRef: useRef(null),
    contactRef: useRef(null),
  };

  const scrollToSection = (ref) => {
    refs[ref].current?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    {
      image: "https://images.unsplash.com/photo-1550547660-d8d8c9a8e694",
      title: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken.",
      price: "14.99",
    },
    {
      image: "https://images.unsplash.com/photo-1550547661-d8d8c9a8e694",
      title: "Paneer Tikka",
      description: "Grilled cottage cheese marinated in spices.",
      price: "12.99",
    },
    {
      image: "https://images.unsplash.com/photo-1550547662-d8d8c9a8e694",
      title: "Biryani",
      description: "Aromatic basmati rice with saffron and spices.",
      price: "16.99",
    },
  ];

  const reviews = [
    {
      review: "Amazing authentic Indian food! The flavors are incredible.",
      name: "John D.",
    },
    {
      review: "Great service and delicious dishes. Highly recommend!",
      name: "Emily R.",
    },
    {
      review: "Best Indian restaurant in town. Can't wait to visit again!",
      name: "Michael T.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Sticky Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">
            Ruchi Indian Kitchen
          </h1>
          <NavLinks scrollToSection={scrollToSection} />
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" {...fadeIn}>
            Ruchi Indian Kitchen
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8" {...fadeIn}>
            Authentic Indian flavors cooked to perfection
          </motion.p>
          <motion.button
            onClick={() => scrollToSection("menuRef")}
            className="bg-orange-600 px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            {...fadeIn}
          >
            Explore Our Menu
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={refs.aboutRef}
        className="py-20 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Founded in 2010, Ruchi Indian Kitchen brings the authentic flavors
            of India to the heart of the city. Our chefs use traditional cooking
            methods and fresh ingredients to craft delicious, aromatic dishes.
          </p>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        ref={refs.menuRef}
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        ref={refs.reviewsRef}
        className="py-20 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default App;
