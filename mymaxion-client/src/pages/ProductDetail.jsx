import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { products } from '../data';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-primary-ocean-200 text-black font-bold rounded-lg hover:bg-primary-ocean-200 transition duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <p className="text-primary-200 mb-2">
            <Link to="/products" className="hover:text-white">Products</Link> / {product.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideInDown">{product.name}</h1>
          <p className="text-lg text-primary-100 animate-slideUp">{product.description}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-beach-100 to-ocean-50 rounded-lg h-80 flex items-center justify-center text-beach-600 font-semibold text-center text-xl animate-slideInDown">
              Product Image: {product.name}
            </div>

            {/* Product Info */}
            <div className="animate-slideUp">
              <span className="text-sm font-semibold text-ocean-700 uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">{product.name}</h2>
              <p className="text-lg text-gray-700 mb-8">{product.description}</p>

              {/* Features */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Advanced engineering and design',
                  'High-quality materials and construction',
                  'Efficient and reliable operation',
                  'Easy maintenance and support',
                  'Cost-effective solution',
                  'Customizable configurations',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-700">
                    <Check size={20} className="text-ocean-600 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-ocean-600 text-gray-900 font-bold rounded-lg hover:bg-ocean-700 transition duration-300 group"
                >
                  Get Quote
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-ocean-500 text-ocean-500 font-bold rounded-lg hover:bg-amber-50 transition duration-300"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Specifications & Details</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Specifications */}
            <div className="bg-white rounded-lg p-8 shadow-md animate-slideInDown">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {[
                  { label: 'Category', value: product.category },
                  { label: 'Capacity', value: 'On Request' },
                  { label: 'Dimensions', value: 'Customizable' },
                  { label: 'Power Requirement', value: 'On Request' },
                  { label: 'Warranty', value: '2 Years' },
                  { label: 'Delivery Time', value: '6-8 Weeks' },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg p-8 shadow-md animate-slideUp">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Product?</h3>
              <ul className="space-y-4">
                {[
                  'Engineered for maximum efficiency and reliability',
                  'Meets industry standards and certifications',
                  'Proven performance in various applications',
                  'Expert technical support and training',
                  'Flexible payment and delivery options',
                  'Comprehensive warranty and after-sales service',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check size={20} className="text-ocean-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-amber-50">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Products</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map(prod => (
                <div key={prod.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 animate-fadeIn">
                  <div className="w-full h-40 bg-gradient-to-br from-beach-100 to-ocean-50 flex items-center justify-center text-beach-600 font-semibold text-center">
                    {prod.name}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{prod.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{prod.description}</p>
                    <Link
                      to={`/products/${prod.slug}`}
                      className="inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-50 text-gray-900">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in This Product?</h2>
          <p className="text-lg text-ocean-700 mb-8 max-w-2xl mx-auto">
            Contact our sales team to discuss specifications, pricing, and delivery for your requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-200 text-ocean-600 font-bold rounded-lg hover:bg-ocean-500 transition duration-300 group"
          >
            Get in Touch
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </section>
    </div>
  );
}
