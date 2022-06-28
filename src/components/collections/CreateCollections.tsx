import { FC } from 'react';
import plus from '../../assets/img/plus.svg';

const CreateCollections: FC = () => {
  return (
    <div className='flex w-full h-full bg-[url("/src/assets/img/collection-boxes.png")] bg-no-repeat bg-right'>
      <div className='flex flex-col ml-14 mt-28'>
        <div className='text-black font-bold text-2xl mb-2.5'>
          Creating a Collection
        </div>
        <div className='text-black text-sm font-normal max-w-md mb-9'>
          Welcome to Collections! This is where you’ll start your process of
          linking the items you want, together. Create a collection to keep all
          of your styles in. Some brands like to create colelctions for seasons,
          specific styles, or by year. Click “Create Collection” to get started.
        </div>
        <button className='flex h-10 w-44 items-center justify-center bg-primary rounded hover:opacity-70'>
          <img src={plus} alt='' />
          <div className='text-white text-sm font-normal ml-2'>
            Create Collection
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreateCollections;
