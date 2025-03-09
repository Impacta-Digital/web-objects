import { IconLightbulb } from '../../../components/EXC365GD/icons/Lightbulb';

export const ButtonToggleColorMode = () => {
  const toggleColorMode = () => {
    const body = document.querySelector('body');
    const fullscreen = document.querySelector('.fullscreen');

    if (body) {
      body.classList.toggle('--light-mode');
    }
    if (fullscreen) {
      fullscreen.classList.toggle('--light-mode');
    }
  };

  return (
    <div className='button layoutButton' onClick={toggleColorMode}>
      <IconLightbulb />
    </div>
  );
};
