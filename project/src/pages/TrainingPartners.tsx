import React from 'react';
import { Building, Users, Award, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

const TrainingPartners: React.FC = () => {
  const partners = [
    {
      name: 'Tata Consultancy Services (TCS)',
      category: 'IT Services',
      logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Leading global IT services and consulting company providing training in software development and digital technologies.',
      programs: ['Software Development', 'Digital Technologies', 'Cloud Computing', 'Data Analytics'],
      placements: '150+ students placed annually',
      rating: 4.8
    },
    {
      name: 'Infosys Limited',
      category: 'Technology',
      logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Global leader in next-generation digital services and consulting, offering comprehensive training programs.',
      programs: ['Java Development', 'Python Programming', 'AI/ML', 'DevOps'],
      placements: '120+ students placed annually',
      rating: 4.7
    },
    {
      name: 'Wipro Technologies',
      category: 'IT Services',
      logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Global information technology, consulting and business process services company.',
      programs: ['Software Testing', 'Web Development', 'Mobile Apps', 'Cybersecurity'],
      placements: '100+ students placed annually',
      rating: 4.6
    },
    {
      name: 'Larsen & Toubro (L&T)',
      category: 'Engineering',
      logo: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Major technology, engineering, construction, manufacturing and financial services conglomerate.',
      programs: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Systems', 'Project Management'],
      placements: '80+ students placed annually',
      rating: 4.5
    },
    {
      name: 'Bosch India',
      category: 'Automotive',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Leading global supplier of technology and services in automotive and industrial technology.',
      programs: ['Automotive Electronics', 'IoT Solutions', 'Industry 4.0', 'Embedded Systems'],
      placements: '60+ students placed annually',
      rating: 4.7
    },
    {
      name: 'Microsoft India',
      category: 'Technology',
      logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Global technology company providing cloud computing, productivity software, and AI solutions.',
      programs: ['Azure Cloud', '.NET Development', 'AI/ML', 'Power Platform'],
      placements: '40+ students placed annually',
      rating: 4.9
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Computing',
      logo: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'World\'s most comprehensive and broadly adopted cloud platform.',
      programs: ['Cloud Architecture', 'DevOps', 'Big Data', 'Machine Learning'],
      placements: '35+ students placed annually',
      rating: 4.8
    },
    {
      name: 'Google India',
      category: 'Technology',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Multinational technology company specializing in Internet-related services and products.',
      programs: ['Android Development', 'Digital Marketing', 'Data Analytics', 'UX Design'],
      placements: '30+ students placed annually',
      rating: 4.9
    }
  ];

  const partnershipBenefits = [
    {
      icon: Users,
      title: 'Industry Mentorship',
      description: 'Direct mentorship from industry professionals and subject matter experts.'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Industry-recognized certifications that enhance employability and career prospects.'
    },
    {
      icon: Building,
      title: 'Internship Opportunities',
      description: 'Guaranteed internship placements with our partner companies for practical experience.'
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'International projects and collaborations providing global work experience.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Training Partners' },
    { number: '2000+', label: 'Students Trained' },
    { number: '95%', label: 'Placement Rate' },
    { number: '500+', label: 'Companies Hiring' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Training Partners</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Collaborating with industry leaders to provide world-class training and placement opportunities for our students.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Esteemed Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading companies across various industries to provide comprehensive training and career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{partner.category}</p>
                      <div className="flex items-center mt-1">
                        <Star className="text-yellow-400 fill-current" size={14} />
                        <span className="text-sm text-gray-600 ml-1">{partner.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Training Programs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-green-600 font-medium">
                      {partner.placements}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center">
                      Learn More
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships provide students with unique advantages and opportunities for career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Become a Partner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Become Our Training Partner</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Join our network of esteemed partners and help shape the future of technical education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Submit Proposal</h3>
                <p className="text-blue-100 text-sm">Share your training programs and partnership proposal with us.</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Evaluation</h3>
                <p className="text-blue-100 text-sm">Our team evaluates the proposal and conducts partnership discussions.</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Partnership</h3>
                <p className="text-blue-100 text-sm">Sign MOU and begin collaborative training programs.</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contact Partnership Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPartners;