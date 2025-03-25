
import React, { useState } from 'react';
import './AddBidModal.css';

const AddBidModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState(100);
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !description || !category || !imageUrl) {
      alert("Please fill out all required fields");
      return;
    }
    
    onSubmit({
      name,
      description,
      startingBid,
      category,
      imageUrl
    });
    
    // Reset form
    setName('');
    setDescription('');
    setStartingBid(100);
    setCategory('');
    setImageUrl('');
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Add New Auction Item</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="bid-form">
          <div className="form-group">
            <label htmlFor="name">Item Name</label>
            <input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="form-input"
              placeholder="Vintage Watch"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="form-input"
              placeholder="Luxury timepiece in excellent condition"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="form-input"
              placeholder="WATCHES"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="startingBid">Starting Bid ($)</label>
            <input 
              id="startingBid" 
              type="number" 
              min={1}
              value={startingBid} 
              onChange={(e) => setStartingBid(Number(e.target.value))} 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input 
              id="imageUrl" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              className="form-input"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="form-footer">
            <button type="submit" className="submit-button">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBidModal;
