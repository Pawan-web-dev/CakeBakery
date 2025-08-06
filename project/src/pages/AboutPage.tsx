import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Award, Heart } from 'lucide-react';
import content from '../data/content.json';

const AboutPage: React.FC = () => {
  const { about } = content;

  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[50vh] bg-gradient-to-r from-emerald-600 to-orange-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl">From 1984 to Today</p>
        </motion.div>
      </div>

      {/* Introduction */}
      <motion.section
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            A Legacy of Sweetness
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {about.intro}
          </p>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        ref={timelineRef}
        initial={{ opacity: 0, y: 50 }}
        animate={timelineInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-b from-orange-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600">
              Four decades of serving the community
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200 hidden md:block" />
            
            {about.timeline.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-500">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-emerald-500 mr-2" />
                      <span className="text-2xl font-bold text-emerald-600">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us every single day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-gradient-to-b from-orange-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Spirit Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Kitchen-made with Love
          </h2>
          <p className="text-xl text-white mb-8">
            Every product that leaves our kitchen carries the warmth of our family traditions 
            and the dedication of our skilled bakers who have been with us for years.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">40+</div>
              <div className="text-orange-100">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">250+</div>
              <div className="text-orange-100">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50k+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;