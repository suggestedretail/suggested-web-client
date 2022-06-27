import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const AppLayout: FC = () => {
  return (
    <div className='flex'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
