import { Collection } from '../models/Collection';

const getCollections = () => {
  let collectionsJson = window.localStorage.getItem('collections');
  if (collectionsJson) {
    let collections: Array<Collection> = JSON.parse(collectionsJson);
    return collections;
  }

  return [];
};

const createCollection = (value: Collection) => {
  let collections: Array<Collection> = [];
  let collectionsJson = window.localStorage.getItem('collections');
  if (collectionsJson) {
    collections = JSON.parse(collectionsJson);
  }

  collections.push(value);

  window.localStorage.setItem('collections', JSON.stringify(collections));
};

const getCollection = (id: string) => {
  let collectionsJson = window.localStorage.getItem('collections');
  let collections: Array<Collection> = JSON.parse(collectionsJson ?? '');
  return collections.filter((c) => c.id === id)[0];
};

const LocalDbService = {
  getCollections,
  createCollection,
  getCollection
};

export default LocalDbService;
