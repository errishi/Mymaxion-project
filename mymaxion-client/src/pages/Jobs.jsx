import { MapPin, Building2, DollarSign, Clock } from 'lucide-react';

export default function Jobs() {
  const jobListings = [
    {
      id: 1,
      title: 'Senior Water Treatment Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      level: 'Senior',
      salary: '₹12-15 LPA',
      description: 'Experienced engineer to lead water treatment plant design and implementation projects.',
      requirements: [
        '8+ years experience in water treatment systems',
        'BTech/MTech in Civil or Environmental Engineering',
        'Project management experience',
        'Strong technical knowledge',
      ],
    },
    {
      id: 2,
      title: 'Sales Executive - Water Solutions',
      department: 'Sales',
      location: 'Multiple Cities',
      type: 'Full-time',
      level: 'Mid-level',
      salary: '₹6-10 LPA',
      description: 'Dynamic sales professional to expand our customer base in water treatment sector.',
      requirements: [
        '5+ years B2B sales experience',
        'Knowledge of industrial products',
        'Territory management skills',
        'Strong communication abilities',
      ],
    },
    {
      id: 3,
      title: 'Mechanical Design Engineer',
      department: 'Engineering',
      location: 'Pune, India',
      type: 'Full-time',
      level: 'Mid-level',
      salary: '₹8-12 LPA',
      description: 'Design innovative packaging and industrial equipment solutions.',
      requirements: [
        '4+ years mechanical design experience',
        'Proficiency in CAD software (CATIA/SolidWorks)',
        'Knowledge of machinery design',
        'Problem-solving mindset',
      ],
    },
    {
      id: 4,
      title: 'Environmental Consultant',
      department: 'Services',
      location: 'New Delhi, India',
      type: 'Full-time',
      level: 'Senior',
      salary: '₹10-13 LPA',
      description: 'Expert consultant for environmental impact assessments and clearances.',
      requirements: [
        '7+ years environmental consulting experience',
        'EIA expertise',
        'Regulatory knowledge',
        'Client management skills',
      ],
    },
    {
      id: 5,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Chennai, India',
      type: 'Full-time',
      level: 'Senior',
      salary: '₹10-14 LPA',
      description: 'Oversee production and operational efficiency of manufacturing facilities.',
      requirements: [
        '8+ years operations management',
        'Manufacturing background',
        'Lean/Six Sigma certification preferred',
        'Team leadership experience',
      ],
    },
    {
      id: 6,
      title: 'Junior Software Engineer',
      department: 'IT',
      location: 'Bangalore, India',
      type: 'Full-time',
      level: 'Entry-level',
      salary: '₹4-6 LPA',
      description: 'Develop and maintain our digital platforms and solutions.',
      requirements: [
        'Bachelor\'s in Computer Science/IT',
        'Proficiency in web/mobile development',
        'Problem-solving skills',
        'Passion for learning',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean-50 to-beach-100 text-gray-800 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInDown">Join Our Team</h1>
          <p className="text-lg text-beach-100 max-w-3xl animate-slideUp">
            Build your career with MyMaxion. We're looking for talented professionals to join our growing organization.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work With Us?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Career Growth',
                description: 'Opportunities for professional development and advancement',
              },
              {
                title: 'Competitive Compensation',
                description: 'Industry-leading salaries and benefits package',
              },
              {
                title: 'Innovation Culture',
                description: 'Work on cutting-edge technology and solutions',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and supportive environment',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300 animate-fadeIn">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 p-6 md:p-8 animate-slideUp"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Building2 size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-ocean-600 font-semibold">
                        <DollarSign size={16} />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-gray-600 text-sm">
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="md:w-40">
                    <a
                      href="/contact"
                      className="block px-6 py-3 text-gray-900 font-bold rounded-lg active:scale-95 hover:bg-green-500 transition duration-300 text-center whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Application Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Submit Application',
                description: 'Fill out the application form with your resume and details',
              },
              {
                step: '02',
                title: 'Initial Screening',
                description: 'Our HR team reviews your qualifications and experience',
              },
              {
                step: '03',
                title: 'Interviews',
                description: 'Technical and HR interviews to assess your fit',
              },
              {
                step: '04',
                title: 'Offer & Joining',
                description: 'Receive offer letter and complete onboarding process',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300 animate-fadeIn">
                <div className="w-12 h-12 bg-green-300 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-ocean-600 text-gray-900">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            If you didn't find a matching position, send us your resume and let us know what roles interest you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-ocean-700 font-bold rounded-lg hover:bg-gray-200 active:scale-100 transition duration-300"
          >
            Send Resume
          </a>
        </div>
      </section>
    </div>
  );
}
