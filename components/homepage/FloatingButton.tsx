"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatBot from './ChatBot';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && <ChatBot onClose={() => setIsOpen(false)} />}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="group p-4 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          💬
          <span
            className="absolute -top-8  transform -translate-x-1/2 whitespace-nowrap bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            Chat with ai
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingButton;
