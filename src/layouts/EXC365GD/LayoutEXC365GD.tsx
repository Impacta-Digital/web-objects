import './LayoutEXC365GD.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../../hooks/useFullScreen';

import { ButtonToggleColorMode } from './components/ButtonToggleColorMode';
import { ButtonToggleFS } from './components/ButtonToggleFS';
import { PageFooter } from '../../components/layout/PageFooter';
import { courseTitle } from '../../pages/EXC365GD/data/courseData';
import colors from '../../constants/EXC365GDcolors';

export const LayoutEXC365GD = () => {
  const { isFSEnabled, fSHandle } = useFullScreen();

  if (!fSHandle) {
    return null;
  }

  const footerTitle = (
    <>
      <span style={{ color: colors.theme }}>MÃOS À OBRA!</span>&nbsp;&nbsp;
      <span>{courseTitle}</span>
    </>
  );

  return (
    <div className='exc365GD-body'>
      <FullScreen handle={fSHandle}>
        <div className='layoutContainer'>
          <div className='layoutButtonsContainer'>
            {isFSEnabled && <ButtonToggleFS />}
            <ButtonToggleColorMode />
          </div>
          <Outlet />

          <PageFooter title={footerTitle} />
        </div>
      </FullScreen>
    </div>
  );
};
