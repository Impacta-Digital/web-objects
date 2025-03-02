import { createBrowserRouter, Outlet } from 'react-router-dom';
import { pageId as EXC365GD } from './EXC365GD';

import { EXC365GDLayout } from '../layouts/EXC365GD';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage';

import Basic02 from '../pages/EXC365GD1/LabBasic02';
import Basic03 from '../pages/EXC365GD1/LabBasic03';
import Basic04 from '../pages/EXC365GD1/LabBasic04';
import Advanced01 from '../pages/EXC365GD2/LabAdvanced01';
import Advanced02 from '../pages/EXC365GD2/LabAdvanced02';
import Advanced03 from '../pages/EXC365GD2/LabAdvanced03';
import Advanced04 from '../pages/EXC365GD2/LabAdvanced04';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'EXC365GD1/',
        element: <EXC365GDLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: EXC365GD.basic[2], element: <Basic02 /> },
          { path: EXC365GD.basic[3], element: <Basic03 /> },
          { path: EXC365GD.basic[4], element: <Basic04 /> },
        ],
      },
      {
        path: 'EXC365GD2/',
        element: <EXC365GDLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: EXC365GD.advanced[1], element: <Advanced01 /> },
          { path: EXC365GD.advanced[2], element: <Advanced02 /> },
          { path: EXC365GD.advanced[3], element: <Advanced03 /> },
          { path: EXC365GD.advanced[4], element: <Advanced04 /> },
        ],
      },
    ],
  },
]);

export default router;
