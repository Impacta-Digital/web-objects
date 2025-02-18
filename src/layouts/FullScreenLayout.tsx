import '../styles/_reset.css';
import '../styles/_global.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../contexts/fullScreen';

export const FullScreenLayout = () => {
  const { isFSEnabled, toggleFS, isFS, fSHandle } = useFullScreen();

  return (
    <>
      {isFSEnabled && (
        <button onClick={toggleFS} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
          {isFS ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
      )}
      {isFSEnabled && fSHandle ? (
        <FullScreen handle={fSHandle}>
          <Outlet />
        </FullScreen>
      ) : (
        <Outlet />
      )}
    </>
  );
};
