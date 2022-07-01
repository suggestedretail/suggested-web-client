import { Product } from './Product';

export interface Collection {
  id: string;
  name: string;
  description: string;
  accessories?: Array<Product>;
  tops?: Array<Product>;
  bottoms?: Array<Product>;
  shoes?: Array<Product>;

  // Metadata
  totalItems: number;
  totalItemsPurchased: number;
  totalItemsScanned: number;
  qrCode: string;
}
