import { Link } from 'react-router-dom';
import { getSitemap } from '../api';
import useApi from '../hooks/useApi';

export default function Sitemap() {
  const { loading, error } = useApi(getSitemap);

  const siteStructure = [
    {
      section: 'Main Pages',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact Us', path: '/contact' },
      ],
    },
    {
      section: 'Products',
      links: [
        { label: 'All Products', path: '/products' },
        { label: 'Labelling Machine', path: '/products/labelling-machine' },
        { label: 'Stretch Wrapping Machine', path: '/products/stretch-wrapping-machine' },
        { label: 'Water Bottle Packaging Machine', path: '/products/water-bottle-packaging-machine' },
        { label: 'Filling Machine', path: '/products/linear-rotary-filling-machine' },
        { label: 'Online Blowing Machine', path: '/products/online-blowing-machine' },
        { label: 'Mild Steel Vessel', path: '/products/mild-steel-vessel' },
      ],
    },
    {
      section: 'Services',
      links: [
        { label: 'All Services', path: '/services' },
        { label: 'Environmental Services', path: '/services' },
        { label: 'Water Treatment Plants', path: '/services' },
        { label: 'Wastewater Treatment', path: '/services' },
        { label: 'Mineral Water Treatment', path: '/services' },
        { label: 'Swimming Pool Construction', path: '/services' },
      ],
    },
    {
      section: 'Additional',
      links: [
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'Current Jobs', path: '/jobs' },
        { label: 'Sitemap', path: '/sitemap' },
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-900 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-slideInDown">
            Sitemap
          </h1>
          <p className="text-lg md:text-xl text-beach-100 animate-slideUp">
            Explore all pages and sections of the MyMaxion website.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading && <p className="text-gray-600">Loading sitemap...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && !error && siteStructure.map((section, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition duration-300 animate-fadeIn"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-ocean-600">
                  {section.section}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.path}
                        className="text-ocean-600 hover:text-ocean-700 hover:underline transition duration-300 text-sm font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Structure */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Website Structure
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {[
                { title: 'Home Page', desc: 'Main landing page featuring company overview, featured products, services, and call-to-action sections.' },
                { title: 'About Us', desc: 'Company history, mission, vision, core values, team information, and industry recognition.' },
                { title: 'Products', desc: 'Complete catalog of packaging and industrial equipment with detailed descriptions and specifications.' },
                { title: 'Services', desc: 'Comprehensive service offerings including environmental services, water treatment solutions, and infrastructure development.' },
                { title: 'Contact Us', desc: 'Contact form, location information, phone numbers, and email addresses for inquiry and support.' },
                { title: 'Testimonials', desc: 'Client success stories and reviews showcasing our expertise and customer satisfaction.' },
                { title: 'Jobs', desc: 'Current employment opportunities and career information.' },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24 bg-gray-300">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-700 mb-6">
            Contact our support team for help navigating our website or finding specific information.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary-ocean-500 text-white font-semibold rounded-lg hover:bg-primary-ocean-800 transition duration-300"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
