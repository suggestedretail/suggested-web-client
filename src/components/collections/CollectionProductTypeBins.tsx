import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Collection } from '../../models/Collection';
import Product, { ProductType } from '../../models/Product';
import ProductCardLight from '../inventory/ProductCardLight';

interface CollectionProductTypeBinsProps {
  collection?: Collection;
  addProductToCollection(item: Product): void;
}

const CollectionProductTypeBins: React.FC<CollectionProductTypeBinsProps> = ({
  collection,
  addProductToCollection
}) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'product',
    drop: (item: Product) => addProductToCollection(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  const [tops, setTops] = useState<Array<Product>>();

  useEffect(() => {
    setTops(
      collection?.products?.filter((p) => p.productType === ProductType.Top) ??
        []
    );
  }, [collection]);

  return (
    <div className='flex relative' ref={dropRef}>
      <div className='flex flex-col w-full space-y-4'>
        <div className='flex h-36 bg-gray-100 p-2'>
          <span className='font-lato font-normal text-sm text-gray-800'>
            Accessories
          </span>
        </div>
        <div className='flex flex-col h-36 bg-gray-100 p-2'>
          <div className='flex mb-4 '>
            <span className='font-lato font-normal text-sm text-gray-800 mr-2'>
              Tops
            </span>
            {tops && tops.length > 0 && (
              <span className='h-5 w-5 bg-primary rounded-xl inline-flex items-center justify-center font-lato font-normal text-xs text-white'>
                {tops.length}
              </span>
            )}
          </div>
          <div className='flex'>
            {tops &&
              tops.map((p) => (
                <ProductCardLight
                  id={p.id}
                  name={p.name}
                  imageUrl={p.imageUrl}
                  price={p.price}
                  productType={p.productType}
                />
              ))}
          </div>
        </div>
        <div className='flex h-36 bg-gray-100 p-2'>
          <span className='font-lato font-normal text-sm text-gray-800'>
            Bottoms
          </span>
        </div>
        <div className='flex h-36 bg-gray-100 p-2'>
          <span className='font-lato font-normal text-sm text-gray-800'>
            Shoes
          </span>
        </div>
      </div>
      {isOver && (
        <div className='absolute bg-black/40 top-0 bottom-0 left-0 right-0 z-10'></div>
      )}
    </div>
  );
};

export default CollectionProductTypeBins;
