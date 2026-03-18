import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Clock, Award } from 'lucide-react';
import { services } from '../data';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-ocean-600 text-white font-bold rounded-lg hover:bg-ocean-700 transition duration-300"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <p className="text-ocean-200 mb-2">
            <Link to="/services" className="hover:text-white">Services</Link> / {service.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideInDown">{service.name}</h1>
          <p className="text-lg text-ocean-100 animate-slideUp">{service.description}</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Service Image */}
            <div className="bg-gradient-to-br from-beach-100 to-ocean-50 rounded-lg h-80 flex items-center justify-center text-beach-600 font-semibold text-center text-xl animate-slideInDown">
              Service Image: {service.name}
            </div>

            {/* Service Info */}
            <div className="animate-slideUp">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.name}</h2>
              <p className="text-lg text-gray-700 mb-8">{service.description}</p>

              {/* Benefits */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Expert professional consultation and support',
                  'Comprehensive project understanding and analysis',
                  'Regulatory compliance and certification',
                  'Cost-effective and efficient solutions',
                  'Timely delivery and implementation',
                  'Ongoing maintenance and support',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-700">
                    <Check size={20} className="text-ocean-600 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-amber-200 text-gray-900 font-bold rounded-lg hover:bg-ocean-700 transition duration-300 group"
                >
                  Request Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-ocean-600 text-ocean-600 font-bold rounded-lg hover:bg-ocean-50 transition duration-300"
                >
                  Get Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Service?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={32} />,
                title: 'Expert Team',
                description: 'Experienced professionals with 25+ years in the industry',
              },
              {
                icon: <Users size={32} />,
                title: 'Client Support',
                description: 'Dedicated support throughout project lifecycle',
              },
              {
                icon: <Clock size={32} />,
                title: 'On-Time Delivery',
                description: 'Reliable timelines and committed deadlines',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition duration-300 animate-fadeIn">
                <div className="flex justify-center mb-4 text-ocean-600">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Service Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assessment', desc: 'Understand your requirements and scope' },
              { step: '02', title: 'Planning', desc: 'Develop comprehensive project plan' },
              { step: '03', title: 'Execution', desc: 'Implement with quality oversight' },
              { step: '04', title: 'Delivery', desc: 'Complete handover and support' },
            ].map((item, i) => (
              <div key={i} className="relative animate-slideUp">
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-16 w-12 h-0.5 bg-ocean-300"></div>
                )}
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300 border border-gray-200">
                  <div className="w-12 h-12 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-amber-50">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Services</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedServices.map(svc => (
                <div key={svc.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 animate-fadeIn">
                  <div className="w-full h-40 bg-gradient-to-br from-beach-100 to-ocean-50 flex items-center justify-center text-beach-600 font-semibold text-center">
                    {svc.name}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{svc.description}</p>
                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center text-ocean-600 font-semibold hover:text-ocean-700"
                    >
                      Learn More
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-ocean-500 mb-8 max-w-2xl mx-auto">
            Contact our team today to schedule a consultation and discuss how we can help you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-200 font-bold rounded-lg hover:bg-ocean-500 transition duration-300 group"
          >
            Schedule Consultation
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </section>
    </div>
  );
}
