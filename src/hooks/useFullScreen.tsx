import { useContext } from 'react';
import { FullScreenContext } from '../contexts/FullScreenContext';

export const useFullScreen = () => {
  const context = useContext(FullScreenContext);
  if (!context) {
    throw new Error('useFullScreen must be used within a FullScreenProvider');
  }
  return context;
};
