import React from 'react';
import { useDrag } from 'react-dnd';
import Product from '../../models/Product';

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  price,
  productType
}) => {
  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag({
    type: 'product',
    item: { id, name, imageUrl, price, productType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return isDragging ? (
    <div ref={dragPreviewRef} />
  ) : (
    <div className='flex flex-col w-40 mr-16 mb-8' ref={dragRef}>
      <img
        src={imageUrl}
        alt=''
        className='w-28 mx-auto mb-2'
        draggable={false}
      />
      <div className='max-w-full border-b font-avenir font-normal text-sm truncate'>
        {name}
      </div>
      <div className='border-t font-avenir font-extrabold text-sm'>{`$${price}`}</div>
    </div>
  );
};

export default ProductCard;
