import React from 'react';
import { Product } from '../../models/Product';

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className='flex flex-col w-40 mr-16 mb-8'>
      <img
        src={props.imageUrl}
        alt=''
        className='w-28 mx-auto mb-2'
        draggable={false}
      />
      <div className='max-w-full border-b font-avenir font-normal text-sm truncate'>
        {props.name}
      </div>
      <div className='border-t font-avenir font-extrabold text-sm'>{`$${props.price}`}</div>
    </div>
  );
};

export default ProductCard;
