import { CollectionMetadata } from '../models/CollectionMetadata';

const getCollections = () => {
  let collectionsJson = window.localStorage.getItem('collections');
  if (collectionsJson) {
    let collections: Array<CollectionMetadata> = JSON.parse(collectionsJson);
    return collections;
  }

  return [];
};

const createCollection = () => {
  let collections: Array<CollectionMetadata> = [];
  let collectionsJson = window.localStorage.getItem('collections');
  if (collectionsJson) {
    collections = JSON.parse(collectionsJson);
  }

  collections.push({
    name: 'Summer 2021',
    totalItems: 23,
    totalItemsPurchased: 803,
    totalItemsScanned: 1803,
    qrCode: 'https://www.google.com'
  });

  window.localStorage.setItem('collections', JSON.stringify(collections));
};

const LocalDbService = {
  getCollections,
  createCollection
};

export default LocalDbService;
