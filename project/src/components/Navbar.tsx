import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onInquiryClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onInquiryClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'About KCE Society', href: '/about#kce-society' },
        { name: 'Mentors', href: '/about#mentors' },
        { name: 'About Institute', href: '/about#institute' },
        { name: 'Team', href: '/about#team' },
        { name: 'Affiliations', href: '/about#affiliations' }
      ]
    },
    {
      name: 'Programmes',
      href: '/programmes',
      dropdown: [
        { name: 'Degree', href: '/programmes#degree' },
        { name: 'Diploma', href: '/programmes#diploma' },
        { name: 'Short Term Training', href: '/programmes#short-term' },
        { name: 'MKCL iLike Certificates', href: '/programmes#mkcl' }
      ]
    },
    { name: 'Training Partners', href: '/training-partners' },
    {
      name: 'Facilities',
      href: '/facilities',
      dropdown: [
        { name: 'Laboratories', href: '/facilities#laboratories' },
        { name: 'Library', href: '/facilities#library' },
        { name: 'Sport Facility', href: '/facilities#sports' },
        { name: 'Hostel', href: '/facilities#hostel' }
      ]
    },
    {
      name: 'Gallery',
      href: '/gallery',
      dropdown: [
        { name: 'Yearwise', href: '/gallery#yearwise' },
        { name: 'Eventwise', href: '/gallery#eventwise' }
      ]
    },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@dksdc.ac.in</span>
            </div>
          </div>
          <button
            onClick={onInquiryClick}
            className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-sm font-medium transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">DKSDC</h1>
              <p className="text-xs text-gray-600">Department of Excellence</p>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-900 border-b-2 border-blue-900'
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                  </Link>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md z-50 border">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;