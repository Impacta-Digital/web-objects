import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useFullScreenHandle, FullScreenHandle } from 'react-full-screen';

interface FullScreenContextValue {
  isFullScreen: boolean;
  enterFullScreen: () => Promise<void>;
  exitFullScreen: () => Promise<void>;
  toggleFullScreen: () => Promise<void>;
  fullScreenHandle?: FullScreenHandle;
}

const FullScreenContext = createContext<FullScreenContextValue>({
  isFullScreen: false,
  enterFullScreen: async () => {},
  exitFullScreen: async () => {},
  toggleFullScreen: async () => {},
  fullScreenHandle: undefined,
});

export const FullScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const fullScreenHandle = useFullScreenHandle();

  const enterFullScreen = useCallback(async () => {
    try {
      await fullScreenHandle.enter();
    } catch (error) {
      console.error('Failed to enter fullscreen:', error);
    }
  }, [fullScreenHandle]);

  const exitFullScreen = useCallback(async () => {
    try {
      await fullScreenHandle.exit();
    } catch (error) {
      console.error('Failed to exit fullscreen:', error);
    }
  }, [fullScreenHandle]);

  const toggleFullScreen = useCallback(async () => {
    fullScreenHandle.active ? await exitFullScreen() : await enterFullScreen();
  }, [fullScreenHandle.active, enterFullScreen, exitFullScreen]);

  const value = useMemo(
    () => ({
      isFullScreen: fullScreenHandle.active,
      enterFullScreen,
      exitFullScreen,
      toggleFullScreen,
      fullScreenHandle,
    }),
    [fullScreenHandle.active, enterFullScreen, exitFullScreen, toggleFullScreen, fullScreenHandle],
  );

  return <FullScreenContext.Provider value={value}>{children}</FullScreenContext.Provider>;
};

export const useFullScreen = () => {
  const context = useContext(FullScreenContext);
  if (!context) {
    throw new Error('useFullScreen must be used within a FullScreenProvider');
  }
  return context;
};
