
import React from 'react';
import './ItemList.css';

const ItemList = ({ items, selectedItem, onSelectItem }) => {
  return (
    <div className="item-list">
      <div className="item-list-header">
        <div className="header-title">[SELECTED WORKS]</div>
        <div className="header-years">'24 — '22</div>
      </div>
      
      <div className="item-list-content hide-scrollbar">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`auction-item ${selectedItem?.id === item.id ? 'active' : ''}`}
            onClick={() => onSelectItem(item)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="auction-item-content">
              <div className="item-indicator">
                {selectedItem?.id === item.id ? (
                  <div className="indicator-active"></div>
                ) : (
                  <div className="indicator-inactive"></div>
                )}
              </div>
              
              <div className="item-info">
                <div className="item-name">{item.name}</div>
              </div>
              
              <div className="item-meta">
                <div className="item-category">{item.category}</div>
                <div className="item-year">'${item.year}</div>
              </div>
            </div>
            
            <div className="item-current-bid">
              Current Bid: ${item.currentBid.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
