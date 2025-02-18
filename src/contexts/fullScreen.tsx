import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useFullScreenHandle, FullScreenHandle } from 'react-full-screen';
import fscreen from 'fscreen';

interface FullScreenContextValue {
  isFS: boolean;
  isFSEnabled: boolean;
  fSHandle?: FullScreenHandle;
  enterFS: () => Promise<void>;
  exitFS: () => Promise<void>;
  toggleFS: () => Promise<void>;
}

const FullScreenContext = createContext<FullScreenContextValue>({
  isFS: false,
  isFSEnabled: false,
  fSHandle: undefined,
  enterFS: async () => {},
  exitFS: async () => {},
  toggleFS: async () => {},
});

export const FullScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const isFSEnabled = useMemo(() => fscreen.fullscreenEnabled, []);
  const fSHandle = useFullScreenHandle();

  const enterFS = useCallback(async () => {
    try {
      await fSHandle.enter();
    } catch (error) {
      console.error('Failed to enter fullscreen:', error);
    }
  }, [fSHandle]);

  const exitFS = useCallback(async () => {
    try {
      await fSHandle.exit();
    } catch (error) {
      console.error('Failed to exit fullscreen:', error);
    }
  }, [fSHandle]);

  const toggleFS = useCallback(async () => {
    fSHandle.active ? await exitFS() : await enterFS();
  }, [fSHandle.active, enterFS, exitFS]);

  const value = useMemo(
    () => ({
      isFS: fSHandle.active,
      isFSEnabled,
      fSHandle,
      enterFS,
      exitFS,
      toggleFS,
    }),
    [fSHandle.active, isFSEnabled, fSHandle, enterFS, exitFS, toggleFS],
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
