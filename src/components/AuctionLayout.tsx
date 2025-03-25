
import React, { useState } from 'react';
import { AuctionItem } from '../utils/types';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import BidHub from './BidHub';
import AddBidModal from './AddBidModal';
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuctionLayoutProps {
  initialItems: AuctionItem[];
}

const AuctionLayout: React.FC<AuctionLayoutProps> = ({ initialItems }) => {
  const [items, setItems] = useState<AuctionItem[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<AuctionItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { toast } = useToast();
  const [currentYear] = useState(() => new Date().getFullYear().toString().slice(2));
  
  const handleSelectItem = (item: AuctionItem) => {
    setSelectedItem(item);
  };
  
  const handleAddItem = (itemData: { 
    name: string; 
    description: string; 
    startingBid: number; 
    category: string; 
    imageUrl: string; 
  }) => {
    const newItem: AuctionItem = {
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
      name: itemData.name,
      currentBid: itemData.startingBid,
      category: itemData.category.toUpperCase(),
      year: `'${currentYear}`,
      imageUrl: itemData.imageUrl,
      description: itemData.description
    };
    
    setItems([newItem, ...items]);
    
    toast({
      title: "Item added",
      description: `${newItem.name} has been added to the auction`,
    });
  };
  
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="px-6 py-4 border-b border-bidhub-border flex justify-between items-center bg-bidhub-muted/30 backdrop-blur-sm">
        <div className="text-lg font-bold">
          BidHub
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAddModalOpen(true)}
          className="bg-white text-black px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-200 transition-colors"
        >
          <PlusCircle size={18} />
          <span className="font-medium">Add Bid</span>
        </motion.button>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Left Panel - Item Detail or Welcome Screen */}
        <div className="w-full md:w-2/3 h-full border-r border-bidhub-border overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedItem ? (
              <ItemDetail key="detail" item={selectedItem} />
            ) : (
              <BidHub key="welcome" />
            )}
          </AnimatePresence>
        </div>
        
        {/* Right Panel - Item List */}
        <div className="hidden md:block md:w-1/3 h-full">
          <div className="relative h-full">
            <ItemList
              items={items}
              selectedItem={selectedItem}
              onSelectItem={handleSelectItem}
            />
          </div>
        </div>
      </div>
      
      {/* Add Item Modal */}
      <AddBidModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddItem}
      />
    </div>
  );
};

export default AuctionLayout;
