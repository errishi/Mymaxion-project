import { useState } from 'react';
import { Mail, Phone, MapPin, Smartphone } from 'lucide-react';
import { companyInfo } from '../data';
import { submitEnquiry } from '../api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData(prev => ({
        ...prev,
        resume: files ? files[0] : null,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await submitEnquiry({ ...formData, source: 'website' });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '', resume: null });
    } catch (requestError) {
      setError(requestError.response?.data?.error || requestError.message || 'Unable to send your message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-900 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInDown">Contact Us</h1>
          <p className="text-lg text-gray-50 max-w-3xl animate-slideUp">
            Get in touch with our expert team. We're here to answer your questions and provide solutions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slideInDown">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-700 text-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-ocean-600 hover:text-ocean-700">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-700 text-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">{companyInfo.phone}</p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-700 text-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Mobile Support</h3>
                    <p className="text-gray-700">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-700 text-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Interactive map would load here</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-slideUp">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {error && <div className="mb-6 rounded-lg border border-red-400 bg-red-100 p-4 text-red-700">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:border-transparent"
                    placeholder="+91-XXXXX-XXXXX"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Resume Upload Field */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-900 mb-2">
                    Attach Resume / CV (Optional)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-ocean-100 file:text-ocean-700 hover:file:bg-ocean-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ocean-600"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-3 bg-ocean-700 text-white font-bold rounded-lg hover:bg-ocean-700 transition duration-300"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4">
                * Required fields. We'll respond to your inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. We typically provide custom quotes with detailed timelines during the consultation phase.',
              },
              {
                q: 'Do you provide after-sales support?',
                a: 'Yes, we offer comprehensive after-sales support including maintenance, training, and technical assistance.',
              },
              {
                q: 'What industries do you serve?',
                a: 'We serve food & beverage, pharmaceutical, chemical, energy, healthcare, mining, and many other industrial sectors.',
              },
              {
                q: 'How can I get a quote?',
                a: 'Contact us through this form or call us directly. Our team will schedule a consultation to understand your needs.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300 animate-fadeIn">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}