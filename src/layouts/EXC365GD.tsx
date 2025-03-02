import '../styles/_reset.css';
import '../styles/EXC365GD.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../contexts/fullScreen';

import { ButtonToggleColorMode } from './components/ButtonToggleColorMode';
import { ButtonToggleFS } from './components/ButtonToggleFS';

export const EXC365GDLayout = () => {
  const { isFSEnabled, fSHandle } = useFullScreen();

  if (!fSHandle) return null;

  return (
    <FullScreen handle={fSHandle}>
      <div className='layout-container'>
        <div className='layout-buttons-container'>
          {isFSEnabled && <ButtonToggleFS />}
          <ButtonToggleColorMode />
        </div>
        <Outlet />
      </div>
    </FullScreen>
  );
};
