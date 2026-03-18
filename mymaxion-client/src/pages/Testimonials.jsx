import { testimonials } from '../data';
import TestimonialSlider from '../Components/TestimonialSlider';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInDown">Client Testimonials</h1>
          <p className="text-lg text-gray-50 max-w-3xl animate-slideUp">
            Hear from our satisfied clients about their experiences working with MyMaxion.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Testimonials</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Client Feedback</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-lg shadow-md border-l-4 border-ocean-600 p-8 hover:shadow-lg transition duration-300 animate-fadeIn"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-ocean-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-amber-50 text-gray-900">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '500+', label: 'Projects Delivered' },
              { number: '15+', label: 'Countries Served' },
              { number: '200+', label: 'Active Clients' },
            ].map((stat, index) => (
              <div key={index} className="animate-slideUp">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-900">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Industry Recognition</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO 9001:2015 Certified',
                description: 'Quality Management System certification for consistent excellence',
              },
              {
                title: 'Environmental Excellence',
                description: 'Recognized for sustainable and eco-friendly practices',
              },
              {
                title: 'Industry Awards',
                description: 'Multiple awards for innovation and customer service excellence',
              },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition duration-300 animate-fadeIn"
              >
                <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} className="text-ocean-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-50 text-gray-900">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            Experience the MyMaxion difference. Let us help your business achieve its goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-50 text-gray-900 font-bold rounded-lg hover:bg-amber-200 transition duration-300"
          >
            Start Your Project Today
          </a>
        </div>
      </section>
    </div>
  );
}
