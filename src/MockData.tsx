import Product, { ProductType } from './models/Product';

export const mockProducts: Array<Product> = [
  {
    id: '1',
    name: '100% Organic Cotton Pocket T-Shirt',
    price: 19.95,
    imageUrl:
      'https://www4.assets-gap.com/webcontent/0020/382/099/cn20382099.jpg?q=h&w=234',

    productType: ProductType.Top
  },
  {
    id: '2',
    name: 'Classic Long Sleeve T-Shirt',
    price: 29.95,
    imageUrl:
      'https://www1.assets-gap.com/webcontent/0028/769/816/cn28769816.jpg?q=h&w=234',

    productType: ProductType.Top
  },
  {
    id: '3',
    name: 'Classic Long Sleeve T-Shirt',
    price: 29.95,
    imageUrl:
      'https://www2.assets-gap.com/webcontent/0027/962/914/cn27962914.jpg?q=h&w=234',

    productType: ProductType.Top
  },
  {
    id: '4',
    name: 'Classic Long Sleeve T-Shirt',
    price: 29.95,
    imageUrl:
      'https://www3.assets-gap.com/webcontent/0028/022/669/cn28022669.jpg?q=h&w=234',

    productType: ProductType.Top
  },
  {
    id: '5',
    name: 'Classic Long Sleeve T-Shirt',
    price: 29.95,
    imageUrl:
      'https://www1.assets-gap.com/webcontent/0019/802/405/cn19802405.jpg?q=h&w=234',
    productType: ProductType.Top
  }
];
