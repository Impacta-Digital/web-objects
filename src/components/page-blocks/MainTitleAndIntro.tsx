import { TitleAndDivider } from '../TitleAndDivider';

export interface MainTitleAndIntroProps {
  subheading: string;
}

export const MainTitleAndIntro = (props: MainTitleAndIntroProps) => {
  return (
    <>
      <TitleAndDivider title='Mãos à Obra!' {...props} />
      <p>
        Antes de irmos para o laboratório, atente para os tópicos a seguir. Eles devem ser estudados com muita atenção,
        pois representam os pontos mais importantes dessa aula.
      </p>

      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
    </>
  );
};
