import { TitleAndDivider } from '../../../components/layout/TitleAndDivider';
import { darkTheme } from '../../../constants/colors';

export const LabTitle = (props: { title: string }) => {
  return <TitleAndDivider {...props} subheading='Exercícios de Laboratório' borderColor={darkTheme.accents.primary} />;
};
