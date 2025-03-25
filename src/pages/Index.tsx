
import React from 'react';
import AuctionLayout from '../components/AuctionLayout';
import { auctionItems } from '../utils/auctionData';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to BidHub",
      description: "Discover premium auctions and place your bids on unique items.",
      duration: 5000,
    });
  }, [toast]);

  return <AuctionLayout initialItems={auctionItems} />;
};

export default Index;
