import React from 'react';
import { useDrop } from 'react-dnd';
import Product from '../../models/Product';
import ProductCard from './ProductCard';

interface ProductsGridProps {
  products: Array<Product>;
  removeFromCollection(p: Product): void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  removeFromCollection
}) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'product-light',
    drop: (item: Product) => removeFromCollection(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div className='flex flex-col h-full' ref={dropRef}>
      {/* Filters */}
      <div className='filter-header flex w-28 h-6 bg-primary rounded-xl items-center justify-center'>
        <div className='text-white font-lato font-normal text-sm text-center'>
          All Inventory
        </div>
      </div>
      {/* Products */}
      <div className='products-grid flex flex-wrap h-full mt-6 relative'>
        {products &&
          products
            .sort((a, b) => {
              if (a < b) return 1;
              else return 0;
            })
            .map((p) => <ProductCard {...p} />)}
        {isOver && (
          <div className='absolute bg-black/40 top-0 bottom-0 left-0 right-0 z-10'></div>
        )}
      </div>
    </div>
  );
};

export default ProductsGrid;
