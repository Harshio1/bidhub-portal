
import React from 'react';
import { AuctionItem } from '../utils/types';
import { motion, AnimatePresence } from 'framer-motion';

interface ItemDetailProps {
  item: AuctionItem;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col"
      >
        <div className="relative flex-grow overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
          >
            <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="text-lg font-medium">
              Current Bid: <span className="text-white">${item.currentBid.toLocaleString()}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
              onClick={() => document.getElementById('item-details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View More
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          id="item-details"
          className="p-8 border-t border-bidhub-border bg-bidhub-muted/30 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold mb-4">Item Details</h3>
          <div className="space-y-4">
            <div>
              <span className="text-gray-400">Category:</span>
              <span className="ml-2">{item.category}</span>
            </div>
            <div>
              <span className="text-gray-400">Year:</span>
              <span className="ml-2">'${item.year}</span>
            </div>
            <div>
              <span className="text-gray-400">Current Bid:</span>
              <span className="ml-2">${item.currentBid.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ItemDetail;
