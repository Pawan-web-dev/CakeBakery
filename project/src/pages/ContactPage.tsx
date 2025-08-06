import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import content from '../data/content.json';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { brand } = content;

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi! My name is ${formData.name}. Email: ${formData.email}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/923240133166?text=${message}`, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: brand.phone,
      action: `tel:${brand.phone}`,
      color: 'text-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@pkbakers.com',
      action: 'mailto:info@pkbakers.com',
      color: 'text-blue-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Karachi, Pakistan',
      action: '#',
      color: 'text-red-500',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '9 AM - 10 PM Daily',
      action: '#',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white">
              We're here to help you with any questions or orders!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Order? Call Us Now!
          </h2>
          <motion.a
            href={`tel:${brand.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-colors text-lg"
          >
            <Phone className="h-5 w-5 mr-3" />
            Call to Order: {brand.phone}
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, x: -50 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.action}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`${info.color} bg-gray-50 p-3 rounded-lg mr-4 group-hover:bg-gray-100 transition-colors`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-emerald-100 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Need help choosing a cake? 🎂
              </h3>
              <p className="text-gray-700 mb-4">
                Our friendly staff is ready to help you select the perfect products for your special occasion!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = encodeURIComponent("Hi! I need help choosing products from Pk Bakers.");
                  window.open(`https://wa.me/923240133166?text=${message}`, '_blank');
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Tell us about your requirements or ask any questions..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message via WhatsApp
              </motion.button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Your message will be sent via WhatsApp for faster response ⚡
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;