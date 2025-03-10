import colors from '../../constants/EXC365GDcolors';

export interface TitleAndDividerProps {
  title: string;
  subheading?: string;
}

export const TitleAndDivider = ({ title, subheading }: TitleAndDividerProps) => {
  return (
    <>
      <h1>{title}</h1>
      {subheading && <div className='subheading'>{subheading}</div>}
      <div className='doubleDivider' style={{ borderColor: colors.theme }}></div>

      {/* - - - - - spacer */}
      <div className='verticalSpacer' />
      <div className='verticalSpacer--sm' />
    </>
  );
};
