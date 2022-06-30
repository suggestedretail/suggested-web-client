import { FC, useState } from 'react';
import plus from '../../assets/img/plus.svg';
import CreateCollectionPanel from './CreateCollectionPanel';

const CreateCollectionsView: FC = () => {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  return (
    <div className='flex w-full h-full bg-[url("/src/assets/img/collection-boxes.png")] bg-no-repeat bg-right'>
      <div className='flex flex-col ml-14 mt-28'>
        <div className='font-lato text-black font-bold text-2xl mb-2.5'>
          Creating a Collection
        </div>
        <div className='font-avenir text-black text-sm font-normal max-w-md mb-9'>
          Welcome to Collections! This is where you’ll start your process of
          linking the items you want, together. Create a collection to keep all
          of your styles in. Some brands like to create colelctions for seasons,
          specific styles, or by year. Click “Create Collection” to get started.
        </div>
        <button
          className='flex h-10 w-44 items-center justify-center bg-primary rounded hover:opacity-70'
          onClick={() => setShowPanel(true)}>
          <img src={plus} alt='' />
          <div className='font-lato text-white text-sm font-normal ml-2'>
            Create Collection
          </div>
        </button>
      </div>
      <CreateCollectionPanel
        showPanel={showPanel}
        onClose={() => setShowPanel(false)}
      />
    </div>
  );
};

export default CreateCollectionsView;
