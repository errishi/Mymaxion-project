import { Link } from 'react-router-dom';

export default function Sitemap() {
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInDown">Sitemap</h1>
          <p className="text-lg text-beach-100 animate-slideUp">
            Navigate through all pages and sections of MyMaxion website.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteStructure.map((section, idx) => (
              <div
                key={idx}
                className="bg-amber-100 rounded-lg p-8 animate-fadeIn"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-ocean-600">
                  {section.section}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.path}
                        className="text-ocean-600 hover:text-ocean-700 hover:underline transition duration-300 text-sm"
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

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Website Structure</h2>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Page</h3>
                <p>Main landing page featuring company overview, featured products, services, and call-to-action sections.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">About Us</h3>
                <p>Company history, mission, vision, core values, team information, and industry recognition.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Products</h3>
                <p>Complete catalog of packaging and industrial equipment with detailed descriptions and specifications.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Services</h3>
                <p>Comprehensive service offerings including environmental services, water treatment solutions, and infrastructure development.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                <p>Contact form, location information, phone numbers, and email addresses for inquiry and support.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Testimonials</h3>
                <p>Client success stories and reviews showcasing our expertise and customer satisfaction.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Jobs</h3>
                <p>Current employment opportunities and career information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Suggestion */}
      <section className="py-16 md:py-24 bg-beach-100">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-700 mb-6">Contact our support team for help navigating our website or finding specific information.</p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-amber-100 text-gray-900 font-bold rounded-lg hover:bg-amber-500 transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
