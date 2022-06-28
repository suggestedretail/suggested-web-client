import { FC, useState } from 'react';
import close from '../../assets/img/close.svg';
import plus from '../../assets/img/plus.svg';

const CreateCollectionsPage: FC = () => {
  const [showPanel, setShowPanel] = useState<boolean>();

  return (
    <div className='flex w-full h-full bg-[url("/src/assets/img/collection-boxes.png")] bg-no-repeat bg-right relative'>
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
      {/* Panel */}
      <div
        className={
          'flex flex-col absolute right-px h-full max-h-full bg-white w-96 shadow-xl rounded transition ease-in-out duration-300' +
          (showPanel ? ' block' : ' hidden')
        }>
        <div className='h-32 bg-primary p-6'>
          <div className='flex flex-col space-y-1'>
            <div className='flex relative'>
              <div className='font-inter text-white font-medium text-lg'>
                New Project
              </div>
              <img
                className='absolute right-px hover:cursor-pointer'
                src={close}
                alt=''
                onClick={() => setShowPanel(false)}
              />
            </div>
            <div className='font-inter text-white text-sm font-normal'>
              Get started by filling in the information below to create your new
              collection.
            </div>
          </div>
        </div>
        <div className='p-6'>
          <div className='flex flex-col space-y-6'>
            <div className='flex flex-col space-y-1'>
              <div className='font-avenir text-gray-700 text-sm font-medium'>
                Collection Name
              </div>
              <input
                type='text'
                className='h-10 border border-gray-300 rounded-md py-2 px-3 outline-0 shadow-sm order-1 self-stretch grow-0 flex-none'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='font-avenir text-gray-700 text-sm font-medium'>
                Description
              </div>
              <textarea className='h-28 max-h-80 border border-gray-300 rounded-md py-2 px-3 outline-0 shadow-sm order-1 self-stretch grow flex-none' />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end p-6 space-x-5 mt-auto'>
          <button
            className='w-20 h-10 border border-gray-300 rounded-md font-avenir text-gray-700 text-sm font-medium shadow-sm'
            onClick={() => setShowPanel(false)}>
            Cancel
          </button>
          <button className='w-20 h-10 bg-primary rounded-md font-avenir text-white text-sm font-medium shadow-sm hover:opacity-70'>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCollectionsPage;
