import { useFullScreen } from '../../contexts/fullScreen';

import { IconExpand } from '../../components/EXC365GD/icons/Expand';
import { IconCompress } from '../../components/EXC365GD/icons/Compress';

export const ButtonToggleFS = () => {
  const { isFS, toggleFS } = useFullScreen();

  return (
    <div className='button layout-button' onClick={toggleFS}>
      {isFS ? <IconCompress /> : <IconExpand />}
    </div>
  );
};
