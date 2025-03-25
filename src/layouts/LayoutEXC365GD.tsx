import './LayoutEXC365GD.css';

import { Outlet } from 'react-router-dom';

import { PageFooter } from '../components/layout/PageFooter';
import { courseTitle } from '../pages/EXC365GD/data/courseData';

import colors from '../constants/EXC365GDcolors';

export const LayoutEXC365GD = () => {
  const footerTitle = (
    <>
      <span style={{ color: colors.theme }}>MÃOS À OBRA!</span>&nbsp;&nbsp;
      <span>{courseTitle}</span>
    </>
  );

  return (
    <div className='exc365GD-body'>
      <div className='layoutContainer'>
        <Outlet />
        <PageFooter title={footerTitle} />
      </div>
    </div>
  );
};
