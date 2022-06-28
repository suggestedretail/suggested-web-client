import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import CollectionsTopBar from '../../components/collections/CollectionsTopBar';

const CollectionsPageLayout: FC = () => {
  return (
    <div id='CollectionsPage' className='flex flex-col w-full h-full'>
      <div className='h-14 w-full'>
        <CollectionsTopBar />
      </div>
      <div className='w-full h-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default CollectionsPageLayout;
