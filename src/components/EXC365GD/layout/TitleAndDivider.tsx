import colors from '../../../constants/EXC365GD/colors';

export interface TitleAndDividerProps {
  title: string;
  subheading?: string;
}

export const TitleAndDivider = ({ title, subheading }: TitleAndDividerProps) => {
  return (
    <>
      <h1>{title}</h1>
      {subheading && <div className='subheading'>{subheading}</div>}
      <div className='double-divider' style={{ borderColor: colors.theme }}></div>

      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
      <div className='vertical-spacer--sm' />
    </>
  );
};
