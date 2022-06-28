import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const AppLayout: FC = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex w-1/6'>
        <NavBar />
      </div>
      <div className='flex w-5/6'>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
