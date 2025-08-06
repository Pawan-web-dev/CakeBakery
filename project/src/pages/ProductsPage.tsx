import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, Filter } from 'lucide-react';
import data from '../data/products.json';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { categories, products } = data;

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleOrder = (productName: string, price: string) => {
    const message = encodeURIComponent(
      `Hi! I'd like to order: ${productName} (${price}) from Pk Bakers.`
    );
    window.open(`https://wa.me/923240133166?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Delicious Products
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Freshly baked daily with love and tradition
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 shadow-md'
              }`}
            >
              <Filter className="inline h-4 w-4 mr-2" />
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : `bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 shadow-md ${category.color}`
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-600">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOrder(product.name, product.price)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Order Now</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;