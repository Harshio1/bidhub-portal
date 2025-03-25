
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface AddBidModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (itemData: {
    name: string;
    description: string;
    startingBid: number;
    category: string;
    imageUrl: string;
  }) => void;
}

const AddBidModal: React.FC<AddBidModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState(100);
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !description || !category || !imageUrl) {
      toast({
        title: "Missing fields",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
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
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-bidhub-muted border border-bidhub-border text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add New Auction Item</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Item Name</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="bg-bidhub-accent/50 border-bidhub-border text-white"
              placeholder="Vintage Watch"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="bg-bidhub-accent/50 border-bidhub-border text-white"
              placeholder="Luxury timepiece in excellent condition"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Input 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="bg-bidhub-accent/50 border-bidhub-border text-white"
              placeholder="WATCHES"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="startingBid">Starting Bid ($)</Label>
            <Input 
              id="startingBid" 
              type="number" 
              min={1}
              value={startingBid} 
              onChange={(e) => setStartingBid(Number(e.target.value))} 
              className="bg-bidhub-accent/50 border-bidhub-border text-white"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input 
              id="imageUrl" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              className="bg-bidhub-accent/50 border-bidhub-border text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
              Add Item
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBidModal;
