import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Constants
const NAV_LINKS = [
  { path: '/', text: 'Home' },
  { path: '/menu', text: 'Menu' },
  { path: '/about', text: 'About' },
  { path: '/gallery', text: 'Gallery' },
  { path: '/contact', text: 'Contact' },
  { path: '/blog', text: 'Blog' },
];

// Reusable Components
const Button = ({ children, variant = 'primary', ...props }) => (
  // ... same button component as before ...
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-light text-gray-800 mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

// Pages
const HomePage = () => (
  <>
    <HeroSection />
    <FeaturedMenu />
    <AboutPreview />
    <Testimonials />
  </>
);

const MenuPage = () => (
  <div className="py-24">
    <SectionHeader 
      title="Our Culinary Offerings" 
      subtitle="Experience the diversity of Indian cuisine through our carefully crafted menu"
    />
    <MenuCategories />
    <ChefsSpecial />
    <WinePairing />
  </div>
);

const AboutPage = () => (
  <div className="py-24">
    <SectionHeader title="Our Story" />
    <HistoryTimeline />
    <TeamSection />
    <AwardsRecognition />
  </div>
);

// New Components
const FeaturedMenu = () => (
  <section className="py-24 bg-amber-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="Chef's Specialties"
        subtitle="Weekly rotating selections based on seasonal availability"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {/* Menu items with chef recommendations */}
      </div>
    </div>
  </section>
);

const HistoryTimeline = () => (
  <div className="max-w-7xl mx-auto px-6">
    <div className="relative">
      <div className="absolute left-1/2 w-1 bg-amber-100 h-full"></div>
      {[
        { year: '1995', title: 'Family Recipes Foundation' },
        { year: '2008', title: 'First Restaurant Opening' },
        { year: '2015', title: 'Michelin Star Recognition' },
        { year: '2023', title: 'Modern Reinvention' },
      ].map((item, index) => (
        <div key={index} className="mb-12 flex justify-between items-center w-full">
          <div className={`w-5/12 ${index % 2 === 0 ? '' : 'invisible'}`}></div>
          <div className="w-5 h-5 bg-amber-600 rounded-full z-10"></div>
          <div className="w-5/12 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-medium text-amber-600">{item.year}</h3>
            <p className="text-gray-700">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TeamSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Meet Our Team" />
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { name: 'Arjun Patel', role: 'Executive Chef', img: 'chef1.jpg' },
          { name: 'Priya Sharma', role: 'Sous Chef', img: 'chef2.jpg' },
          { name: 'Rahul Verma', role: 'Pastry Chef', img: 'chef3.jpg' },
          { name: 'Anika Singh', role: 'Mixologist', img: 'chef4.jpg' },
        ].map((member, index) => (
          <div key={index} className="text-center">
            <img 
              src={member.img} 
              alt={member.name}
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogPage = () => (
  <div className="py-24">
    <SectionHeader 
      title="Culinary Insights" 
      subtitle="Discover the art behind Indian cuisine"
    />
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      {[
        { 
          title: 'Modern Twist on Classic Spices', 
          excerpt: 'Exploring contemporary uses of traditional Indian spices...',
          date: 'March 15, 2023'
        },
        // More blog posts
      ].map((post, index) => (
        <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img src="blog-image.jpg" alt="Blog post" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-6">
            <time className="text-sm text-gray-500">{post.date}</time>
            <h3 className="text-xl font-medium text-gray-800 mt-2 mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
            <Button variant="text" className="mt-4">
              Read More →
            </Button>
          </div>
        </article>
      ))}
    </div>
  </div>
);

// Enhanced Navigation
const Navigation = () => (
  <nav className="bg-white border-b border-gray-100 fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-amber-600">रुचि</span>
          <span className="text-xl font-light text-gray-700 tracking-wide">INDIAN KITCHEN</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

// Main App Component
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
