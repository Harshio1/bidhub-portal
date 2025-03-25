
import React from 'react';
import { motion } from 'framer-motion';

const BidHub: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full text-center p-10"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-7xl font-bold tracking-tight mb-6"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
          BidHub
        </span>
      </motion.div>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-400 max-w-md"
      >
        Select an item from the list to view details and place your bid. Premium auctions for discerning collectors.
      </motion.p>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 animate-pulse">
          <path d="M17 8l4 4-4 4"></path>
          <path d="M3 12h18"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default BidHub;
