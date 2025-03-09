import React, { useCallback, useMemo } from 'react';
import fscreen from 'fscreen';
import { useFullScreenHandle } from 'react-full-screen';
import { FullScreenContext } from './FullScreenContext';

export const FullScreenContextProvider = ({ children }: { children: React.ReactNode }) => {
  const isFSEnabled = useMemo(() => fscreen.fullscreenEnabled, []);
  const fSHandle = useFullScreenHandle();

  const enterFS = useCallback(() => {
    fSHandle.enter().catch((err) => console.error('Failed to enter fullscreen:', err));
  }, [fSHandle]);

  const exitFS = useCallback(() => {
    fSHandle.exit().catch((err) => console.error('Failed to exit fullscreen:', err));
  }, [fSHandle]);

  const toggleFS = useCallback(() => {
    if (fSHandle.active) {
      exitFS();
    } else {
      enterFS();
    }
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
    [isFSEnabled, fSHandle, enterFS, exitFS, toggleFS],
  );

  return <FullScreenContext.Provider value={value}>{children}</FullScreenContext.Provider>;
};
