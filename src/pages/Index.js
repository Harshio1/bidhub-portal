
import React, { useEffect } from 'react';
import AuctionLayout from '../components/AuctionLayout';
import { auctionItems } from '../utils/auctionData';
import { useToast } from '../hooks/useToast';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to BidHub",
      description: "View auction items and browse through the current bids.",
      duration: 5000,
    });
  }, [toast]);

  return <AuctionLayout initialItems={auctionItems} />;
};

export default Index;
