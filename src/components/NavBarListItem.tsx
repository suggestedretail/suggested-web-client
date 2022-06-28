import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarItem } from '../types/NavBarItem';

const NavBarListItem: FC<NavBarItem> = (props) => {
  return (
    <NavLink
      key={props.title}
      to={props.route}
      className={({ isActive }) =>
        'group flex flex-row items-center w-5/6 rounded hover:bg-primary' +
        (isActive ? ' bg-primary' : '')
      }>
      <div className='my-1'>
        <img
          src={props.imgSrc}
          alt=''
          className={
            'block h-6 ml-2 group-hover:hidden group-aria-current-page:hidden'
          }
        />
        <img
          src={props.imgSrcAlt}
          alt=''
          className={
            'hidden h-6 ml-2 group-hover:block group-aria-current-page:block'
          }
        />
      </div>
      <div
        className={
          'ml-4 font-avenir text-primary text-sm font-semibold group-hover:text-white group-aria-current-page:text-white'
        }>
        {props.title}
      </div>
    </NavLink>
  );
};

export default NavBarListItem;
