import { Tooltip } from 'react-tooltip';
import { IconNewTab } from '../icons/NewTab';
import { darkTheme } from '../../constants/colors';

export const RedirectButton = ({ iframeUrl }: { iframeUrl: string }) => {
  const openNewTab = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(iframeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Tooltip
        id='redirectButton'
        place='left'
        offset={15}
        style={{
          backgroundColor: darkTheme.accent.primary,
          color: darkTheme.foreground,
          padding: '0.25rem 0.75rem 0.25rem 0.5rem',
          borderRadius: 0,
        }}
      />

      <a
        href='#'
        onClick={openNewTab}
        target='_blank'
        rel='noopener noreferrer'
        data-tooltip-id='redirectButton'
        data-tooltip-content='Abrir em nova aba'
      >
        <div className='button layoutButton'>
          <IconNewTab aria-hidden='true' />
          <span className='visuallyHidden'>Abrir este conteúdo em uma nova aba</span>
        </div>
      </a>
    </>
  );
};
