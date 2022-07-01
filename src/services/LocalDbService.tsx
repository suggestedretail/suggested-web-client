import { Collection } from '../models/Collection';

const getCollections = () => {
  return getCollectionsFromLocal();
};

const createCollection = (value: Collection) => {
  let collections: Array<Collection> = getCollectionsFromLocal();

  collections.push(value);

  window.localStorage.setItem('collections', JSON.stringify(collections));
};

const saveCollection = (value: Collection) => {
  let collections: Array<Collection> = getCollectionsFromLocal();

  let existingIndex = collections.findIndex((c) => c.id === value.id);
  if (existingIndex > -1) {
    collections.splice(existingIndex, 1);
  }

  value.totalItems = value.products?.length ?? 0;

  collections.push(value);

  window.localStorage.setItem('collections', JSON.stringify(collections));
};

const getCollection = (id: string) => {
  let collections: Array<Collection> = getCollectionsFromLocal();
  return collections.filter((c) => c.id === id)[0];
};

const deleteCollection = (id: string) => {
  let collections: Array<Collection> = getCollectionsFromLocal();
  let existingIndex = collections.findIndex((c) => c.id === id);
  if (existingIndex > -1) {
    collections.splice(existingIndex, 1);
  }

  window.localStorage.setItem('collections', JSON.stringify(collections));
};

const getCollectionsFromLocal = () => {
  let collections: Array<Collection> = [];
  let collectionsJson = window.localStorage.getItem('collections');
  if (collectionsJson) {
    collections = JSON.parse(collectionsJson);
  }

  return collections;
};

const LocalDbService = {
  getCollections,
  createCollection,
  getCollection,
  saveCollection,
  deleteCollection
};

export default LocalDbService;
