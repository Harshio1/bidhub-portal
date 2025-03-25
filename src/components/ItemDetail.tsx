
import React from 'react';
import { AuctionItem } from '../utils/types';
import { motion, AnimatePresence } from 'framer-motion';

interface ItemDetailProps {
  item: AuctionItem;
  onPlaceBid: (amount: number) => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, onPlaceBid }) => {
  const [bidAmount, setBidAmount] = React.useState<number>(item.currentBid + 10);
  
  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bidAmount > item.currentBid) {
      onPlaceBid(bidAmount);
    }
  };
  
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
              onClick={() => document.getElementById('bid-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View More
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          id="bid-form"
          className="p-8 border-t border-bidhub-border bg-bidhub-muted/30 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold mb-4">Place Your Bid</h3>
          <form onSubmit={handleBidSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="bid-amount" className="block text-sm font-medium text-gray-400 mb-1">
                Bid Amount (minimum ${(item.currentBid + 1).toLocaleString()})
              </label>
              <input
                id="bid-amount"
                type="number"
                min={item.currentBid + 1}
                value={bidAmount}
                onChange={(e) => setBidAmount(Number(e.target.value))}
                className="w-full bg-bidhub-accent/50 border border-bidhub-border rounded px-4 py-2 text-white"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-4 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
            >
              Place Bid
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ItemDetail;
