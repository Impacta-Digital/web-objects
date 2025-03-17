import { TitleAndDivider } from '../../../components/layout/TitleAndDivider';
import { darkTheme } from '../../../constants/colors';

export const LabTitle = (props: { title: string }) => {
  return <TitleAndDivider {...props} subheading='Exercício de Laboratório' borderColor={darkTheme.accents.primary} />;
};
