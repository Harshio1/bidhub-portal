
export interface AuctionItem {
  id: number;
  name: string;
  currentBid: number;
  category: string;
  year: string;
  imageUrl: string;
  description: string;
}

export interface AuctionContextType {
  items: AuctionItem[];
  selectedItem: AuctionItem | null;
  selectItem: (item: AuctionItem | null) => void;
  placeBid: (itemId: number, amount: number) => void;
}
