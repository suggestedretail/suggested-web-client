import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import plus from '../../assets/img/plus.svg';

const CollectionsPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-full h-full px-10 pt-4'>
      {/* Header */}
      <div className='flex w-full h-8'>
        <div className='font-avenir text-primary font-extrabold text-xl align-top'>
          Collections
        </div>
        <button
          className='flex h-full w-44 items-center justify-center bg-primary rounded ml-auto hover:opacity-70'
          onClick={() => navigate('/collections/create')}>
          <img src={plus} alt='' />
          <div className='font-lato text-white text-sm font-normal ml-2'>
            Create Collection
          </div>
        </button>
      </div>
    </div>
  );
};

export default CollectionsPage;
