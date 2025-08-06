import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <MessageCircle className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 left-6 z-50 bg-white rounded-lg shadow-xl border w-80 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-emerald-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <h3 className="font-semibold">Need Help?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">
                Need help choosing a cake? Chat with us!
              </p>
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 text-sm transition-colors">
                  🎂 Help me choose a birthday cake
                </button>
                <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 text-sm transition-colors">
                  🍯 Recommend traditional sweets
                </button>
                <button className="w-full text-left p-2 rounded bg-gray-50 hover:bg-gray-100 text-sm transition-colors">
                  📞 Call me back
                </button>
              </div>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hi! I need help choosing products from Pk Bakers.");
                  window.open(`https://wa.me/923240133166?text=${message}`, '_blank');
                }}
                className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg transition-colors"
              >
                Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;