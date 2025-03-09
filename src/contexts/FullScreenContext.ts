/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';
import { FullScreenHandle } from 'react-full-screen';

export interface FullScreenContextValue {
  isFS: boolean;
  isFSEnabled: boolean;
  fSHandle?: FullScreenHandle;
  enterFS: () => void;
  exitFS: () => void;
  toggleFS: () => void;
}

export const FullScreenContext = createContext<FullScreenContextValue>({
  isFS: false,
  isFSEnabled: false,
  fSHandle: undefined,
  enterFS: () => {},
  exitFS: () => {},
  toggleFS: () => {},
});
