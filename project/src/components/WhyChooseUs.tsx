import React from 'react';
import { Users, BookOpen, Briefcase, Cpu, Trophy, Globe } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Skilled Faculty',
      description: 'Learn from industry experts and experienced educators with advanced degrees and practical knowledge.',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Industry-Aligned Curriculum',
      description: 'Our courses are designed with input from industry partners to ensure relevance and employability.',
      color: 'green'
    },
    {
      icon: Briefcase,
      title: 'Placement Assistance',
      description: 'Dedicated placement cell with 95% placement record and partnerships with top companies.',
      color: 'purple'
    },
    {
      icon: Cpu,
      title: 'Modern Labs & Facilities',
      description: 'State-of-the-art laboratories and equipment for hands-on learning and practical experience.',
      color: 'orange'
    },
    {
      icon: Trophy,
      title: 'Excellence in Education',
      description: 'Award-winning institution with NAAC accreditation and recognition for quality education.',
      color: 'red'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'International collaborations and exchange programs for global exposure and experience.',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DKSDC?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of students seeking quality technical education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Alumni Network</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;