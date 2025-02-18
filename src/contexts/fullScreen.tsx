import React, { createContext, useContext, useCallback, useMemo } from 'react';
import fscreen from 'fscreen';
import { useFullScreenHandle, FullScreenHandle } from 'react-full-screen';

interface FullScreenContextValue {
  isFS: boolean;
  enterFS: () => Promise<void>;
  exitFS: () => Promise<void>;
  toggleFS: () => Promise<void>;
  fSHandle?: FullScreenHandle;
  isFSEnabled: boolean;
}

const FullScreenContext = createContext<FullScreenContextValue>({
  isFS: false,
  enterFS: async () => {},
  exitFS: async () => {},
  toggleFS: async () => {},
  fSHandle: undefined,
  isFSEnabled: false,
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
      enterFS,
      exitFS,
      toggleFS,
      fSHandle,
      isFSEnabled,
    }),
    [fSHandle.active, enterFS, exitFS, toggleFS, fSHandle, isFSEnabled],
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
