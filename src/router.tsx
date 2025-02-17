import { createBrowserRouter, Outlet } from 'react-router-dom';
import { path as EXC365GD } from './routes/EXC365GD';

const router = createBrowserRouter([
  { path: '/', element: <>{'path: /'}</> },
  {
    path: '/EXC365GD1',
    element: <Outlet />,
    children: [
      { path: EXC365GD.basic[2], element: <>{'PLACEHOLDER [Básico- Aula 2 Mãos a Obra]'}</> },
      { path: EXC365GD.basic[3], element: <>{'PLACEHOLDER [Básico- Aula 3 Mãos a Obra]'}</> },
      { path: EXC365GD.basic[4], element: <>{'PLACEHOLDER [Básico- Aula 4 Mãos a Obra]'}</> },
    ],
  },

  {
    path: '/EXC365GD2',
    element: <Outlet />,
    children: [
      { path: EXC365GD.advanced[1], element: <>{'PLACEHOLDER [Avançado - Aula 1 Mãos a Obra]'}</> },
      { path: EXC365GD.advanced[2], element: <>{'PLACEHOLDER [Avançado - Aula 2 Mãos a Obra]'}</> },
      { path: EXC365GD.advanced[3], element: <>{'PLACEHOLDER [Avançado - Aula 3 Mãos a Obra]'}</> },
      { path: EXC365GD.advanced[4], element: <>{'PLACEHOLDER [Avançado - Aula 4 Mãos a Obra]'}</> },
    ],
  },
]);

export default router;
