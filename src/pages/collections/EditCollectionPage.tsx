import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/inventory/ProductCard';
import { mockProducts } from '../../MockData';
import { Collection } from '../../models/Collection';
import LocalDbService from '../../services/LocalDbService';

const EditCollectionPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const collectionIdMatch = new RegExp('[^/]+$').exec(location.pathname);
  const collectionId =
    collectionIdMatch && collectionIdMatch.length > 0
      ? collectionIdMatch[0]
      : '';

  const [collection, setCollection] = useState<Collection>();

  useEffect(() => {
    setCollection(LocalDbService.getCollection(collectionId));
  }, [collectionId]);

  return (
    <div className='h-full w-full p-8'>
      {/* Header */}
      <div className='flex h-12 w-full'>
        <div className='h-full flex flex-col'>
          <div className='font-avenir text-customGray text-lg font-bold'>
            {collection?.name}
          </div>
          <div className='font-lato text-lightGray text-sm font-normal'>
            {collection?.description}
          </div>
        </div>
        <div className='flex ml-auto'>
          <button
            className='w-20 h-10 border border-gray-300 rounded-md font-avenir text-gray-700 text-sm font-medium shadow-sm'
            onClick={() => navigate('/collections')}>
            Cancel
          </button>
          <button
            className='w-32 h-10 bg-primary rounded-md font-avenir text-white text-sm font-medium shadow-sm ml-5 hover:opacity-70'
            onClick={() => navigate('/collections')}>
            Save Collection
          </button>
        </div>
      </div>
      {/* Body */}
      <div className='flex w-full mt-8'>
        {/* Left Side */}
        <div className='flex flex-col w-2/3'>
          {/* Filters */}
          <div className='filter-header flex w-28 h-6 bg-primary rounded-xl items-center justify-center'>
            <div className='text-white font-lato font-normal text-sm text-center'>
              All Inventory
            </div>
          </div>
          {/* Products */}
          <div className='products-grid flex flex-wrap mt-6'>
            {mockProducts.map((p) => (
              <ProductCard {...p} />
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className='w-1/3 flex flex-col space-y-4'>
          <div className='flex h-36 bg-gray-100 p-2'>
            <span className='font-lato font-normal text-sm text-gray-800'>
              Accessories
            </span>
          </div>
          <div className='flex h-36 bg-gray-100 p-2'>
            <span className='font-lato font-normal text-sm text-gray-800'>
              Tops
            </span>
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
      </div>
    </div>
  );
};

export default EditCollectionPage;
