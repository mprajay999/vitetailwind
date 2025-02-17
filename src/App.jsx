import React from "react";

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <header className="p-6 bg-red-600 text-white text-center text-3xl font-bold">
        Ruchi Indian Kitchen
      </header>
      
      <section className="text-center py-12 px-6">
        <h2 className="text-4xl font-semibold">Authentic Indian Flavors</h2>
        <p className="mt-4 text-lg">Experience the taste of India with our freshly prepared dishes.</p>
      </section>
      
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center">
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-medium">Butter Chicken</h3>
            <p className="text-gray-600">Rich and creamy tomato-based curry.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-medium">Paneer Tikka</h3>
            <p className="text-gray-600">Marinated paneer grilled to perfection.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-medium">Biryani</h3>
            <p className="text-gray-600">Fragrant basmati rice with spices and choice of meat.</p>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-4 text-lg">Visit us at: 123 Spice Street, Your City</p>
        <p className="text-lg">Call us: (123) 456-7890</p>
      </section>
      
      <footer className="p-6 bg-gray-800 text-white text-center">
        &copy; 2025 Ruchi Indian Kitchen. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
