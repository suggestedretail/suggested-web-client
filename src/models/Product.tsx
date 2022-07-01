export default interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  productType: ProductType;
}

export enum ProductType {
  Accessory = 'accessory',
  Top = 'top',
  Bottom = 'bottom',
  Shoe = 'shoe'
}
