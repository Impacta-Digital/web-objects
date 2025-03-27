import './MainLayout.css';

import { Outlet } from 'react-router-dom';
import { useIframeUrl } from '../hooks/useIframeUrl';

import { PageFooter } from '../components/layout/PageFooter';
import { RedirectButton } from '../components/layout/RedirectButton';

export interface MainLayoutProps {
  footerTitle: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const iframeUrl = useIframeUrl();

  return (
    <div className='layoutContainer'>
      <div className='fullWrapper'>
        <div className='layoutButtonContainer'>{iframeUrl && <RedirectButton iframeUrl={iframeUrl} />}</div>
        <Outlet />
      </div>
      <PageFooter title={props.footerTitle} />
    </div>
  );
};
