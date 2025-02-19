import '../styles/_reset.css';
import '../styles/_global.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../contexts/fullScreen';

import { ButtonToggleColorMode } from '../components/ButtonToggleColorMode';
import { ButtonToggleFS } from '../components/ButtonToggleFS';

export const FullScreenLayout = () => {
  const { isFSEnabled, fSHandle } = useFullScreen();

  if (!fSHandle) return null;

  return (
    <FullScreen handle={fSHandle}>
      <div className='layout-container'>
        <div className='layout-button-container'>
          {isFSEnabled && <ButtonToggleFS />}
          <ButtonToggleColorMode />
        </div>

        <Outlet />
      </div>
    </FullScreen>
  );
};
