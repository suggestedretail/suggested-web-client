import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const NavBar: FC = () => {
  const location = useLocation();

  useEffect(() => {
    let paths = location.pathname.split('/');
    if (paths && paths.length > 1) {
      let firstPath = paths[1];
      setSelectedRoute(firstPath);
    }
  }, [location]);

  const [selectedRoute, setSelectedRoute] = useState<string>();

  return (
    <div className='flex flex-col bg-secondary w-64 h-screen space-y-6'>
      <Link to='/' onClick={() => setSelectedRoute('')}>
        <img src={logo} alt='' className='w-[80%]' />
      </Link>
      <nav className='flex flex-col space-y-2 items-center'>
        {navBarItems.map((i) => (
          <NavBarListItem
            imgSrc={i.imgSrc}
            imgSrcAlt={i.imgSrcAlt}
            title={i.title}
            route={i.route}
            // onClick={() => setSelectedRoute(i.title.toLowerCase())}
            selected={selectedRoute === i.title.toLowerCase()}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
