import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Analytics from './pages/Analytics';
import Archive from './pages/Archive';
import Collections from './pages/Collections';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='collections' element={<Collections />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='archive' element={<Archive />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
