import './LayoutEXC365GD.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../../hooks/useFullScreen';

import { ButtonToggleColorMode } from './components/ButtonToggleColorMode';
import { ButtonToggleFS } from './components/ButtonToggleFS';

export const LayoutEXC365GD = () => {
  const { isFSEnabled, fSHandle } = useFullScreen();

  if (!fSHandle) {
    return null;
  }

  return (
    <div className='exc365GD-body'>
      <FullScreen handle={fSHandle}>
        <div className='layoutContainer'>
          <div className='layoutButtonsContainer'>
            {isFSEnabled && <ButtonToggleFS />}
            <ButtonToggleColorMode />
          </div>
          <Outlet />
        </div>
      </FullScreen>
    </div>
  );
};
