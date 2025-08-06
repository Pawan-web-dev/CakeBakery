import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/Common/WhatsAppButton';
import ChatWidget from './components/Common/ChatWidget';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <HomePage />
                  </motion.div>
                } 
              />
              <Route 
                path="/products" 
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <ProductsPage />
                  </motion.div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <AboutPage />
                  </motion.div>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <ContactPage />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        
        {/* Fixed Elements */}
        <WhatsAppButton />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;