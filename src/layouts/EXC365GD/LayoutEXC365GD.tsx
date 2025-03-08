import './LayoutEXC365GD.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../contexts/fullScreen';

import { ButtonToggleColorMode } from './EXC365GD/components/ButtonToggleColorMode';
import { ButtonToggleFS } from './EXC365GD/components/ButtonToggleFS';

export const LayoutEXC365GD = () => {
  const { isFSEnabled, fSHandle } = useFullScreen();

  if (!fSHandle) return null;

  return (
    <div className={'exc365GD-body'}>
      <FullScreen handle={fSHandle}>
        <div className='layout-container'>
          <div className='layout-buttons-container'>
            {isFSEnabled && <ButtonToggleFS />}
            <ButtonToggleColorMode />
          </div>
          <Outlet />
        </div>
      </FullScreen>
    </div>
  );
};
