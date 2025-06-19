import React from 'react';
import { Users, Award, BookOpen, Building, Globe, Trophy } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Students Enrolled',
      description: 'Active students across all programs',
      color: 'blue'
    },
    {
      icon: BookOpen,
      number: '50+',
      label: 'Courses Offered',
      description: 'Degree, diploma, and certificate programs',
      color: 'green'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Placement Rate',
      description: 'Students placed in reputed companies',
      color: 'purple'
    },
    {
      icon: Building,
      number: '25+',
      label: 'Years of Excellence',
      description: 'Serving quality education since 1999',
      color: 'orange'
    },
    {
      icon: Globe,
      number: '200+',
      label: 'Industry Partners',
      description: 'Leading companies for placements',
      color: 'red'
    },
    {
      icon: Trophy,
      number: '100+',
      label: 'Awards Won',
      description: 'Recognition for academic excellence',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and the success of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 ${getColorClasses(stat.color)}`}>
                  <Icon size={32} />
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why These Numbers Matter</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our statistics represent real stories of success, innovation, and impact in the lives of our students and the broader community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Student-Centric Approach</h4>
              <p className="text-gray-600 text-sm">
                Every number reflects our commitment to individual student success and career growth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Industry Recognition</h4>
              <p className="text-gray-600 text-sm">
                Our achievements are validated by industry partnerships and employer satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Continuous Growth</h4>
              <p className="text-gray-600 text-sm">
                We continuously improve our programs and facilities to maintain excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;