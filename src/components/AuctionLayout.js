
import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import BidHub from './BidHub';
import AddBidModal from './AddBidModal';
import { useToast } from '../hooks/useToast';
import { ToastContainer } from './Toast';
import './AuctionLayout.css';

const AuctionLayout = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { toast, toasts, removeToast } = useToast();
  const [currentYear] = useState(() => new Date().getFullYear().toString().slice(2));
  
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  
  const handleAddItem = (itemData) => {
    const newItem = {
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
    <div className="auction-layout">
      {/* Top Navigation Bar */}
      <div className="auction-header">
        <div className="auction-logo">
          BidHub
        </div>
        
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="add-bid-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <span>Add Bid</span>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="auction-content">
        {/* Left Panel - Item Detail or Welcome Screen */}
        <div className="auction-main">
          {selectedItem ? (
            <ItemDetail item={selectedItem} />
          ) : (
            <BidHub />
          )}
        </div>
        
        {/* Right Panel - Item List */}
        <div className="auction-sidebar">
          <ItemList
            items={items}
            selectedItem={selectedItem}
            onSelectItem={handleSelectItem}
          />
        </div>
      </div>
      
      {/* Add Item Modal */}
      <AddBidModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddItem}
      />
      
      {/* Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
};

export default AuctionLayout;
