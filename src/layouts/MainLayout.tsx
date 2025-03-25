import './MainLayout.css';

import { Outlet } from 'react-router-dom';
import { PageFooter } from '../components/layout/PageFooter';

export interface MainLayoutProps {
  footerTitle: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className='layoutContainer'>
      <Outlet />
      <PageFooter title={props.footerTitle} />
    </div>
  );
};
