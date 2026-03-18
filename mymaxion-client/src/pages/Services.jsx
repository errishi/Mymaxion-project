import { ServiceCard } from '../Components/Cards';
import { services } from '../data';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInDown">Our Services</h1>
          <p className="text-lg text-beach-100 max-w-3xl animate-slideUp">
            Comprehensive environmental, water treatment, and construction services designed for sustainable industrial operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Service Categories</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Environmental Services */}
            <div className="animate-slideInDown">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Services</h3>
              <p className="text-gray-700 mb-6">
                We offer comprehensive environmental assessment and clearance services to ensure compliance with regulatory requirements.
              </p>
              <ul className="space-y-3">
                {[
                  'Environmental Impact Assessment (EIA)',
                  'Environmental Clearance Services',
                  'Sustainability Consulting',
                  'Compliance & Regulatory Support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle size={20} className="text-ocean-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Water Treatment Services */}
            <div className="animate-slideUp">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Water Treatment Solutions</h3>
              <p className="text-gray-700 mb-6">
                Custom-designed water treatment plants for various industries and applications.
              </p>
              <ul className="space-y-3">
                {[
                  'Wastewater Treatment Plants',
                  'Mineral Water Treatment',
                  'Industrial Water Recycling',
                  'Desalination Systems',
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle size={20} className="text-ocean-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure Services */}
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure Development</h3>
              <p className="text-gray-700 mb-6">
                Professional construction and installation services for specialized infrastructure projects.
              </p>
              <ul className="space-y-3">
                {[
                  'Swimming Pool Construction',
                  'Industrial Facilities',
                  'System Installation & Commissioning',
                  'Project Management',
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle size={20} className="text-ocean-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Services */}
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support & Maintenance</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive after-sales support and preventive maintenance for all our installations.
              </p>
              <ul className="space-y-3">
                {[
                  'Technical Support & Training',
                  'Scheduled Maintenance Programs',
                  'Equipment Upgrades',
                  '24/7 Emergency Support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle size={20} className="text-ocean-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Service Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial assessment of your requirements and challenges',
              },
              {
                step: '02',
                title: 'Proposal',
                description: 'Detailed project proposal with timeline and budget',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional implementation with quality oversight',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing maintenance and technical support',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-16 w-16 h-0.5 bg-ocean-300"></div>
                )}

                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300 animate-slideUp">
                  <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-50 text-gray-900">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Specific Service?</h2>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            Contact our expert team to discuss your project requirements and find the perfect solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-200 font-bold rounded-lg hover:bg-amber-500 transition duration-300"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
