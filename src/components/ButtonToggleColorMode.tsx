import { IconLightbulb } from './icons/Lightbulb';

export const ButtonToggleColorMode = () => {
  const toggleColorMode = () => {
    const body = document.querySelector('body');
    const fullscreen = document.querySelector('.fullscreen');
    const h1 = document.querySelector('h1');

    if (body) body.classList.toggle('--light-mode');
    if (fullscreen) fullscreen.classList.toggle('--light-mode');
    if (h1) h1.classList.toggle('--light-mode');
  };

  return (
    <div className='layout-button' onClick={toggleColorMode}>
      {<IconLightbulb />}
    </div>
  );
};
