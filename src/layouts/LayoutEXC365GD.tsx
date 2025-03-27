import './LayoutEXC365GD.css';

import { Outlet } from 'react-router-dom';
import { useIframeUrl } from '../hooks/useIframeUrl';

import { PageFooter } from '../components/layout/PageFooter';
import { RedirectButton } from '../components/layout/RedirectButton';

import { courseTitle } from '../pages/EXC365GD/data/courseData';
import colors from '../constants/EXC365GDcolors';

export const LayoutEXC365GD = () => {
  const iframeUrl = useIframeUrl();

  const footerTitle = (
    <>
      <span style={{ color: colors.theme }}>MÃOS À OBRA!</span>&nbsp;&nbsp;
      <span>{courseTitle}</span>
    </>
  );

  return (
    <div className='exc365GD-body'>
      <div className='layoutContainer'>
        <div className='fullWrapper'>
          <div className='layoutButtonContainer'>
            {iframeUrl && <RedirectButton iframeUrl={iframeUrl} layoutType='EXC365' />}
          </div>
          <Outlet />
        </div>
        <PageFooter title={footerTitle} />
      </div>
    </div>
  );
};
