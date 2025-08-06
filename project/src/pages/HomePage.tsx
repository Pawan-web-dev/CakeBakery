import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Heart, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import data from '../data/products.json';
import content from '../data/content.json';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { carouselImages } = data;
  const { homepage, brand } = content;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const features = [
    {
      icon: Star,
      title: '250+ Products',
      description: 'Wide variety of sweets, cakes, and fast food',
      color: 'text-yellow-500',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every product crafted with care and tradition',
      color: 'text-red-500',
    },
    {
      icon: Award,
      title: 'Since 1984',
      description: 'Trusted by Karachi families for generations',
      color: 'text-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-[70vh] overflow-hidden">
        {carouselImages.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-orange-50 to-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {homepage.hero.mainTitle}
          </h1>
          <h2 className="text-2xl md:text-3xl text-emerald-600 font-semibold mb-4">
            {homepage.hero.subtitle}
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {homepage.hero.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-colors"
            onClick={() => window.location.href = '/products'}
          >
            Explore Our Products
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pk Bakers?
            </h2>
            <p className="text-xl text-gray-600">
              Let's celebrate sweetness together!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-500 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-white mb-8">
            We deliver joy to your doorstep!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`tel:${brand.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Call to Order: {brand.phone}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/products'}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Browse Products
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;