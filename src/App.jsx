import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/281/281781.png" 
              alt="Logo" 
              className="h-8 w-8 mr-2"
            />
            <span className="text-2xl font-bold text-amber-600">Raaga Indian Grand</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-amber-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-amber-600">About</a>
            <a href="#menu" className="text-gray-600 hover:text-amber-600">Menu</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Authentic Indian Cuisine
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the rich flavors of India in the heart of the city
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
              Book a Table
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Indian Food" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Tradition Since 1998</h3>
              <p className="text-gray-600 mb-6">
                Raaga Indian Grand has been serving authentic Indian flavors for over two decades. 
                Our chefs combine traditional recipes with modern culinary techniques to create 
                unforgettable dining experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-600 mb-2">Award Winning</h4>
                  <p className="text-sm text-gray-600">Best Indian Restaurant 2023</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-600 mb-2">Premium Ingredients</h4>
                  <p className="text-sm text-gray-600">Locally sourced & organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Specialties</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Butter Chicken',
                price: '$24',
                image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                description: 'Tender chicken in creamy tomato sauce'
              },
              {
                name: 'Biryani',
                price: '$22',
                image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                description: 'Fragrant basmati rice with spices'
              },
              {
                name: 'Tandoori Platter',
                price: '$28',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                description: 'Mixed grill from our clay oven'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover"/>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-amber-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Us</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  123 Grand Avenue, New York
                </p>
                <p className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  (212) 555-1234
                </p>
                <p className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@raagagrand.com
                </p>
              </div>
              <div className="mt-8 flex space-x-4">
                {['facebook', 'twitter', 'instagram'].map((social, index) => (
                  <a key={index} href="#" className="text-amber-600 hover:text-amber-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1623930407575!5m2!1sen!2sin" 
                className="w-full h-96 rounded-lg" 
                allowFullScreen 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2023 Raaga Indian Grand. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Crafted with ❤️ by Food Lovers</p>
        </div>
      </footer>
    </div>
  );
}
