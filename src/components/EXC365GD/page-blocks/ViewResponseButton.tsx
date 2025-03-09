import { PlayerAndRevealButton } from '../content/PlayerAndRevealButton';

export interface ViewResponseButtonProps {
  videoId: string;
}

export const ViewResponseButton = (props: ViewResponseButtonProps) => {
  return (
    <>
      {/* - - - - - spacer */}
      <div className='verticalSpacer' />

      <PlayerAndRevealButton buttonText='Ver Laboratório Resolvido' {...props} />

      {/* - - - - - spacer */}
      <div className='verticalSpacer' />
      <div className='verticalSpacer' />
    </>
  );
};
