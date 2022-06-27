import { FC } from 'react';
import { NavBarItem } from '../types/NavBarItem';

const NavBarListItem: FC<NavBarItem> = (props) => {
  return (
    <li className='group hover:bg-primary rounded'>
      <a href={props.route} className='flex flex-row items-center'>
        <div className='my-1'>
          <img
            src={props.imgSrc}
            alt=''
            className='group-hover:hidden h-[24px] ml-2'
          />
          <img
            src={props.imgSrcAlt}
            alt=''
            className='hidden h-[24px] ml-2 group-hover:block'
          />
        </div>
        <div className='ml-4 text-primary text-sm font-semibold group-hover:text-white'>
          {props.title}
        </div>
      </a>
    </li>
  );
};

export default NavBarListItem;
