import './MainLayout.css';

import { Outlet } from 'react-router-dom';
import { FullScreen } from 'react-full-screen';
import { useFullScreen } from '../hooks/useFullScreen';

import { ButtonToggleFS } from './EXC365GD/components/ButtonToggleFS';

import { PageFooter } from '../components/layout/PageFooter';

export interface MainLayoutProps {
  footerTitle: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { isFSEnabled, fSHandle } = useFullScreen();

  if (!fSHandle) {
    return null;
  }

  return (
    <FullScreen handle={fSHandle}>
      <div className='layoutContainer'>
        <div className='fullWrapper'>
          {isFSEnabled && (
            <div className='floatingButtonContainer'>
              <ButtonToggleFS />
            </div>
          )}

          <Outlet />
        </div>

        <PageFooter title={props.footerTitle} />
      </div>
    </FullScreen>
  );
};
