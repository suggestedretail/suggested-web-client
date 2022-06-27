import { FC } from 'react';
import archiveAlt from '../assets/img/archive-alt.svg';
import archive from '../assets/img/archive.svg';
import barChartAlt from '../assets/img/bar-chart-alt.svg';
import barChart from '../assets/img/bar-chart.svg';
import layersAlt from '../assets/img/layers-alt.svg';
import layers from '../assets/img/layers.svg';
import logo from '../assets/img/logo.svg';
import settingsAlt from '../assets/img/settings-alt.svg';
import settings from '../assets/img/settings.svg';
import shoppingBagAlt from '../assets/img/shopping-bag-alt.svg';
import shoppingBag from '../assets/img/shopping-bag.svg';
import { NavBarItem } from '../types/NavBarItem';
import NavBarListItem from './NavBarListItem';

const NavBar: FC = () => {
  const navBarItems: Array<NavBarItem> = [
    {
      title: 'Collections',
      route: '/collections',
      imgSrc: layers,
      imgSrcAlt: layersAlt
    }
  ];

  return (
    <div className='flex flex-col bg-secondary w-64 h-screen space-y-6'>
      <img src={logo} alt='' className='max-w-[80%]' />
      <ul className='flex flex-col space-y-2 ml-4 w-52'>
        {navBarItems.map((i) => (
          <NavBarListItem
            imgSrc={i.imgSrc}
            imgSrcAlt={i.imgSrcAlt}
            title={i.title}
            route={i.route}
          />
        ))}
        <li className='group hover:bg-primary rounded'>
          <a href='/inventory' className='flex flex-row items-center'>
            <div className='my-1'>
              <img
                src={shoppingBag}
                alt=''
                className='group-hover:hidden h-[24px] ml-2'
              />
              <img
                src={shoppingBagAlt}
                alt=''
                className='hidden h-[24px] ml-2 group-hover:block'
              />
            </div>
            <div className='ml-4 text-primary text-sm font-semibold group-hover:text-white'>
              Inventory
            </div>
          </a>
        </li>
        <li className='group hover:bg-primary rounded'>
          <a href='/archive' className='flex flex-row items-center'>
            <div className='my-1'>
              <img
                src={archive}
                alt=''
                className='group-hover:hidden h-[24px] ml-2'
              />
              <img
                src={archiveAlt}
                alt=''
                className='hidden h-[24px] ml-2 group-hover:block'
              />
            </div>
            <div className='ml-4 text-primary text-sm font-semibold group-hover:text-white'>
              Archive
            </div>
          </a>
        </li>
        <li className='group hover:bg-primary rounded'>
          <a href='/analytics' className='flex flex-row items-center'>
            <div className='my-1'>
              <img
                src={barChart}
                alt=''
                className='group-hover:hidden h-[24px] ml-2'
              />
              <img
                src={barChartAlt}
                alt=''
                className='hidden h-[24px] ml-2 group-hover:block'
              />
            </div>
            <div className='ml-4 text-primary text-sm font-semibold group-hover:text-white'>
              Analytics
            </div>
          </a>
        </li>
        <li className='group hover:bg-primary rounded'>
          <a href='/settings' className='flex flex-row items-center'>
            <div className='my-0.5'>
              <img
                src={settings}
                alt=''
                className='group-hover:hidden h-[30px] ml-1'
              />
              <img
                src={settingsAlt}
                alt=''
                className='hidden h-[30px] ml-1 group-hover:block'
              />
            </div>
            <div className='ml-3 text-primary text-sm font-semibold group-hover:text-white'>
              Settings
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
