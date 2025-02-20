import { useFullScreen } from '../contexts/fullScreen';

import { IconExpand } from './icons/Expand';
import { IconCompress } from './icons/Compress';

export const ButtonToggleFS = () => {
  const { isFS, toggleFS } = useFullScreen();

  return (
    <div className='button layout-button' onClick={toggleFS}>
      {isFS ? <IconCompress /> : <IconExpand />}
    </div>
  );
};
