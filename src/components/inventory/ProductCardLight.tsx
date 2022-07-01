import React from 'react';
import { useDrag } from 'react-dnd';
import Product from '../../models/Product';

interface ProductCardLightProps extends Product {}

const ProductCardLight: React.FC<ProductCardLightProps> = ({
  id,
  name,
  imageUrl,
  price,
  productType
}) => {
  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag({
    type: 'product-light',
    item: { id, name, imageUrl, price, productType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return isDragging ? (
    <div ref={dragPreviewRef} />
  ) : (
    <div className='product-card-light flex flex-col w-10 mr-2' ref={dragRef}>
      <img src={imageUrl} alt='' draggable={false} />
      <span className='max-w-full truncate font-avenir font-normal text-sm text-gray-800'>
        {name}
      </span>
    </div>
  );
};

export default ProductCardLight;
