import { FC } from 'react';
import caretDown from '../../assets/img/caret-down.svg';
import search from '../../assets/img/search.svg';

const CollectionsTopBar: FC = () => {
  return (
    <div className='h-full w-full border-b border-lighterGray relative'>
      {/* Search Bar */}
      <div className='flex h-full absolute left-6 items-center space-x-2'>
        <img src={search} alt='' className='h-5' />
        <input
          type='text'
          className='border-none shadow-none outline-0 h-5 text-black placeholder:font-avenir placeholder:text-lighterGray placeholder:font-medium'
          placeholder='Search Collections'></input>
      </div>
      {/* Profile Section */}
      <div className='h-full absolute right-6 hover:cursor-pointer'>
        <div className='flex h-full items-center space-x-2'>
          <img
            src='https://www.gravatar.com/avatar/e636ddd50e105910d5d7fc2dd0835ece'
            alt=''
            className='rounded-full h-7'
          />
          <div className='text-black font-avenir font-medium text-sm'>
            Joe MacLennan
          </div>
          <img src={caretDown} alt='' />
        </div>
        {/* TODO: Figure out popover */}
      </div>
    </div>
  );
};

export default CollectionsTopBar;
