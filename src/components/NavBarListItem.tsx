import { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { NavBarItem } from '../types/NavBarItem';

interface NavBarListItemProps extends NavBarItem {
  onClick?: MouseEventHandler<HTMLElement>;
  selected?: boolean;
}

const NavBarListItem: FC<NavBarListItemProps> = (props) => {
  return (
    <Link
      key={props.title}
      to={props.route}
      onClick={props.onClick}
      className={
        'group flex flex-row items-center w-5/6 rounded hover:bg-primary' +
        (props.selected ? ' bg-primary' : '')
      }>
      <div className='my-1'>
        <img
          src={props.imgSrc}
          alt=''
          className={
            'h-[24px] ml-2 group-hover:hidden' +
            (props.selected ? ' hidden' : '')
          }
        />
        <img
          src={props.imgSrcAlt}
          alt=''
          className={
            'h-[24px] ml-2 group-hover:block' +
            (props.selected ? ' block' : ' hidden')
          }
        />
      </div>
      <div
        className={
          'ml-4 text-primary text-sm font-semibold group-hover:text-white' +
          (props.selected ? ' text-white' : '')
        }>
        {props.title}
      </div>
    </Link>
  );
};

export default NavBarListItem;
