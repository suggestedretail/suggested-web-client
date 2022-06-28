import { FC, useState } from 'react';
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
    },
    {
      title: 'Inventory',
      route: '/inventory',
      imgSrc: shoppingBag,
      imgSrcAlt: shoppingBagAlt
    },
    {
      title: 'Archive',
      route: '/archive',
      imgSrc: archive,
      imgSrcAlt: archiveAlt
    },
    {
      title: 'Analytics',
      route: '/analytics',
      imgSrc: barChart,
      imgSrcAlt: barChartAlt
    },
    {
      title: 'Settings',
      route: '/settings',
      imgSrc: settings,
      imgSrcAlt: settingsAlt
    }
  ];

  const [selectedRoute, setSelectedRoute] = useState<string>('Collections');

  return (
    <div className='flex flex-col bg-secondary w-64 h-screen space-y-6'>
      <img src={logo} alt='' className='max-w-[80%]' />
      <nav className='flex flex-col space-y-2 items-center'>
        {navBarItems.map((i) => (
          <NavBarListItem
            imgSrc={i.imgSrc}
            imgSrcAlt={i.imgSrcAlt}
            title={i.title}
            route={i.route}
            onClick={() => setSelectedRoute(i.title)}
            selected={selectedRoute === i.title}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
