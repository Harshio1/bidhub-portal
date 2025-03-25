
import React from 'react';
import './BidHub.css';

const BidHub = () => {
  return (
    <div className="bid-hub">
      <div className="bid-hub-title">
        <span className="gradient-text">BidHub</span>
      </div>
      
      <p className="bid-hub-description">
        Select an item from the list to view details and place your bid. Premium auctions for discerning collectors.
      </p>
      
      <div className="arrow-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
          <path d="M17 8l4 4-4 4"></path>
          <path d="M3 12h18"></path>
        </svg>
      </div>
    </div>
  );
};

export default BidHub;
