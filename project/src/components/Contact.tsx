import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91-XXXXXXXXXX', '+91-YYYYYYYYYY'],
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@dksdc.ac.in', 'admissions@dksdc.ac.in'],
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Campus Address',
      details: ['DKSDC Campus, Education City', 'Pune, Maharashtra 411001'],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'orange'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'text-blue-600' },
    { icon: Twitter, href: '#', color: 'text-sky-500' },
    { icon: Instagram, href: '#', color: 'text-pink-600' },
    { icon: Linkedin, href: '#', color: 'text-blue-700' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any other information you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(info.color)}`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="font-semibold">Interactive Map</p>
                <p className="text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                    <option>General Inquiry</option>
                    <option>Admission Information</option>
                    <option>Course Details</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors transform hover:scale-105 duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">DKSDC</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Empowering students with quality technical education and practical skills for successful careers. 
                Join us in building a brighter future through innovation and excellence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Programmes</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Admissions</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Facilities</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Placements</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Student Portal</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Library</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Alumni Network</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Career Services</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">News & Events</a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
            <p>&copy; 2024 DKSDC Department. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;