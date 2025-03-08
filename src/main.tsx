import './styles/_reset.css';
import './styles/_global.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { FullScreenProvider } from './contexts/fullScreen';

import router from './routes';

createRoot(document.getElementById('root')!).render(
  <FullScreenProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </FullScreenProvider>,
);
