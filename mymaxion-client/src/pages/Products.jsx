import { useState } from 'react';
import { ProductCard } from '../Components/Cards';
import { products } from '../data';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInDown">Our Products</h1>
          <p className="text-lg text-gray-50 max-w-3xl animate-slideUp">
            Explore our comprehensive range of innovative products designed to meet industry-specific needs.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 md:py-16 bg-amber-50 to to-beach-50 border-b">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-ocean-600 text-black'
                    : 'bg-amber-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-8">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Products?</h2>
              <ul className="space-y-4">
                {[
                  'Engineered for reliability and durability',
                  'Advanced technology and innovation',
                  'Customizable solutions for unique needs',
                  'Comprehensive technical support',
                  'Competitive pricing and ROI',
                  'Industry certifications and compliance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-ocean-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ocean-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-700 mb-6">
                Every industry has unique requirements. Our team can develop custom product solutions tailored to your specific operational needs and challenges.
              </p>
              <p className="text-gray-700 mb-6">
                Contact us today to discuss your requirements and explore how we can provide the perfect solution for your business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-ocean-600 text-gray-900 font-bold rounded-lg hover:bg-ocean-700 transition duration-300"
              >
                Get a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
