
import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <div className="item-image-container">
        <img 
          src={item.imageUrl}
          alt={item.name}
          className="item-image"
        />
        
        <div className="item-overlay">
          <h2 className="item-title">{item.name}</h2>
          <p className="item-description">{item.description}</p>
          <div className="item-bid">
            Current Bid: <span className="item-bid-amount">${item.currentBid.toLocaleString()}</span>
          </div>
          
          <button
            className="view-details-button"
            onClick={() => document.getElementById('item-details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Details
          </button>
        </div>
      </div>
      
      <div id="item-details" className="item-details">
        <h3 className="details-title">Item Details</h3>
        <div className="details-content">
          <div className="detail-row">
            <span className="detail-label">Category:</span>
            <span className="detail-value">{item.category}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Year:</span>
            <span className="detail-value">{item.year}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Current Bid:</span>
            <span className="detail-value">${item.currentBid.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
