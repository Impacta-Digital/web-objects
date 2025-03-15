import { ButtonRevealPlayer } from '../../content/ButtonRevealPlayer';

export interface ViewResponseButtonProps {
  videoId: string;
}

export const ViewResponseButton = (props: ViewResponseButtonProps) => {
  return (
    <>
      {/* - - - - - spacer */}
      <div className='verticalSpacer' />

      <ButtonRevealPlayer buttonText='Ver Laboratório Resolvido' {...props} />

      {/* - - - - - spacer */}
      <div className='verticalSpacer' />
      <div className='verticalSpacer' />
    </>
  );
};
