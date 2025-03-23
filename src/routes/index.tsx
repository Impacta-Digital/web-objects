import { createBrowserRouter, Outlet } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage } from '../pages/HomePage';

import { LayoutEXC365GD } from '../layouts/EXC365GD/LayoutEXC365GD';
import { pageId as EXC365GD } from './EXC365GD';

import Basic02 from '../pages/EXC365GD/LabBasic02';
import Basic03 from '../pages/EXC365GD/LabBasic03';
import Basic04 from '../pages/EXC365GD/LabBasic04';
import Advanced01 from '../pages/EXC365GD/LabAdvanced01';
import Advanced02 from '../pages/EXC365GD/LabAdvanced02';
import Advanced03 from '../pages/EXC365GD/LabAdvanced03';
import Advanced04 from '../pages/EXC365GD/LabAdvanced04';

import { pageId as SQL } from './SQL';
import { courseTitle } from '../pages/SQL/data/courseData';
import { SQL_IntroPage } from '../pages/SQL/IntroPage';
import { SQL_Lab02 } from '../pages/SQL/Lab02';
import { SQL_Lab05 } from '../pages/SQL/Lab05';
import { SQL_Lab06A } from '../pages/SQL/Lab06A';
import { SQL_Lab06B } from '../pages/SQL/Lab06B';
import { SQL_Lab08 } from '../pages/SQL/Lab08';
import { SQL_Lab09 } from '../pages/SQL/Lab09';
import { SQL_Lab10 } from '../pages/SQL/Lab10';
import { SQL_Lab12 } from '../pages/SQL/Lab12';
import { SQL_Lab13 } from '../pages/SQL/Lab13';
import { SQL_Lab14 } from '../pages/SQL/Lab14';
import { SQL_Lab15 } from '../pages/SQL/Lab15';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: EXC365GD.basic.path,
        element: <LayoutEXC365GD />,
        children: [
          { index: true, element: <HomePage /> },
          { path: EXC365GD.basic[2], element: <Basic02 /> },
          { path: EXC365GD.basic[3], element: <Basic03 /> },
          { path: EXC365GD.basic[4], element: <Basic04 /> },
        ],
      },
      {
        path: EXC365GD.advanced.path,
        element: <LayoutEXC365GD />,
        children: [
          { index: true, element: <HomePage /> },
          { path: EXC365GD.advanced[1], element: <Advanced01 /> },
          { path: EXC365GD.advanced[2], element: <Advanced02 /> },
          { path: EXC365GD.advanced[3], element: <Advanced03 /> },
          { path: EXC365GD.advanced[4], element: <Advanced04 /> },
        ],
      },
      {
        path: SQL.path,
        element: <MainLayout footerTitle={courseTitle} />,
        children: [
          { index: true, element: <HomePage /> },
          { path: SQL.intro, element: <SQL_IntroPage /> },
          { path: SQL[2], element: <SQL_Lab02 /> },
          { path: SQL[5], element: <SQL_Lab05 /> },
          { path: SQL[6].A, element: <SQL_Lab06A /> },
          { path: SQL[6].B, element: <SQL_Lab06B /> },
          { path: SQL[8], element: <SQL_Lab08 /> },
          { path: SQL[9], element: <SQL_Lab09 /> },
          { path: SQL[10], element: <SQL_Lab10 /> },
          { path: SQL[12], element: <SQL_Lab12 /> },
          { path: SQL[13], element: <SQL_Lab13 /> },
          { path: SQL[14], element: <SQL_Lab14 /> },
          { path: SQL[15], element: <SQL_Lab15 /> },
        ],
      },
    ],
  },
]);

export default router;
