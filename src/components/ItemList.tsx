
import React from 'react';
import { AuctionItem } from '../utils/types';
import { motion } from 'framer-motion';

interface ItemListProps {
  items: AuctionItem[];
  selectedItem: AuctionItem | null;
  onSelectItem: (item: AuctionItem) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, selectedItem, onSelectItem }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-bidhub-border px-6 py-4 flex justify-between items-center">
        <div className="text-sm font-medium">[SELECTED WORKS]</div>
        <div className="text-sm font-medium text-gray-400">'24 — '22</div>
      </div>
      
      <div className="overflow-y-auto hide-scrollbar flex-grow">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`auction-item px-6 py-4 ${selectedItem?.id === item.id ? 'active' : ''}`}
            onClick={() => onSelectItem(item)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full flex items-center justify-center mr-4">
                {selectedItem?.id === item.id ? (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                ) : (
                  <div className="w-5 h-5 border border-white/30 rounded-full"></div>
                )}
              </div>
              
              <div className="flex-grow">
                <div className="font-medium">{item.name}</div>
              </div>
              
              <div className="ml-auto flex flex-col items-end">
                <div className="text-gray-400 text-sm">{item.category}</div>
                <div className="text-gray-400 text-sm mt-1">'${item.year}</div>
              </div>
            </div>
            
            <div className="mt-2 pl-9 text-sm text-gray-400">
              Current Bid: ${item.currentBid.toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
