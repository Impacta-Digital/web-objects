import { Tooltip } from 'react-tooltip';
import { IconNewTab } from '../icons/NewTab';
import { darkTheme as mainColors } from '../../constants/colors';
import { darkTheme as EXC365Colors } from '../../constants/EXC365GDcolors';

type LayoutType = 'main' | 'EXC365';

export const RedirectButton = ({ iframeUrl, layoutType }: { iframeUrl: string; layoutType: LayoutType }) => {
  const openNewTab = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(iframeUrl, '_blank', 'noopener,noreferrer');
  };

  const colors = layoutType === 'EXC365' ? EXC365Colors : mainColors;

  return (
    <>
      <Tooltip
        id='redirectButton'
        place='left'
        offset={15}
        style={{
          backgroundColor: colors.accent.primary,
          color: colors.foreground,
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
