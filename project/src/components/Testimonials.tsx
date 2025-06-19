import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at TCS',
      course: 'Computer Science Engineering',
      year: '2023',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'DKSDC provided me with excellent technical knowledge and practical skills. The faculty members were always supportive, and the placement assistance helped me secure my dream job.',
      rating: 5
    },
    {
      name: 'Rahul Patel',
      role: 'Mechanical Engineer at L&T',
      course: 'Mechanical Engineering',
      year: '2022',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'The hands-on experience in the mechanical workshop and modern laboratories prepared me well for the industry. The curriculum is perfectly aligned with current industry needs.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'Data Analyst at Wipro',
      course: 'Information Technology',
      year: '2023',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'The IT program at DKSDC gave me strong foundation in programming and database management. The faculty encouraged us to work on real-world projects.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Electronics Engineer at Bosch',
      course: 'Electronics & Communication',
      year: '2022',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'DKSDC has excellent infrastructure and experienced faculty. The practical approach to learning and industry exposure helped me build a successful career.',
      rating: 5
    },
    {
      name: 'Kavya Singh',
      role: 'Digital Marketing Manager',
      course: 'Digital Marketing Certificate',
      year: '2023',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'The digital marketing course was comprehensive and practical. Within 6 months, I gained skills in SEO, social media marketing, and analytics that landed me a great job.',
      rating: 5
    },
    {
      name: 'Arjun Desai',
      role: 'Data Scientist at IBM',
      course: 'Data Science & Analytics',
      year: '2023',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'The data science program equipped me with Python, machine learning, and analytics skills. The MKCL certification added great value to my resume.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful alumni who have built amazing careers with the foundation they received at DKSDC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <Quote className="text-blue-600 opacity-50" size={32} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.course} • Class of {testimonial.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Network Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Alumni Network</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Join a strong network of successful professionals working at top companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;