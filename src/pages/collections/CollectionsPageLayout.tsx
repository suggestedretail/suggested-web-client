import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CollectionsTopBar from '../../components/collections/CollectionsTopBar';

const Collections: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/collections/create');
  }, []);

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

export default Collections;
