import Product from './Product';

export interface Collection {
  id: string;
  name: string;
  description: string;
  products?: Array<Product>;

  // Metadata
  totalItems: number;
  totalItemsPurchased: number;
  totalItemsScanned: number;
  qrCode: string;
}
