import { FC, useState } from 'react';
import plus from '../../assets/img/plus.svg';
import { CollectionMetadata } from '../../models/CollectionMetadata';
import CollectionsTable from './CollectionsTable';
import CreateCollectionPanel from './CreateCollectionPanel';

interface CollectionsViewProps {
  collections: Array<CollectionMetadata>;
}

const CollectionsView: FC<CollectionsViewProps> = (props) => {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  return (
    <div className={'flex flex-col w-full h-full px-10 pt-4'}>
      {/* Header */}
      <div className='flex w-full h-8'>
        <div className='font-avenir text-primary font-extrabold text-xl align-top'>
          Collections
        </div>
        <button
          className='flex h-full w-44 items-center justify-center bg-primary rounded ml-auto hover:opacity-70'
          onClick={() => setShowPanel(true)}>
          <img src={plus} alt='' />
          <div className='font-lato text-white text-sm font-normal ml-2'>
            Create Collection
          </div>
        </button>
      </div>
      <CollectionsTable collections={props.collections} />
      <CreateCollectionPanel
        showPanel={showPanel}
        onClose={() => setShowPanel(false)}
      />
    </div>
  );
};

export default CollectionsView;
