import { CheckCircle, Award, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '2000', title: 'Company Founded', description: 'Started with vision to revolutionize water treatment industry' },
    { year: '2005', title: 'First Water Plant', description: 'Commissioned first industrial water treatment facility' },
    { year: '2010', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 quality management certification' },
    { year: '2015', title: 'Global Expansion', description: 'Extended operations to 15+ countries across Asia and Europe' },
    { year: '2020', title: 'Packaging Division', description: 'Launched comprehensive packaging machinery division' },
    { year: '2025', title: 'Industry Leader', description: 'Recognized as leading provider in water treatment sector' },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: 'Customer Focus',
      description: 'We prioritize customer satisfaction and long-term relationships',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Continuous R&D to deliver cutting-edge solutions',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'Committed to highest standards in quality and service',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Integrity',
      description: 'Transparent, honest, and ethical business practices',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-500 via-beach-500 to-beach-300 text-gray-800 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInDown">About MyMaxion</h1>
          <p className="text-lg text-beach-100 max-w-3xl animate-slideUp">
            Leading the industry with innovative water treatment and packaging solutions for over 25 years.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="animate-slideInDown">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                To deliver innovative, sustainable, and cost-effective water treatment and packaging solutions that empower industries to operate efficiently while protecting our environment. We are committed to excellence, quality, and customer satisfaction in every project we undertake.
              </p>
            </div>

            {/* Vision */}
            <div className="animate-slideUp">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                To be the globally recognized leader in providing comprehensive water treatment and industrial solutions, driving technological innovation, sustainability, and positive environmental impact. We envision a world where clean water and efficient manufacturing processes are accessible to all industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our decision-making and define our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300 animate-fadeIn">
                <div className="flex justify-center mb-4 text-ocean-600">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped MyMaxion into the industry leader we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ocean-500 to-beach-500"></div>

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-slideUp`}
                >
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className={`bg-gray-50 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="text-ocean-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 bg-ocean-600 rounded-full border-4 border-white mt-2"></div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dedicated Teams</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over 200+ professionals working across engineering, operations, and customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                division: 'Engineering & Design',
                description: 'Expert engineers developing innovative water treatment solutions',
                count: '50+',
              },
              {
                division: 'Manufacturing & Operations',
                description: 'Skilled technicians ensuring quality production and delivery',
                count: '80+',
              },
              {
                division: 'Sales & Customer Support',
                description: 'Dedicated professionals supporting our global client base',
                count: '70+',
              },
            ].map((team, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300 animate-fadeIn"
              >
                <div className="text-4xl font-bold text-ocean-600 mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{team.division}</h3>
                <p className="text-gray-600">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-amber-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '15+', label: 'Countries Served' },
              { number: '50+', label: 'Products & Services' },
              { number: '98%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="animate-slideUp">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-black">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
