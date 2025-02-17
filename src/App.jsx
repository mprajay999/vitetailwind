import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600">RUCHI</span>
              <span className="ml-1 text-2xl font-light text-gray-800">Indian Kitchen</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-700 hover:text-red-600">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-red-600">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-48 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Authentic Indian Cuisine
          </h1>
          <p className="text-xl text-white mb-8">Experience the flavors of India in the heart of the city</p>
          <a href="#menu" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300">
            View Menu
          </a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Indian cuisine" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-gray-600 mb-4">
                Since 2005, Ruchi Indian Kitchen has been serving authentic Indian flavors made with traditional recipes 
                and the freshest ingredients. Our chefs bring decades of experience from different regions of India, 
                offering a diverse menu that caters to all palates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Popular Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: 'Butter Chicken', price: '$18.99', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398'},
              {name: 'Lamb Biryani', price: '$21.99', img: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833'},
              {name: 'Paneer Tikka', price: '$16.99', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84'},
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={`${item.img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-red-600 font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Gallery</h2>
          <div className="columns-1 md:columns-3 gap-4">
            {[1,2,3,4,5,6].map((item) => (
              <img 
                key={item}
                src={`https://source.unsplash.com/random/800x600/?indian-food,restaurant,spices,curry,${item}`}
                alt="Gallery"
                className="w-full mb-4 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Us</h2>
            <p className="text-gray-600">123 Spice Street, Culinary City, CC 12345</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Open Daily: 11:00 AM - 10:00 PM</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <iframe 
              title="Location"
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119163245!2d-0.3817840693076125!3d51.52873519756609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1629990000000!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2023 Ruchi Indian Kitchen. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-red-500">Facebook</a>
            <a href="#" className="hover:text-red-500">Instagram</a>
            <a href="#" className="hover:text-red-500">TripAdvisor</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
