import { useFullScreen } from '../../../hooks/useFullScreen';

import { IconExpand } from '../../../components/EXC365GD/icons/Expand';
import { IconCompress } from '../../../components/EXC365GD/icons/Compress';

export const ButtonToggleFS = () => {
  const { isFS, toggleFS } = useFullScreen();

  return (
    <div className='button layoutButton' onClick={() => toggleFS()}>
      {isFS ? <IconCompress /> : <IconExpand />}
    </div>
  );
};
