import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'FAQs', path: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Pk Bakers</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              United in taste, connecting people with sweets. Delivering happiness to Karachi since 1984 with over 250 delicious products made with love.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="https://wa.me/923240133166"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+92 3240133166</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@pkbakers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Pk Bakers. All rights reserved.  Developed with 💝 by Developer Pawan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;