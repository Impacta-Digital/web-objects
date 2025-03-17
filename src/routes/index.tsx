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
          { path: SQL[5], element: <h1>webObject 5</h1> },
          { path: SQL[6].A, element: <h1>webObject 6A</h1> },
          { path: SQL[6].B, element: <h1>webObject 6B</h1> },
          { path: SQL[8], element: <h1>webObject 8</h1> },
          { path: SQL[9], element: <h1>webObject 9</h1> },
          { path: SQL[10], element: <h1>webObject 10</h1> },
          { path: SQL[12], element: <h1>webObject 12</h1> },
          { path: SQL[13], element: <h1>webObject 13</h1> },
          { path: SQL[14], element: <h1>webObject 14</h1> },
          { path: SQL[15], element: <h1>webObject 15</h1> },
        ],
      },
    ],
  },
]);

export default router;
