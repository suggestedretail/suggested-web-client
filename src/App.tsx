import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Analytics from './pages/Analytics';
import Archive from './pages/Archive';
import CollectionsPage from './pages/collections/CollectionsPage';
import EditCollectionPage from './pages/collections/EditCollectionPage';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='collections' element={<CollectionsPage />} />
          <Route path='collections/edit/*' element={<EditCollectionPage />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='archive' element={<Archive />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='settings' element={<Settings />} />
          <Route path='*' element={<Navigate to='/collections' replace />} />
          <Route index element={<Navigate to='/collections' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
