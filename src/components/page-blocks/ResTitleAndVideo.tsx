import { TitleAndDivider } from '../TitleAndDivider';
import { PlayerAndRevealButton } from '../PlayerAndRevealButton';

export interface ResTitleAndVideoProps {
  labNum: number;
  videoId: string;
}

export const ResTitleAndVideo = (props: ResTitleAndVideoProps) => {
  return (
    <>
      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
      <div className='vertical-spacer' />

      <TitleAndDivider title='Mãos à Obra!' subheading={`Resolução – Laboratório ${props.labNum}`} />

      <p>Quer conferir como resolvemos o exercício? Clique no botão abaixo e assista a resolução.</p>
      <PlayerAndRevealButton buttonText='Laboratório Resolvido' {...props} />
    </>
  );
};
