import { useFullScreen } from '../../../hooks/useFullScreen';

import { IconExpand } from '../../../components/icons/Expand';
import { IconCompress } from '../../../components/icons/Compress';

export const ButtonToggleFS = () => {
  const { isFS, toggleFS } = useFullScreen();

  return (
    <div className='button layoutButton' onClick={() => toggleFS()}>
      {isFS ? <IconCompress /> : <IconExpand />}
    </div>
  );
};
