import '../styles/_reset.css';
import '../styles/_global.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../contexts/fullScreen';
import usePlatform from '../hooks/usePlatform';

export const FullScreenLayout = () => {
  const { isDesktopOrTablet } = usePlatform();
  const { toggleFullScreen, isFullScreen, fullScreenHandle } = useFullScreen();

  return (
    <>
      {isDesktopOrTablet && (
        <button onClick={toggleFullScreen} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
          {isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
      )}
      {isDesktopOrTablet && fullScreenHandle ? (
        <FullScreen handle={fullScreenHandle}>
          <Outlet />
        </FullScreen>
      ) : (
        <Outlet />
      )}
    </>
  );
};
