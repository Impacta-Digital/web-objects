import './styles/_reset.css';
import './styles/_global.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { FullScreenContextProvider } from './contexts/FullScreenContextProvider';

import router from './routes';

createRoot(document.getElementById('root')!).render(
  <FullScreenContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </FullScreenContextProvider>,
);
