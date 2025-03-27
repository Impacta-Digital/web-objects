import { IconNewTab } from '../icons/NewTab';

export const RedirectButton = ({ iframeUrl }: { iframeUrl: string }) => {
  const openNewTab = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(iframeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <a href='#' onClick={openNewTab} target='_blank' rel='noopener noreferrer'>
      <div className='button layoutButton'>
        <IconNewTab aria-hidden='true' />
        <span className='visuallyHidden'>Abrir este conteúdo em uma nova aba</span>
      </div>
    </a>
  );
};
