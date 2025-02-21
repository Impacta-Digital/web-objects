import { PlayerAndRevealButton } from '../content/PlayerAndRevealButton';

export interface ViewResponseButtonProps {
  videoId: string;
}

export const ViewResponseButton = (props: ViewResponseButtonProps) => {
  return (
    <>
      {/* - - - - - spacer */}
      <div className='vertical-spacer' />

      <PlayerAndRevealButton buttonText='Ver Laboratório Resolvido' {...props} />

      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
      <div className='vertical-spacer' />
    </>
  );
};
