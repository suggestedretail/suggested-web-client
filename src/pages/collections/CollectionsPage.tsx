import { FC, useEffect, useState } from 'react';
import CollectionsTopBar from '../../components/collections/CollectionsTopBar';
import CollectionsView from '../../components/collections/CollectionsView';
import CreateCollectionsView from '../../components/collections/CreateCollectionsView';
import { CollectionMetadata } from '../../models/CollectionMetadata';
import LocalDbService from '../../services/LocalDbService';

const CollectionsPage: FC = () => {
  const [collections, setCollections] = useState<Array<CollectionMetadata>>([]);

  useEffect(() => {
    setCollections(LocalDbService.getCollections());
  }, []);

  return (
    <div id='CollectionsPage' className='flex flex-col w-full h-full'>
      <div className='h-14 w-full'>
        <CollectionsTopBar />
      </div>
      <div className='w-full h-full'>
        {collections && collections.length > 0 ? (
          <CollectionsView collections={collections} />
        ) : (
          <CreateCollectionsView />
        )}
      </div>
    </div>
  );
};

export default CollectionsPage;
