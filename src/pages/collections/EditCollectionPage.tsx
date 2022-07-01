import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useLocation, useNavigate } from 'react-router-dom';
import CollectionProductTypeBins from '../../components/collections/CollectionProductTypeBins';
import ProductsGrid from '../../components/inventory/ProductsGrid';
import { getQueryParam } from '../../helpers/LocationHelper';
import { getBoolean } from '../../helpers/StringHelper';
import { mockProducts } from '../../MockData';
import { Collection } from '../../models/Collection';
import Product from '../../models/Product';
import LocalDbService from '../../services/LocalDbService';

const EditCollectionPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const collectionIdMatch = new RegExp('[^/]+$').exec(location.pathname);
  const collectionId =
    collectionIdMatch && collectionIdMatch.length > 0
      ? collectionIdMatch[0]
      : '';

  const isCreating = getBoolean(getQueryParam('create'));

  const [collection, setCollection] = useState<Collection>();
  const [products, setProducts] = useState<Array<Product>>();

  useEffect(() => {
    let currentCollection = LocalDbService.getCollection(collectionId);
    setCollection(currentCollection);

    let availableProducts = mockProducts.filter(
      (p) =>
        !currentCollection.products ||
        currentCollection.products.findIndex((cp) => cp.id === p.id) < 0
    );
    setProducts(availableProducts);
  }, [collectionId]);

  const onSave = () => {
    if (collection) {
      LocalDbService.saveCollection(collection);
    }

    navigate('/collections');
  };

  const onCancel = () => {
    if (isCreating && collection) {
      LocalDbService.deleteCollection(collection.id);
    }

    navigate('/collections');
  };

  const addProductToCollection = (item: Product) => {
    if (!collection) {
      return;
    }

    let collectionProducts = collection.products ?? [];
    collectionProducts =
      collectionProducts.findIndex((t) => t.id === item.id) > -1
        ? collectionProducts
        : [...collectionProducts, item];

    setCollection({
      ...collection,
      products: collectionProducts
    });

    if (!products) {
      return;
    }

    let index = products.findIndex((p) => p.id === item.id);
    if (index > -1) {
      products.splice(index, 1);
      setProducts(products);
    }
  };

  const removeProductFromCollection = (item: Product) => {
    if (collection?.products) {
      let index = collection.products.findIndex((p) => p.id === item.id);
      if (index > -1) {
        collection.products.splice(index, 1);
        setCollection({ ...collection, products: collection.products });
      }
    }

    if (
      products &&
      products.findIndex((product) => product.id === item.id) < 0
    ) {
      setProducts([...products, item]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
              onClick={() => onCancel()}>
              Cancel
            </button>
            <button
              className='w-32 h-10 bg-primary rounded-md font-avenir text-white text-sm font-medium shadow-sm ml-5 hover:opacity-70'
              onClick={() => onSave()}>
              {isCreating ? 'Create Collection' : 'Save Collection'}
            </button>
          </div>
        </div>
        {/* Body */}
        <div className='flex w-full mt-8'>
          {/* Left Side */}
          <div className='flex flex-col w-2/3'>
            <ProductsGrid
              products={products ?? []}
              removeFromCollection={removeProductFromCollection}
            />
          </div>
          {/* Right Side */}
          <div className='w-1/3'>
            <CollectionProductTypeBins
              collection={collection}
              addProductToCollection={addProductToCollection}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default EditCollectionPage;
